<!DOCTYPE html>
<html>
  <head>
    <?php include '../../_head.php'; ?>
    <title>
      <?php echo $I18N->msg( 'siteviews-title' ) . ' – ' . $I18N->msg( 'url-structure' ); ?>
    </title>
  </head>
  <body>
    <div class="container">
      <header class="col-lg-12 text-center">
        <h4>
          <strong>
            <?php echo $I18N->msg( 'siteviews-title' ); ?>
          </strong>
          <small class="app-description">
            <?php echo $I18N->msg( 'url-structure' ); ?>
          </small>
        </h4>
      </header>
      <main class="col-lg-10 col-lg-offset-1">
        <div>
          <?php $siteviewsLink = "<pre>//tools.wmflabs.org/siteviews?sites={{SERVERNAME}}</pre>"; ?>
          <?php echo $I18N->msg( 'url-structure-example-siteviews', [ 'variables' => [ $siteviewsLink ], 'parsemag' => true ] ); ?>
        </div>
        <div>
          <h3>
            <?php echo $I18N->msg( 'url-structure-parameters' ); ?>
            <small><?php echo $I18N->msg( 'url-structure-parameters-order' ); ?></small>
          </h3>
          <hr>
          <dl class="dl-horizontal">
            <dt>sites</dt>
            <dd>
              <?php $sitematrixLink = "<a href='https://meta.wikimedia.org/w/api.php?action=sitematrix&amp;formatversion=2'>" . strtolower( $I18N->msg( 'projects' ) ) . "</a>"; ?>
              <?php echo $I18N->msg( 'url-structure-projects', [ 'variables' => [ $sitematrixLink, '<code>de.wikipedia.org|fr.wikipedia.org</code>' ], 'parsemag' => true ] ); ?>
            </dd>
            <?php $defaultRange = 'latest'; ?>
            <?php include "../../url_parts/date_ranges.php"; ?>
            <dt>source</dt>
            <dd>
              <?php echo $I18N->msg( 'url-structure-source', [ 'variables' => [ '<code>pageviews</code>', '<code>unique-devices</code>' ], 'parsemag' => true ] ); ?>
            </dd>
            <dt>platform</dt>
            <dd>
              <p>
                <i>
                  <?php echo $I18N->msg( 'url-structure-siteviews-platform', [ 'variables' => [ 'source', '<code>pageviews</code>' ] ] ) . ':'; ?>
                </i>
                <br>
                <?php $values = [ '<code>all-access</code> ' . $defaultMsg, '<code>desktop</code>', '<code>mobile-app</code>', '<code>mobile-web</code>' ]; ?>
                <?php echo generateListMessage( $values ); ?>
              </p>
              <p>
                <i>
                  <?php echo $I18N->msg( 'url-structure-siteviews-platform', [ 'variables' => [ 'source', '<code>unique-devices</code>' ] ] ) . ':'; ?>
                </i>
                <br>
                <?php $values = [ '<code>all-sites</code> ' . $defaultMsg, '<code>desktop-site</code>', '<code>mobile-site</code>' ]; ?>
                <?php echo generateListMessage( $values ); ?>
              </p>
            </dd>
            <dt>agent</dt>
            <dd>
              <?php echo $I18N->msg( 'url-structure-siteviews-agent', [ 'variables' => [ '<code>source</code>', '<code>pageviews</code>' ] ] ); ?>
              <br>
              <?php echo $I18N->msg( 'url-structure-agent', [ 'variables' => [ '<code>user</code>', '<code>spider</code>', '<code>bot</code>', '<code>all-agents</code>' ], 'parsemag' => true ] ); ?>
            </dd>
            <?php include "../../url_parts/autolog.php"; ?>
          </dl>
        </div>
        <div class="col-lg-12 text-center tm">
          <a href="/siteviews">
            <?php echo $I18N->msg( 'faq-return-to', [ 'variables' => [ $I18N->msg( 'siteviews-title' ) ], 'parsemag' => true ] ); ?>
          </a>
        </div>
        <?php $currentApp = "siteviews"; ?>
        <?php include "../../_footer.php"; ?>
      </main>
    </div>
  </body>
</html>
