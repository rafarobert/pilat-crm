<?php

$outfitters_config = array(
    'name' => 'AnalyticReporting', //The matches the id value in your manifest file. This allow the library to lookup addon version from upgrade_history, so you can see what version of addon your customers are using
    'shortname' => 'analytic-reporting', //The short name of the Add-on. e.g. For the url https://www.sugaroutfitters.com/addons/sugaroutfitters the shortname would be sugaroutfitters
    'public_key' => '0b168f2afabc7d22d619a6671719151c,7e496a0abaab5ec1ab1978a316b8dd3f', //The public key associated with the group
    'api_url' => 'https://store.suitecrm.com/api/v1',
    'validate_users' => false,
    'manage_licensed_users' => false, //Enable the user management tool to determine which users will be licensed to use the add-on. validate_users must be set to true if this is enabled. If the add-on must be licensed for all users then set this to false.
    'validation_frequency' => 'daily', //default: weekly options: hourly, daily, weekly
    'continue_url' => '', //[optional] Will show a button after license validation that will redirect to this page. Could be used to redirect to a configuration page such as index.php?module=MyCustomModule&action=config
);


// #6223 [START] Remove the logic where the api_url is determined dynamically based on the sugar version.
// $sugarConfig = SugarConfig::getInstance();
// $suiteVersion = $sugarConfig->get('suitecrm_version');
// if(!empty($suiteVersion)){
//     $outfitters_config['api_url'] = 'https://store.suitecrm.com/api/v1';
// }

// [OPTIONAL] If you want to make a single package install on both Sugar 6 and Sugar 7
// You may need different continue URLs.
// Usually you would put your Sugar 7 url in the array above
// Below you can check to see if it's Sugar 6, then set the continue_url to your Sugar 6 url

// global $sugar_version;
// if(preg_match( "/^6.*/", $sugar_version) ) {
//     $outfitters_config['continue_url'] = 'index.php?module=SugarChimp&action=setup';
// }
