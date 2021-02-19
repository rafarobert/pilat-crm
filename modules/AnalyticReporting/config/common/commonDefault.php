<?php
global $sugar_flavor;
$config = SugarConfig::getInstance();
$moduleName = "AnalyticReporting";
if($sugar_flavor == 'CE')$rootUrl = $config->get('site_url')."/index.php";
else $rootUrl = $config->get('site_url')."/#bwc/index.php";

return  array(
    'moduleName' => $moduleName,
    'rootUrl' => $rootUrl,
    'url' => array(
        'index' => "{$rootUrl}?module={$moduleName}&action=index",
        'reportBuilder' => "{$rootUrl}?module={$moduleName}&action=reportBuilder",
        'settings' => "{$rootUrl}?module={$moduleName}&action=settings"
    ),

);