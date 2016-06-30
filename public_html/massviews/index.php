<!-- Massviews Analysis tool -->
<!-- Copyright 2016 MusikAnimal -->
<?php $currentApp = "massviews"; ?>
<!DOCTYPE html>
<html>
  <head>
    <?php include '../_head.php'; ?>
    <title><?php echo $I18N->msg( 'massviews-title' ); ?></title>
  </head>
  <body class="<?php echo $rtl; ?> <?php echo $currentApp; ?>">
    <div class="container">
      <header class="col-lg-12 text-center">
        <h4>
          <strong>
            <?php echo $I18N->msg( 'massviews-title' ); ?>
          </strong>
          <small class="app-description">
            <?php echo $I18N->msg( 'massviews-description' ); ?>
          </small>
        </h4>
      </header>
      <main class="col-lg-10 col-lg-offset-1">
        <!-- Site notice -->
        <div class="text-center site-notice-wrapper">
          <div class="site-notice">
            <?php include "../_browser_check.php"; ?>
          </div>
        </div>
        <form id="pv_form">
          <div class="row aqs-row options">
            <!-- Date range selector -->
            <div class="col-lg-4 col-sm-4">
              <label for="range_input">
                <?php echo $I18N->msg( 'dates' ); ?>
              </label>
              <input class="form-control aqs-date-range-selector" id="range_input">
            </div>
            <!-- Advanced options -->
            <div class="col-lg-4 col-sm-4">
              <label for="platform_select">
                <?php echo $I18N->msg( 'platform' ); ?>
              </label>
              <select class="form-control" id="platform_select">
                <option value="all-access">
                  <?php echo $I18N->msg( 'all' ); ?>
                </option>
                <option value="desktop">
                  <?php echo $I18N->msg( 'desktop' ); ?>
                </option>
                <option value="mobile-app">
                  <?php echo $I18N->msg( 'mobile-app' ); ?>
                </option>
                <option value="mobile-web">
                  <?php echo $I18N->msg( 'mobile-web' ); ?>
                </option>
              </select>
            </div>
            <div class="col-lg-4 col-sm-4">
              <label for="agent_select">
                <?php echo $I18N->msg( 'agent' ); ?>
                <a class="help-link" href="/massviews/faq#agents">
                  <span class="glyphicon glyphicon-question-sign"></span>
                </a>
              </label>
              <select class="form-control" id="agent_select">
                <option value="all-agents">
                  <?php echo $I18N->msg( 'all' ); ?>
                </option>
                <option selected="selected" value="user">
                  <?php echo $I18N->msg( 'user' ); ?>
                </option>
                <option value="spider">
                  <?php echo $I18N->msg( 'spider' ); ?>
                </option>
                <option value="bot">
                  <?php echo $I18N->msg( 'bot' ); ?>
                </option>
              </select>
            </div>
          </div>
          <!-- Page Pile input -->
          <div class="row aqs-row">
            <div class="col-lg-12">
              <label for="source_input">
                <?php echo $I18N->msg( 'source' ); ?>
                <a class="help-link" href="/massviews/faq#sources">
                  <span class="glyphicon glyphicon-question-sign"></span>
                </a>
              </label>
              <div class="checkbox pull-right category-subject-toggle">
                <label>
                  <input class="category-subject-toggle--input" type="checkbox">
                    <?php echo $I18N->msg( 'category-subject-toggle' ); ?>
                  </input>
                  <a class="help-link" href="/massviews/faq#category_subject_toggle">
                    <span class="glyphicon glyphicon-question-sign"></span>
                  </a>
                </label>
              </div>
              <div class="input-group clearfix">
                <div class="input-group-btn">
                  <button class="btn btn-default dropdown-toggle" id="source_button" type="button" data-value="category" data-toggle="dropdown" aria-haspopup="true" aria-expand="false">
                    <?php echo $I18N->msg( 'category-url' ); ?>
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="source-option" href="#" data-value="category">
                        <?php echo $I18N->msg( 'category-url' ); ?>
                      </a>
                    </li>
                    <li>
                      <a class="source-option" href="#" data-value="pagepile">
                        <?php echo $I18N->msg( 'page-pile-id' ); ?>
                      </a>
                    </li>
                    <li>
                      <a class="source-option" href="#" data-value="transclusions">
                        <?php echo $I18N->msg( 'template-url' ); ?>
                      </a>
                    </li>
                  </ul>
                </div>
                <input class="form-control input-control source-input" id="source_input" min="0" required="required">
                <span class="input-group-btn">
                  <button class="btn btn-primary pull-right btn-submit">
                    <?php echo $I18N->msg( 'submit' ); ?>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
        <?php
          $columns = array(
            'title' => 'page-title',
            'views' => 'pageviews'
          );
        ?>
        <?php include "../_output.php"; ?>
        <?php include "../_footer.php"; ?>
      </main>
      <?php include "../_modals.php"; ?>
    </div>
  </body>
</html>