<!-- Siteviews Analysis tool -->
<!-- Copyright 2016 MusikAnimal -->
<?php $currentApp = "siteviews"; ?>
<!DOCTYPE html>
<html>
  <head>
    <?php include '../_head.php'; ?>
    <title><?php echo $I18N->msg( 'siteviews-title' ); ?></title>
  </head>
  <body class="<?php echo $rtl; ?> <?php echo $currentApp; ?>">
    <?php include '../_header.php'; ?>
    <main class="col-lg-8 col-lg-offset-2">
      <!-- Site notice -->
      <div class="text-center site-notice-wrapper">
        <div class="site-notice">
          <?php include "../_browser_check.php"; ?>
        </div>
      </div>
      <div class="row aqs-row options">
        <!-- Date range selector -->
        <div class="col-lg-5 col-sm-5">
          <label for="range-input">
            <?php echo $I18N->msg( 'dates' ); ?>
          </label>
          <span class="date-latest">
            <?php
              $days = array(10, 20, 30, 60, 90);
              $dayLinks = '';
              foreach ( $days as $day ) {
                $dayLinks .= " <a data-value='{$day}' href='#'>{$day}</a>";
              }
            ?>
            <?php echo $I18N->msg( 'latest-days', array( 'variables' => array( $dayLinks ) ) ); ?>
          </span>
          <input class="form-control aqs-date-range-selector" id="range-input">
        </div>
        <!-- Advanced options -->
        <div class="col-lg-3 col-sm-3">
          <label for="data-source-select">
            <?php echo $I18N->msg( 'metric' ); ?>
          </label>
          <select class="form-control" id="data-source-select">
            <option value="pageviews">
              <?php echo $I18N->msg( 'pageviews' ); ?>
            </option>
            <option value="unique-devices">
              <?php echo $I18N->msg( 'unique-devices' ); ?>
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-sm-2">
          <label for="platform-select">
            <?php echo $I18N->msg( 'platform' ); ?>
          </label>
          <select class="form-control" id="platform-select">
            <option value="all-access" data-value="all-access" data-ud-value="all-sites">
              <?php echo $I18N->msg( 'all' ); ?>
            </option>
            <option value="desktop" data-value="desktop" data-ud-value="desktop-site">
              <?php echo $I18N->msg( 'desktop' ); ?>
            </option>
            <option class="platform-select--mobile-app" value="mobile-app">
              <?php echo $I18N->msg( 'mobile-app' ); ?>
            </option>
            <option class="platform-select--mobile-web" value="mobile-web">
              <?php echo $I18N->msg( 'mobile-web' ); ?>
            </option>
            <option class="platform-select--mobile none" data-ud-value="mobile-site">
              <?php echo $I18N->msg( 'mobile' ); ?>
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-sm-2">
          <label for="agent-select">
            <?php echo $I18N->msg( 'agent' ); ?>
            <a class="help-link" href="/siteviews/faq#agents">
              <span class="glyphicon glyphicon-question-sign"></span>
            </a>
          </label>
          <select class="form-control" id="agent-select">
            <option value="all-agents">
              <?php echo $I18N->msg( 'all' ); ?>
            </option>
            <option selected="selected" value="user">
              <?php echo $I18N->msg( 'user' ); ?>
            </option>
            <option value="spider">
              <?php echo $I18N->msg( 'spider' ); ?>
            </option>
          </select>
        </div>
      </div>
      <!-- Site selector -->
      <div class="row aqs-row">
        <div class="col-lg-12">
          <label for="site-input">
            <?php echo $I18N->msg( 'projects' ); ?>
          </label>
          <select class="aqs-select2-selector col-lg-12 invisible" id="site-input" multiple="multiple"></select>
        </div>
      </div>
      <?php include "../_data_links.php"; ?>
      <!-- Chart -->
      <div class="chart-container">
        <canvas class="aqs-chart"></canvas>
      </div>
      <div class="message-container col-lg-12"></div>
      <!-- Legend -->
      <div class="col-lg-12 tm clearfix" id="chart-legend"></div>
    </main>
    <?php include "../_footer.php"; ?>
    <?php include "../_modals.php"; ?>
  </body>
</html>
