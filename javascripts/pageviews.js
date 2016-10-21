/**
 * Pageviews Analysis tool
 * @file Main file for Pageviews application
 * @author MusikAnimal, Kaldari, Marcelrf
 * @copyright 2016 MusikAnimal, Kaldari, Marcelrf
 * @license MIT License: https://opensource.org/licenses/MIT
 */

const config = require('./config');
const Pv = require('./shared/pv');
const ChartHelpers = require('./shared/chart_helpers');

/** Main PageViews class */
class PageViews extends mix(Pv).with(ChartHelpers) {
  constructor() {
    super(config);
    this.app = 'pageviews';

    this.entityInfo = false; /** let's us know if we've gotten the page info from API yet */
    this.specialRange = null;
    this.initialQuery = false;
    this.sort = 'title';
    this.direction = '-1';

    /**
     * Select2 library prints "Uncaught TypeError: XYZ is not a function" errors
     * caused by race conditions between consecutive ajax calls. They are actually
     * not critical and can be avoided with this empty function.
     */
    window.articleSuggestionCallback = $.noop;
  }

  /**
   * Initialize the application.
   * Called in `pv.js` after translations have loaded
   * @return {null} Nothing
   */
  initialize() {
    this.setupDateRangeSelector();
    this.setupSelect2();
    this.setupSelect2Colors();
    this.popParams();
    this.setupListeners();
    this.updateInterAppLinks();
  }

  /**
   * Query musikanimal API to get edit data about page within date range
   * @param {Array} pages - page names
   * @returns {Deferred} Promise resolving with editing data
   */
  getEditData(pages) {
    const dfd = $.Deferred();

    if (metaRoot) {
      $.ajax({
        url: `//${metaRoot}/article_analysis/basic_info`,
        data: {
          pages: pages.join('|'),
          project: this.project,
          start: this.daterangepicker.startDate.format('YYYY-MM-DD'),
          end: this.daterangepicker.endDate.format('YYYY-MM-DD')
        }
      }).then(data => dfd.resolve(data));
    } else {
      dfd.resolve({
        num_edits: 0,
        num_users: 0
      });
    }

    return dfd;
  }

  /**
   * Link to /langviews for given page and chosen daterange
   * @param {String} page - page title
   * @returns {String} URL
   */
  getLangviewsURL(page) {
    return `/langviews?${$.param(this.getParams())}&page=${page.replace(/[&%]/g, escape).score()}`;
  }

  /**
   * Link to /redirectviews for given page and chosen daterange
   * @param {String} page - page title
   * @returns {String} URL
   */
  getRedirectviewsURL(page) {
    return `/redirectviews?${$.param(this.getParams())}&page=${page.replace(/[&%]/g, escape).score()}`;
  }

  /**
   * Construct query for API based on what type of search we're doing
   * @param {Object} query - as returned from Select2 input
   * @returns {Object} query params to be handed off to API
   */
  getSearchParams(query) {
    if (this.autocomplete === 'autocomplete') {
      return {
        action: 'query',
        list: 'prefixsearch',
        format: 'json',
        pssearch: query || '',
        cirrusUseCompletionSuggester: 'yes'
      };
    } else if (this.autocomplete === 'autocomplete_redirects') {
      return {
        action: 'query',
        generator: 'prefixsearch',
        format: 'json',
        gpssearch: query || '',
        gpslimit: '10',
        redirects: 'true',
        cirrusUseCompletionSuggester: 'no'
      };
    }
  }

  /**
   * Parses the URL query string and sets all the inputs accordingly
   * Should only be called on initial page load, until we decide to support pop states (probably never)
   * @returns {null} nothing
   */
  popParams() {
    /** show loading indicator and add error handling for timeouts */
    setTimeout(this.startSpinny.bind(this)); // use setTimeout to force rendering threads to catch up

    let params = this.validateParams(
      this.parseQueryString('pages')
    );

    $(this.config.projectInput).val(params.project);
    $(this.config.platformSelector).val(params.platform);
    $(this.config.agentSelector).val(params.agent);

    this.patchUsage();
    this.validateDateRange(params);

    this.resetSelect2();

    /**
     * Sets the Select2 defaults, which triggers the Select2 listener and calls this.processInput
     * @param {Array} pages - pages to query
     * @return {null} nothing
     */
    const getPageInfoAndSetDefaults = pages => {
      this.getPageAndEditInfo(pages).then(pageInfo => {
        this.initialQuery = true;
        const normalizedPageNames = Object.keys(pageInfo);
        this.setSelect2Defaults(
          this.underscorePageNames(normalizedPageNames)
        );
      });
    };

    // set up default pages if none were passed in
    if (!params.pages || !params.pages.length) {
      // only set default of Cat and Dog for enwiki
      if (this.project === 'en.wikipedia') {
        params.pages = ['Cat', 'Dog'];
        this.setInitialChartType(params.pages.length);
        getPageInfoAndSetDefaults(params.pages);
      } else {
        // leave Select2 empty and put focus on it so they can type in pages
        this.focusSelect2();
        // manually hide spinny since we aren't drawing the chart,
        // again using setTimeout to let everything catch up
        setTimeout(this.stopSpinny.bind(this));
        this.setInitialChartType();
      }
    // If there's more than 10 articles attempt to create a PagePile and open it in Massviews
    } else if (params.pages.length > 10) {
      // If a PagePile is successfully created we are redirected to Massviews and the promise is never resolved,
      //   otherwise we just take the first 10 and process as we would normally
      this.massviewsRedirectWithPagePile(params.pages).then(getPageInfoAndSetDefaults);
    } else {
      this.setInitialChartType(params.pages.length);
      getPageInfoAndSetDefaults(params.pages);
    }
  }

  /**
   * Processes Mediawiki API results into Select2 format based on settings
   * @param {Object} data - data as received from the API
   * @returns {Object} data ready to handed over to Select2
   */
  processSearchResults(data) {
    const query = data ? data.query : {};
    let results = [];

    if (!query) return {results};

    if (this.autocomplete === 'autocomplete') {
      if (query.prefixsearch.length) {
        results = query.prefixsearch.map(function(elem) {
          return {
            id: elem.title.score(),
            text: elem.title
          };
        });
      }
    } else if (this.autocomplete === 'autocomplete_redirects') {
      /** first merge in redirects */
      if (query.redirects) {
        results = query.redirects.map(red => {
          return {
            id: red.from.score(),
            text: red.from
          };
        });
      }

      Object.keys(query.pages).forEach(pageId => {
        const pageData = query.pages[pageId];
        results.push({
          id: pageData.title.score(),
          text: pageData.title
        });
      });
    }

    return {results: results};
  }

  /**
   * Get all user-inputted parameters except the pages
   * @param {boolean} [specialRange] whether or not to include the special range instead of start/end, if applicable
   * @return {Object} project, platform, agent, etc.
   */
  getParams(specialRange = true) {
    let params = {
      project: $(this.config.projectInput).val(),
      platform: $(this.config.platformSelector).val(),
      agent: $(this.config.agentSelector).val()
    };

    /**
     * Override start and end with custom range values, if configured (set by URL params or setupDateRangeSelector)
     * Valid values are those defined in config.specialRanges, constructed like `{range: 'last-month'}`,
     *   or a relative range like `{range: 'latest-N'}` where N is the number of days.
     */
    if (this.specialRange && specialRange) {
      params.range = this.specialRange.range;
    } else {
      params.start = this.daterangepicker.startDate.format('YYYY-MM-DD');
      params.end = this.daterangepicker.endDate.format('YYYY-MM-DD');
    }

    /** add autolog param only if it was passed in originally, and only if it was false (true would be default) */
    if (this.noLogScale) params.autolog = 'false';

    return params;
  }

  /**
   * Replaces history state with new URL query string representing current user input
   * Called whenever we go to update the chart
   * @returns {null} nothing
   */
  pushParams() {
    const pages = $(this.config.select2Input).select2('val') || [],
      escapedPages = pages.join('|').replace(/[&%]/g, escape);

    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title,
        `?${$.param(this.getParams())}&pages=${escapedPages}`
      );
    }

    $('.permalink').prop('href', `?${$.param(this.getPermaLink())}&pages=${escapedPages}`);
  }

  /**
   * Sets up the article selector and adds listener to update chart
   * @returns {null} - nothing
   */
  setupSelect2() {
    const $select2Input = $(this.config.select2Input);

    let params = {
      ajax: this.getArticleSelectorAjax(),
      tags: this.autocomplete === 'no_autocomplete',
      placeholder: $.i18n('article-placeholder'),
      maximumSelectionLength: 10,
      minimumInputLength: 1
    };

    $select2Input.select2(params);
    $select2Input.on('change', this.processInput.bind(this));
    // FIXME: don't re-query everything when removing a page, just remove that page from the data
    // FIXME: this is getting called twice for some reason
    $select2Input.on('select2:unselect', e => {
      alert('removing');
      e.stopPropagation();
    });
    $select2Input.on('select2:open', e => {
      if ($(e.target).val() && $(e.target).val().length === 10) {
        $('.select2-search__field').one('keyup', () => {
          const message = $.i18n(
            'massviews-notice',
            10,
            `<strong><a href='/massviews/'>${$.i18n('massviews')}</a></strong>`
          );
          this.writeMessage(message, 'info', 10000);
        });
      }
    });
  }

  /**
   * Get ajax parameters to be used in setupSelect2, based on this.autocomplete
   * @return {object|null} to be passed in as the value for `ajax` in setupSelect2
   */
  getArticleSelectorAjax() {
    if (this.autocomplete !== 'no_autocomplete') {
      /**
       * This ajax call queries the Mediawiki API for article name
       * suggestions given the search term inputed in the selector.
       * We ultimately want to make the endpoint configurable based on whether they want redirects
       */
      return {
        url: `https://${this.project}.org/w/api.php`,
        dataType: 'jsonp',
        delay: 200,
        jsonpCallback: 'articleSuggestionCallback',
        data: search => this.getSearchParams(search.term),
        processResults: this.processSearchResults.bind(this),
        cache: true
      };
    } else {
      return null;
    }
  }

  /**
   * Calls parent setupProjectInput and updates the view if validations passed
   *   reverting to the old value if the new one is invalid
   * @returns {null} nothing
   * @override
   */
  validateProject() {
    if (super.validateProject()) {
      this.resetView(true);
      this.focusSelect2();
    }
  }

  /**
   * General place to add page-wide listeners
   * @override
   * @returns {null} - nothing
   */
  setupListeners() {
    super.setupListeners();
    $('#platform-select, #agent-select').on('change', this.processInput.bind(this));
    $('.sort-link').on('click', e => {
      const sortType = $(e.currentTarget).data('type');
      this.direction = this.sort === sortType ? -this.direction : 1;
      this.sort = sortType;
      this.updateTable();
    });
  }

  /**
   * Query the API for each page, building up the datasets and then calling renderData
   * @param {boolean} force - whether to force the chart to re-render, even if no params have changed
   * @returns {null} - nothin
   */
  processInput(force) {
    this.pushParams();

    /** prevent duplicate querying due to conflicting listeners */
    if (!force && (location.search === this.params && this.prevChartType === this.chartType)) {
      return;
    }

    this.params = location.search;

    const entities = $(config.select2Input).select2('val') || [];

    if (!entities.length) {
      return this.resetView();
    }

    this.setInitialChartType(entities.length);

    // clear out old error messages unless the is the first time rendering the chart
    this.clearMessages();

    this.prevChartType = this.chartType;
    this.destroyChart();
    this.startSpinny(); // show spinny and capture against fatal errors

    // We've already gotten data about the intial set of pages
    // This is because we need any page names given to be normalized when the app first loads
    if (this.initialQuery) {
      this.getPageViewsData(entities).done(xhrData => this.updateChart(xhrData));
      // set back to false so we get page and edit info for any newly entered pages
      this.initialQuery = false;
    } else {
      this.getPageAndEditInfo(entities).then(() => {
        this.getPageViewsData(entities).done(xhrData => this.updateChart(xhrData));
      });
    }
  }

  showSinglePageLegend() {
    const page = this.outputData[0];
    const topviewsMonth = moment().subtract(1, 'month').subtract(2, 'days');
    const topviewsDate = `${this.daterangepicker.endDate.format('YYYY')}/${topviewsMonth.format('MM')}/all-days`;

    $.ajax({
      url: `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${this.project}/` +
        `${$(this.config.platformSelector).val()}/${topviewsDate}`,
      dataType: 'json'
    }).done(data => {
      // store pageData from API, removing underscores from the page name
      const entry = data.items[0].articles.find(tv => tv.article === page.label.score());
      if (entry) {
        const monthName = this.daterangepicker.locale.monthNames[topviewsMonth.month()];
        $('.single-page-ranking').html(`
          Ranked ${entry.rank} of the
          <a target='_blank' href='${this.getTopviewsURL(this.project + '.org')}'>most-viewed pages</a>
          for ${monthName} ${topviewsMonth.year()}
        `);
      }
    }).always(() => {
      $('.table-view').hide();
      $('.single-page-stats').html(`
        ${this.getPageLink(page.label)}
        &middot;
        <span class='text-muted'>
          ${$(this.config.dateRangeSelector).val()}
        </span>
        &middot;
        ${$.i18n('num-pageviews', this.formatNumber(page.sum))}
      `);
    });
  }

  updateTable() {
    if (this.outputData.length === 1) {
      return this.showSinglePageLegend();
    } else {
      $('.single-page-stats').html('');
      $('.single-page-ranking').html('');
    }

    $('.output-list').html('');

    /** sort ascending by current sort setting */
    const datasets = this.outputData.sort((a, b) => {
      const before = this.getSortProperty(a, this.sort),
        after = this.getSortProperty(b, this.sort);

      if (before < after) {
        return this.direction;
      } else if (before > after) {
        return -this.direction;
      } else {
        return 0;
      }
    });

    $('.sort-link span').removeClass('glyphicon-sort-by-alphabet-alt glyphicon-sort-by-alphabet').addClass('glyphicon-sort');
    const newSortClassName = parseInt(this.direction, 10) === 1 ? 'glyphicon-sort-by-alphabet-alt' : 'glyphicon-sort-by-alphabet';
    $(`.sort-link--${this.sort} span`).addClass(newSortClassName).removeClass('glyphicon-sort');

    let hasProtection = false;
    datasets.forEach((item, index) => {
      if (item.protection !== $.i18n('none')) hasProtection = true;

      $('.output-list').append(this.config.templates.tableRow(this, item));
    });

    // add summations to show up as the bottom row in the table
    const sum = datasets.reduce((a,b) => a + b.sum, 0);
    const totals = {
      label: $.i18n('num-pages', datasets.length),
      sum,
      average: Math.round(sum / datasets.length),
      num_edits: datasets.reduce((a, b) => a + b.num_edits, 0),
      num_users: datasets.reduce((a, b) => a + b.num_users, 0),
      length: datasets.reduce((a, b) => a + b.length, 0),
      protection: $.i18n('num-protections', datasets.filter(page => page.protection !== 'none').length),
      watchers: datasets.reduce((a, b) => a + b.watchers || 0, 0)
    };
    $('.output-list').append(this.config.templates.tableRow(this, totals, true));

    // hide protection column if no pages are protected
    $('.table-view--protection').toggle(hasProtection);

    $('.table-view').show();
  }

  /**
   * Get value of given page for the purposes of column sorting in table view
   * @param  {object} item - page name
   * @param  {String} type - type of property to get
   * @return {String|Number} - value
   */
  getSortProperty(item, type) {
    switch (type) {
    case 'title':
      return item.label;
    case 'views':
      return Number(item.sum);
    case 'average':
      return Number(item.average);
    case 'edits':
      return Number(item.num_edits);
    case 'editors':
      return Number(item.num_users);
    case 'size':
      return Number(item.length);
    case 'watchers':
      return Number(item.watchers);
    }
  }

  /**
   * Get page info and editing info of given pages.
   * Also sets this.entityInfo
   * @param  {Array} pages - page names
   * @return {Deferred} Promise resolving with this.entityInfo
   */
  getPageAndEditInfo(pages) {
    const dfd = $.Deferred();

    this.getPageInfo(pages).done(data => {
      this.entityInfo = data;
      // use Object.keys(data) to get normalized page names
      this.getEditData(Object.keys(data)).done(editData => {
        for (let page in editData.pages) {
          Object.assign(this.entityInfo[page.descore()], editData.pages[page]);
        }
        dfd.resolve(this.entityInfo);
      }).fail(() => {
        dfd.resolve(this.entityInfo); // treat as if successful, simply won't show the data
      });
    }).fail(() => {
      dfd.resolve({}); // same, simply won't show the data if it failed
    });

    return dfd;
  }

  /**
   * Create a PagePile with given pages using the API and redirect to Massviews.
   * This is used when the user passes in more than 10 pages
   * @param {Array} pages - pages to convert to a PagePile and open in Massviews
   * @returns {Deferred} promise resolved only if creation of PagePile failed
   */
  massviewsRedirectWithPagePile(pages) {
    const dfd = $.Deferred();

    $.ajax({
      url: '//tools.wmflabs.org/pagepile/api.php',
      data: {
        action: 'create_pile_with_data',
        wiki: this.dbName(this.project),
        data: pages.join('\n')
      }
    }).success(pileData => {
      const params = this.getParams();
      delete params.project;
      document.location = `/massviews?overflow=1&${$.param(params)}&source=pagepile&target=${pileData.pile.id}`;
    }).fail(() => {
      // just grab first 10 pages and throw an error
      this.writeMessage(
        $.i18n('auto-pagepile-error', 'PagePile', 10),
        'error'
      );
      dfd.resolve(pages.slice(0, 10));
    });

    return dfd;
  }
}

$(document).ready(() => {
  /** assume hash params are supposed to be query params */
  if (document.location.hash && !document.location.search) {
    return document.location.href = document.location.href.replace('#', '?');
  } else if (document.location.hash) {
    return document.location.href = document.location.href.replace(/\#.*/, '');
  }

  new PageViews();
});
