/**
 * Redirectviews Analysis tool
 * @file Main file for Redirectviews application
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 * @license MIT License: https://opensource.org/licenses/MIT
 * @requires Pv
 * @requires ChartHelpers
 * @requires ListHelpers
 */

const config = require('./config');
const siteMap = require('../shared/site_map');
const siteDomains = Object.keys(siteMap).map(key => siteMap[key]);
const Pv = require('../shared/pv');
const ChartHelpers = require('../shared/chart_helpers');
const ListHelpers = require('../shared/list_helpers');

/** Main RedirectViews class */
class RedirectViews extends mix(Pv).with(ChartHelpers, ListHelpers) {
  constructor() {
    super(config);
    this.app = 'redirectviews';
  }

  /**
   * Initialize the application.
   * Called in `pv.js` after translations have loaded
   */
  initialize() {
    this.assignDefaults();
    this.setupDateRangeSelector();
    this.popParams();
    this.setupListeners();
    this.updateInterAppLinks();

    /** only show options for line, bar and radar charts */
    $('.multi-page-chart-node').hide();
  }

  /**
   * Add general event listeners
   * @override
   */
  setupListeners() {
    super.setupListeners();

    $('#pv_form').on('submit', e => {
      e.preventDefault(); // prevent page from reloading
      this.processInput();
    });

    $('.another-query').on('click', () => {
      this.setState('initial');
      this.pushParams(true);
    });

    $('.sort-link').on('click', e => {
      const sortType = $(e.currentTarget).data('type');
      this.direction = this.sort === sortType ? -this.direction : 1;
      this.sort = sortType;
      this.renderData();
    });

    $('.view-btn').on('click', e => {
      document.activeElement.blur();
      this.view = e.currentTarget.dataset.value;
      this.toggleView(this.view);
    });
  }

  /**
   * Copy necessary default values to class instance.
   * Called when the view is reset.
   */
  assignDefaults() {
    ['sort', 'direction', 'outputData', 'hadFailure', 'total', 'view'].forEach(defaultKey => {
      this[defaultKey] = this.config.defaults[defaultKey];
    });
  }

  /**
   * Build our mother data set, from which we can draw a chart,
   *   render a list of data, whatever our heart desires :)
   * @param  {string} label - label for the dataset
   * @param  {string} link - HTML anchor tag for the label
   * @param  {array} datasets - array of datasets for each article, as returned by the Pageviews API
   * @return {object} mother data set, also stored in this.outputData
   */
  buildMotherDataset(label, link, datasets) {
    /**
     * `datasets` structure:
     *
     * [{
     *   title: page,
     *   items: [
     *     {
     *       access: '',
     *       agent: '',
     *       article: '',
     *       granularity: '',
     *       project: '',
     *       timestamp: '',
     *       views: 10
     *     }
     *   ]
     * }]
     *
     * output structure:
     *
     * {
     *   labels: [''],
     *   listData: [
     *     {
     *       label: '',
     *       data: [1,2,3,4],
     *       sum: 10,
     *       average: 2,
     *       index: 0
     *       ...
     *       MERGE in this.config.chartConfig[this.chartType].dataset(this.config.colors[0])
     *     }
     *   ],
     *   totalViewsSet: [1,2,3,4],
     *   sum: 10,
     *   average: 2,
     *   datesWithoutData: ['2016-05-16T00:00:00-00:00']
     * }
     */

    this.outputData = {
      labels: this.getDateHeadings(true), // labels needed for Charts.js, even though we'll only have one dataset
      link,
      listData: [],
      source: label
    };
    const startDate = moment(this.daterangepicker.startDate),
      endDate = moment(this.daterangepicker.endDate),
      length = this.numDaysInRange();

    let totalViewsSet = new Array(length).fill(0),
      datesWithoutData = [],
      totalTitles = [],
      sectionCount = 0;

    datasets.forEach((dataset, index) => {
      const data = dataset.items.map(item => item.views),
        sum = data.reduce((a, b) => a + b);

      totalTitles.push(dataset.title);
      if (dataset.section) sectionCount++;

      this.outputData.listData.push({
        data,
        label: dataset.title,
        section: dataset.section || '',
        url: `https://${this.project}.org/wiki/${dataset.title.score()}`,
        sum,
        average: sum / length,
        index
      });

      /**
       * Ensure we have data for each day, using null as the view count when data is actually not available yet
       * See fillInZeros() comments for more info.
       */
      const [viewsSet, incompleteDates] = this.fillInZeros(dataset.items, startDate, endDate);
      incompleteDates.forEach(date => {
        if (!datesWithoutData.includes(date)) datesWithoutData.push(date);
      });

      totalViewsSet = totalViewsSet.map((num, i) => num + viewsSet[i].views);
    });

    const grandSum = totalViewsSet.reduce((a, b) => (a || 0) + (b || 0));

    Object.assign(this.outputData, {
      datasets: [{
        label,
        data: totalViewsSet,
        sum: grandSum,
        average: grandSum / length
      }],
      datesWithoutData,
      sum: grandSum, // nevermind the duplication
      average: grandSum / length,
      titles: totalTitles,
      sectionCount
    });

    if (datesWithoutData.length) {
      const dateList = datesWithoutData.map(date => moment(date).format(this.dateFormat));
      this.writeMessage($.i18n('api-incomplete-data', dateList.sort().join(' &middot; '), dateList.length));
    }

    /**
     * If there were no failures, cache the result as some datasets can be very large.
     * There is server cache but there is also processing time that local caching can eliminate
     */
    if (!this.hadFailure) {
      // 10 minutes, TTL is milliseconds
      simpleStorage.set(this.getCacheKey(), this.outputData, {TTL: 600000});
    }

    return this.outputData;
  }

  /**
   * Get the base project name (without language and the .org)
   * @returns {boolean} projectname
   */
  get baseProject() {
    return this.project.split('.')[1];
  }

  /**
   * @returns {Typeahead} instance
   */
  get typeahead() {
    return $(this.config.sourceInput).data('typeahead');
  }

  /**
   * Get informative filename without extension to be used for export options
   * @override
   * @return {string} filename without an extension
   */
  getExportFilename() {
    const params = this.getParams(true);
    return `${this.outputData.source}-${params.start.replace(/-/g, '')}-${params.end.replace(/-/g, '')}`;
  }

  /**
   * Get all user-inputted parameters
   * @param {boolean} [forCacheKey] whether or not to include the page name, and exclude sort and direction
   *   in the returned object. This is for the purposes of generating a unique cache key for params affecting the API queries
   * @return {Object} project, platform, agent, etc.
   */
  getParams(forCacheKey = false) {
    let params = {
      project: $(this.config.projectInput).val(),
      platform: $(this.config.platformSelector).val(),
      agent: $(this.config.agentSelector).val()
    };

    /**
     * Override start and end with custom range values, if configured (set by URL params or setupDateRangeSelector)
     * Valid values are those defined in this.config.specialRanges, constructed like `{range: 'last-month'}`,
     *   or a relative range like `{range: 'latest-N'}` where N is the number of days.
     */
    if (this.specialRange && !forCacheKey) {
      params.range = this.specialRange.range;
    } else {
      params.start = this.daterangepicker.startDate.format('YYYY-MM-DD');
      params.end = this.daterangepicker.endDate.format('YYYY-MM-DD');
    }

    /** only certain characters within the page name are escaped */
    params.page = $(this.config.sourceInput).val().score().replace(/[&%]/g, escape);

    if (!forCacheKey) {
      params.sort = this.sort;
      params.direction = this.direction;
      params.view = this.view;

      /** add autolog param only if it was passed in originally, and only if it was false (true would be default) */
      if (this.noLogScale) params.autolog = 'false';
    }

    return params;
  }

  /**
   * Push relevant class properties to the query string
   * @param  {Boolean} clear - wheter to clear the query string entirely
   */
  pushParams(clear = false) {
    if (!window.history || !window.history.replaceState) return;

    if (clear) {
      return history.replaceState(null, document.title, location.href.split('?')[0]);
    }

    window.history.replaceState({}, document.title, `?${$.param(this.getParams())}`);

    $('.permalink').prop('href', `/redirectviews?${$.param(this.getPermaLink())}`);
  }

  /**
   * Render list of redirectviews into view
   */
  renderData() {
    super.renderData(sortedDatasets => {
      $('.output-totals').html(
        `<th scope='row'>${$.i18n('totals')}</th>
         <th>${$.i18n('num-redirects', this.outputData.titles.length - 1)}</th>
         <th>${$.i18n('num-sections', this.outputData.sectionCount)}</th>
         <th>${this.formatNumber(this.outputData.sum)}</th>
         <th>${this.formatNumber(Math.round(this.outputData.average))} / ${$.i18n('day')}</th>`
      );
      $('#output_list').html('');

      sortedDatasets.forEach((item, index) => {
        const isSource = item.label === this.outputData.source;

        let sectionMarkup = '';

        if (item.section) {
          const sectionUrl = `${this.getPageURL(this.outputData.source)}#${encodeURIComponent(item.section.score())}`;
          sectionMarkup = `<a href="${sectionUrl}" target="_blank">#${item.section}</a>`;
        }

        $('#output_list').append(
          `<tr>
           <th scope='row'>${index + 1}</th>
           <td><a href="${item.url}" target="_blank">${item.label}</a> ${isSource ? '(' + $.i18n('target') + ')' : ''}</td>
           <td>${sectionMarkup}</a></td>
           <td><a target='_blank' href='${this.getPageviewsURL(`${this.project}.org`, item.label)}'>${this.formatNumber(item.sum)}</a></td>
           <td>${this.formatNumber(Math.round(item.average))} / ${$.i18n('day')}</td>
           </tr>`
        );
      });
    });
  }

  /**
   * Get value of given langview entry for the purposes of column sorting
   * @param  {object} item - langview entry within this.outputData
   * @param  {String} type - type of property to get
   * @return {String|Number} - value
   */
  getSortProperty(item, type) {
    switch (type) {
    case 'title':
      return item.label;
    case 'section':
      return item.section;
    case 'views':
      return Number(item.sum);
    }
  }

  /**
   * Loop through given pages and query the pageviews API for each
   *   Also updates this.outputData with result
   * @param  {Array} redirectData - as given by the getRedirects promise
   * @return {Deferred} - Promise resolving with data ready to be rendered to view
   */
  getPageViewsData(redirectData) {
    const startDate = this.daterangepicker.startDate.startOf('day'),
      endDate = this.daterangepicker.endDate.startOf('day');

    let dfd = $.Deferred(), promises = [], count = 0, failureRetries = {},
      totalRequestCount = redirectData.length, failedPages = [], pageViewsData = [];

    const makeRequest = page => {
      const uriEncodedPageName = encodeURIComponent(page.title);

      const url = (
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/${this.project}` +
        `/${$(this.config.platformSelector).val()}/${$(this.config.agentSelector).val()}/${uriEncodedPageName}/daily` +
        `/${startDate.format(this.config.timestampFormat)}/${endDate.format(this.config.timestampFormat)}`
      );
      const promise = $.ajax({ url, dataType: 'json' });
      promises.push(promise);

      promise.done(pvData => {
        pageViewsData.push({
          title: page.title,
          section: page.fragment,
          items: pvData.items
        });
      }).fail(errorData => {
        /** first detect if this was a Cassandra backend error, and if so, schedule a re-try */
        const cassandraError = errorData.responseJSON.title === 'Error in Cassandra table storage backend',
          failedPageLink = this.getPageLink(page.title, `${this.project}.org`);

        if (cassandraError) {
          if (failureRetries[page.title]) {
            failureRetries[page.title]++;
          } else {
            failureRetries[page.title] = 1;
          }

          /** maximum of 3 retries */
          if (failureRetries[page.title] < 3) {
            totalRequestCount++;
            return this.rateLimit(makeRequest, this.config.apiThrottle, this)(page);
          }

          /** retries exceeded */
          failedPages.push(failedPageLink);
        } else {
          this.writeMessage(
            `${failedPageLink}: ${$.i18n('api-error', 'Pageviews API')} - ${errorData.responseJSON.title}`
          );
        }

        // unless it was a 404, don't cache this series of requests
        if (errorData.status !== 404) hadFailure = true;
      }).always(() => {
        this.updateProgressBar(++count, totalRequestCount);

        if (count === totalRequestCount) {
          if (failedPages.length) {
            this.writeMessage($.i18n(
              'api-error-timeout',
              '<ul>' +
              failedPages.map(failedPage => `<li>${failedPage}</li>`).join('') +
              '</ul>'
            ));
          }

          dfd.resolve(pageViewsData);
        }
      });
    };

    const requestFn = this.rateLimit(makeRequest, this.config.apiThrottle, this);

    redirectData.forEach(page => {
      requestFn(page);
    });

    return dfd;
  }

  /**
   * Get all redirects of a page
   * @param  {String} pageName - name of page we want to get data about
   * @return {Deferred} - Promise resolving with redirect data
   */
  getRedirects(pageName) {
    const dfd = $.Deferred();

    const promise = $.ajax({
      url: `https://${this.project}.org/w/api.php`,
      jsonp: 'callback',
      dataType: 'jsonp',
      data: {
        action: 'query',
        format: 'json',
        formatversion: 2,
        prop: 'redirects',
        rdprop: 'title|fragment',
        rdlimit: 500,
        titles: pageName
      }
    });

    promise.done(data => {
      if (data.error) {
        return this.setState('initial', () => {
          this.writeMessage(
            `${$.i18n('api-error', 'Redirect API')}: ${data.error.info.escape()}`
          );
        });
      }

      const redirects = [{
        title: pageName
      }].concat(data.query.pages[0].redirects || []);

      return dfd.resolve(redirects);
    });

    return dfd;
  }

  /**
   * Parses the URL query string and sets all the inputs accordingly
   * Should only be called on initial page load, until we decide to support pop states (probably never)
   */
  popParams() {
    let params = this.validateParams(
      this.parseQueryString('pages')
    );

    $(this.config.projectInput).val(params.project);
    this.validateDateRange(params);

    this.patchUsage();

    // fill in value for the page
    if (params.page) {
      $(this.config.sourceInput).val(decodeURIComponent(params.page).descore());
    }

    // If there are invalid params, remove page from params so we don't process the defaults.
    // FIXME: we're checking for site messages because super.validateParams doesn't return a boolean
    //   or any indication the validations failed. This is hacky but necessary.
    if ($('.site-notice .alert-danger').length) {
      delete params.page;
    }

    $(this.config.platformSelector).val(params.platform);
    $(this.config.agentSelector).val(params.agent);

    /** export necessary params to outer scope */
    ['sort', 'direction', 'view'].forEach(key => {
      this[key] = params[key];
    });

    this.setupSourceInput();

    /** start up processing if page name is present */
    if (params.page) {
      this.processInput();
    } else {
      $(this.config.sourceInput).focus();
    }
  }

  /**
   * Helper to set a CSS class on the `main` node,
   *   styling the document based on a 'state'
   * @param {String} state - class to be added;
   *   should be one of ['initial', 'processing', 'complete']
   */
  setState(state) {
    $('main').removeClass(this.config.formStates.join(' ')).addClass(state);

    switch (state) {
    case 'initial':
      this.clearMessages();
      this.assignDefaults();
      this.destroyChart();
      $('output').removeClass('list-mode').removeClass('chart-mode');
      $('.data-links').addClass('invisible');
      if (this.typeahead) this.typeahead.hide();
      $(this.config.sourceInput).val('').focus();
      break;
    case 'processing':
      this.processStarted();
      this.clearMessages();
      document.activeElement.blur();
      $('.progress-bar').addClass('active');
      break;
    case 'complete':
      this.processEnded();
      /** stop hidden animation for slight performance improvement */
      this.updateProgressBar(0);
      $('.progress-bar').removeClass('active');
      $('.data-links').removeClass('invisible');
      break;
    case 'invalid':
      break;
    }
  }

  /**
   * Process the redirectviews for the article and options entered
   * Called when submitting the form
   */
  processInput() {
    const page = $(this.config.sourceInput).val();

    this.setState('processing');

    const readyForRendering = () => {
      $('.output-title').html(this.outputData.link);
      $('.output-params').html($(this.config.dateRangeSelector).val());
      this.setInitialChartType();
      this.renderData();
    };

    if (this.isRequestCached()) {
      $('.progress-bar').css('width', '100%');
      $('.progress-counter').text($.i18n('loading-cache'));
      return setTimeout(() => {
        this.outputData = simpleStorage.get(this.getCacheKey());
        readyForRendering();
      }, 500);
    }

    $('.progress-counter').text($.i18n('fetching-data', 'Redirects API'));
    this.getRedirects(page).done(redirectData => {
      this.getPageViewsData(redirectData).done(pageViewsData => {
        $('.progress-bar').css('width', '100%');
        $('.progress-counter').text($.i18n('building-dataset'));
        const pageLink = this.getPageLink(decodeURIComponent(page), this.project);
        setTimeout(() => {
          this.buildMotherDataset(page, pageLink, pageViewsData);
          readyForRendering();
        }, 250);
      });
    }).fail(error => {
      this.setState('initial');

      /** structured error comes back as a string, otherwise we don't know what happened */
      if (typeof error === 'string') {
        this.writeMessage(error);
      } else {
        this.writeMessage($.i18n('api-error-unknown', 'Wikidata'));
      }
    });
  }

  /**
   * Setup typeahead on the article input, killing the prevous instance if present
   */
  setupSourceInput() {
    if (this.typeahead) this.typeahead.destroy();

    $(this.config.sourceInput).typeahead({
      ajax: {
        url: `https://${this.project}.org/w/api.php`,
        timeout: 200,
        triggerLength: 1,
        method: 'get',
        preDispatch: query => {
          return {
            action: 'opensearch',
            redirects: 'resolve',
            format: 'json',
            search: query
          };
        },
        preProcess: data => data[1]
      }
    });
  }

  /**
   * Calls parent setupProjectInput and updates the view if validations passed
   *   reverting to the old value if the new one is invalid
   * @override
   */
  validateProject() {
    if (super.validateProject()) {
      this.setState('initial');

      /** kill and re-init typeahead to point to new project */
      this.setupSourceInput();
    }
  }

  /**
   * Exports current lang data to CSV format and loads it in a new tab
   * With the prepended data:text/csv this should cause the browser to download the data
   * @returns {string} CSV content
   */
  exportCSV() {
    let csvContent = `data:text/csv;charset=utf-8,Title,${this.getDateHeadings(false).join(',')}\n`;

    // Add the rows to the CSV
    this.outputData.listData.forEach(page => {
      const pageName = '"' + page.label.descore().replace(/"/g, '""') + '"';

      csvContent += [
        pageName,
      ].concat(page.data).join(',') + '\n';
    });

    // Output the CSV file to the browser
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

  /**
   * Get informative filename without extension to be used for export options
   * @return {string} filename without an extension
   */
  getExportFilename() {
    const params = this.getParams(true);
    return `${this.outputData.source}-${params.start.replace(/-/g, '')}-${params.end.replace(/-/g, '')}`;
  }
}

$(document).ready(() => {
  /** assume hash params are supposed to be query params */
  if (document.location.hash && !document.location.search) {
    return document.location.href = document.location.href.replace('#', '?');
  } else if (document.location.hash) {
    return document.location.href = document.location.href.replace(/\#.*/, '');
  }

  new RedirectViews();
});
