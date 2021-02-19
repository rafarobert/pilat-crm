<?php
global $mod_strings;

global $sugar_flavor;
$config = SugarConfig::getInstance();
$moduleName = "AnalyticReporting";
if($sugar_flavor == 'CE')$rootUrl = $config->get('site_url')."/index.php";
else $rootUrl = $config->get('site_url')."/#bwc/index.php";

return  array(
    'moduleName' => $moduleName,
    'rootUrl' => $rootUrl,
    'internal' => array(
        'postUrl' => "index.php?module={$moduleName}&action=reportBuilder&file=reportBuilder",
        'reportUrl' => "{$rootUrl}?module={$moduleName}&action=report&record="
    ),
    'reportTypes' => array(
        0 => array(
            'name' => 'standard',
            'title' => $mod_strings['standard']
        ),
        1 => array(
            'name' => 'combined',
            'title' => $mod_strings['Combined']
        )
    ),
    'relationTypes' => array(
        0 => array(
            'name' => 'oneToMany',
            'title' => $mod_strings['oneToMany']
        ),
        1 => array(
            'name' => 'manyToMany',
            'title' => $mod_strings['manyToMany']
        )
    )
);