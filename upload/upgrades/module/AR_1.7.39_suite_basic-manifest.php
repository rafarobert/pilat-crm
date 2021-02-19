<?php

$manifest = array(
    'acceptable_sugar_versions' => array(
        'regex_matches' => array('.+'), // Any version
    ),
    'acceptable_sugar_flavors' => array(
        'CE','PRO', 'CORP', 'ENT', 'ULT'
    ),
    'name' => 'Analytic Reporting',
    'version' => '1.7.39',
    'description' => 'Analytic Reporting Basic for SugarCRM',
    'author' => 'IT Sapiens',
    'published_date' => '2015/08/01',
    'type' => 'module',
    'icon' => '',
    'is_uninstallable' => 'true',
);
$installdefs = array(
    'id' => 'AnalyticReporting',
    'copy' =>
        array(
            //copy license directory to your module
            array(
                'from' => '<basepath>/license',
                'to' => 'modules/AnalyticReporting',
            ),
            array(
                'from' => '<basepath>/modules/AnalyticReporting',
                'to' => 'modules/AnalyticReporting',
            ),
            // Enable backward compatability
            array(
                'from' => '<basepath>/custom/Extension/application/Ext/Include/AnalyticReportingBWC.php',
                'to' => 'custom/Extension/application/Ext/Include/AnalyticReportingBWC.php',
            ),
            // Scheduler reports
            array(
                'from' => '<basepath>/custom/Extension/modules/Schedulers/Ext/ScheduledTasks/sendScheduledReports.php',
                'to' => 'custom/Extension/modules/Schedulers/Ext/ScheduledTasks/sendScheduledReports.php',
            ),
            // Widget workaround
            //array(
            //    'from' => '<basepath>/custom/widget.php',
            //    'to' => 'widget.php',
            //),
            // Widget entrypoint
            array(
                'from' => '<basepath>/custom/Extension/application/Ext/EntryPointRegistry/widgetEntryPoint.php',
                'to' => 'custom/Extension/application/Ext/EntryPointRegistry/widgetEntryPoint.php',
            ),
        ),
    'language' =>
        array(
            array(
                'from'=> '<basepath>/license_admin/language/en_us.AnalyticReporting.php',
                'to_module'=> 'Administration',
                'language'=>'en_us'
            ),
            array(
                'from' => '<basepath>/modules/language/application/en_us.lang.php',
                'to_module' => 'application',
                'language' => 'en_us',
            ),
            array(
                'from'=> '<basepath>/modules/language/modules/Schedulers/en_us.sendScheduledReports.php',
                'to_module'=> 'Schedulers',
                'language'=>'en_us'
            ),
        ),
    'administration' =>
        array(
            array(
                'from'=>'<basepath>/license_admin/menu/AnalyticReporting_admin.php',
                'to' => 'modules/Administration/AnalyticReporting_admin.php',
            ),
        ),
    'action_view_map' =>
        array(
            array(
                'from'=> '<basepath>/license_admin/actionviewmap/AnalyticReporting_actionviewmap.php', 
                'to_module'=> 'AnalyticReporting', 
            ),
        ),
    // Dummy module for menu 
    // @TODO - Refactor as normal SugarBean to use ACL and other functionality
    'beans'=> array(
        1 => array(
            'module' => 'AnalyticReporting',
            'class' => 'AnalyticReporting',
            'path' => 'modules/AnalyticReporting/AnalyticReporting.php',
            'tab' => true,
        ),
    ),
    'post_uninstall' => array(
        0 => '<basepath>/scripts/post_uninstall.php',
    ), 
);
