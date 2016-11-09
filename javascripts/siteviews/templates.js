/**
 * @file Templates used by Chart.js for Siteviews app
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 */

/**
 * Templates used by Chart.js.
 * Functions used within our app must be in the global scope.
 * All quotations must be double-quotes or properly escaped.
 * @type {Object}
 */
const templates = {
  chartLegend(scope) {
    const dataList = (entity, multiEntity = false) => {
      // let editsLink;

      let infoHash = {
        'Pageviews': {
          'Pageviews': scope.formatNumber(entity.sum),
          'Daily average': scope.formatNumber(entity.average)
        },
        'Statistics': {
          'Pages': scope.formatNumber(entity.pages),
          'Articles': scope.formatNumber(entity.articles),
          'Edits': scope.formatNumber(entity.edits),
          'Images': scope.formatNumber(entity.images),
          'Users': scope.formatNumber(entity.users),
          'Active users': scope.formatNumber(entity.activeusers),
          'Admins': scope.formatNumber(entity.admins)
        }
      };

      let markup = '';

      for (let block in infoHash) {
        const blockId = block.toLowerCase().score();
        markup += `<div class='legend-block legend-block--${blockId}'>
          <h5>${block}</h5><hr/>
          <div class='legend-block--body'>`;
        for (let key in infoHash[block]) {
          const value = infoHash[block][key];
          if (!value) continue;
          markup += `
            <div class="linear-legend--counts">
              ${key}:
              <span class='pull-right'>
                ${value}
              </span>
            </div>`;
        }
        markup += '</div></div>';
      }

      if (!multiEntity) {
        markup += `
          <div class="linear-legend--links">
            <a href="${scope.getTopviewsURL(entity.label)}" target="_blank">${$.i18n('most-viewed-pages')}</a>
          </div>`;
      }

      return markup;
    };

    if (scope.outputData.length === 1) {
      return dataList(scope.outputData[0]);
    }

    const sum = scope.outputData.reduce((a,b) => a + b.sum, 0);
    const totals = {
      sum,
      average: Math.round(sum / scope.outputData.length),
      pages: scope.outputData.reduce((a, b) => a + b.pages, 0),
      articles: scope.outputData.reduce((a, b) => a + b.articles, 0),
      edits: scope.outputData.reduce((a, b) => a + b.edits, 0),
      images: scope.outputData.reduce((a, b) => a + b.images, 0),
      users: scope.outputData.reduce((a, b) => a + b.users, 0),
      activeusers: scope.outputData.reduce((a, b) => a + b.activeusers, 0),
      admins: scope.outputData.reduce((a, b) => a + b.admins, 0)
    };

    return dataList(totals, true);
  },

  tableRow(scope, item, last = false) {
    const tag = last ? 'th' : 'td';
    const linksRow = last ? '' : `
        <a href="${scope.getTopviewsURL(item.label)}" target="_blank">${$.i18n('most-viewed-pages')}</a>
      `;

    return `
      <tr>
        <${tag} class='table-view--color-col'>
          <span class='table-view--color-block' style="background:${item.color}"></span>
        </${tag}>
        <${tag} class='table-view--title'>${last ? item.label : scope.getPageLink(item.label)}</${tag}>
        <${tag} class='table-view--views'>${scope.formatNumber(item.sum)}</${tag}>
        <${tag} class='table-view--average'>${scope.formatNumber(item.average)}</${tag}>
        <${tag} class='table-view-edits table-view--edit-data'>${historyRow}</${tag}>
        <${tag} class='table-view-editors table-view--edit-data'>${numUsers}</${tag}>
        <${tag} class='table-view--size'>${scope.formatNumber(item.length)}</${tag}>
        <${tag} class='table-view--protection'>${item.protection}</${tag}>
        <${tag} class='table-view--watchers'>${item.watchers ? scope.formatNumber(item.watchers) : $.i18n('unknown')}</${tag}>
        <${tag}>${linksRow}</${tag}>
      </tr>
    `;
  },

  linearLegend: (datasets, scope) => {
    let markup = '';

    if (datasets.length === 1) {
      const dataset = datasets[0];
      return `<div class="linear-legend--totals">
        <strong>${$.i18n('totals')}:</strong>
        ${scope.formatNumber(dataset.sum)} (${scope.formatNumber(dataset.average)}/${$.i18n('day')})
        &bullet;
        <a href="https://${dataset.label}/wiki/Special:Statistics?uselang=${i18nLang}" target="_blank">${$.i18n('statistics')}</a>
        &bullet;
        <a href="${scope.getTopviewsURL(dataset.label)}" target="_blank">${$.i18n('most-viewed-pages')}</a>
      </div>`;
    }

    if (datasets.length > 1) {
      const total = datasets.reduce((a,b) => a + b.sum, 0);
      markup = `<div class="linear-legend--totals">
        <strong>${$.i18n('totals')}:</strong>
        ${scope.formatNumber(total)} (${scope.formatNumber(Math.round(total / scope.numDaysInRange()))}/${$.i18n('day')})
      </div>`;
    }
    markup += '<div class="linear-legends">';

    for (let i = 0; i < datasets.length; i++) {
      markup += `
        <span class="linear-legend">
          <div class="linear-legend--label" style="background-color:${scope.rgba(datasets[i].color, 0.8)}">
            <a href="https://${(datasets[i].label)}" target="_blank">${datasets[i].label}</a>
          </div>
          <div class="linear-legend--counts">
            ${scope.formatNumber(datasets[i].sum)} (${scope.formatNumber(datasets[i].average)}/${$.i18n('day')})
          </div>
          <div class="linear-legend--links">
            <a href="https://${datasets[i].label}/wiki/Special:Statistics?uselang=${i18nLang}" target="_blank">${$.i18n('statistics')}</a>
            &bullet;
            <a href="${scope.getTopviewsURL(datasets[i].label)}" target="_blank">${$.i18n('most-viewed-pages')}</a>
          </div>
        </span>
      `;
    }
    return markup += '</div>';
  },

  circularLegend(datasets, scope) {
    const dataset = datasets[0],
      total = dataset.data.reduce((a,b) => a + b);
    let markup = `<div class="linear-legend--totals">
      <strong>${$.i18n('totals')}:</strong>
      ${scope.formatNumber(total)} (${scope.formatNumber(Math.round(total / scope.numDaysInRange()))}/${$.i18n('day')})
    </div>`;

    markup += '<div class="linear-legends">';

    for (let i = 0; i < dataset.data.length; i++) {
      const metaKey = Object.keys(dataset._meta)[0];
      const label = dataset._meta[metaKey].data[i]._view.label;
      markup += `
        <span class="linear-legend">
          <div class="linear-legend--label" style="background-color:${dataset.backgroundColor[i]}">
            <a href="https://${label}" target="_blank">${label}</a>
          </div>
          <div class="linear-legend--counts">
            ${scope.formatNumber(dataset.data[i])} (${scope.formatNumber(dataset.averages[i])}/${$.i18n('day')})
          </div>
          <div class="linear-legend--links">
            <a href="https://${label}/wiki/Special:Statistics?uselang=${i18nLang}" target="_blank">${$.i18n('statistics')}</a>
            &bullet;
            <a href="${scope.getTopviewsURL(label)}" target="_blank">${$.i18n('most-viewed-pages')}</a>
          </div>
        </span>
      `;
    }
    return markup += '</div>';
  }
};

module.exports = templates;
