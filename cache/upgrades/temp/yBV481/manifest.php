<?php
global $sugar_version, $sugar_flavor;
$manifest = array(
    'acceptable_sugar_versions' => array(
        'exact_matches' => array(),
        'regex_matches' => array('6\.*', '7\.*'),
    ),
    'acceptable_sugar_flavors' =>
    array(
        'CE', 'PRO', 'ENT', 'ULT', 'CORP'
    ),
    'key' => 'DT_Duplicate_Preventive',
    'author' => 'DreamerTechs',
    'description' => 'Duplicate Checking In SuiteCRM.',
    'is_uninstallable' => true,
    'name' => 'DT_Duplicate_Preventive',
    'published_date' => '2019-04-13 10:20:00',
    'type' => 'module',
    'version' => '1.0',
);

$installdefs = array(
    'id' => 'DT_Duplicate_Preventive',
    'pre_execute' => array
    (
        0 =>  '<basepath>/scripts/pre_execute.php',
    ),
    'copy' =>
     array(
        0 =>
        array(
            'from' => '<basepath>/custom/Extension/application/Ext/EntryPointRegistry/Duplicate_Prevent.php',
            'to' => 'custom/Extension/application/Ext/EntryPointRegistry/Duplicate_Prevent.php',
        ),
        1 =>
        array(
            'from' => '<basepath>/custom/Extension/modules/Administration/Ext/Administration/DT_DuplicateChecking_admin.php',
            'to' => 'custom/Extension/modules/Administration/Ext/Administration/DT_DuplicateChecking_admin.php',
        ),
        2 =>
        array(
            'from' => '<basepath>/custom/Extension/modules/Administration/Ext/Language/en_us.DT_DuplicateChecking.php',
            'to' => 'custom/Extension/modules/Administration/Ext/Language/en_us.DT_DuplicateChecking.php',
        ),
        3 =>
        array(
            'from' => '<basepath>/custom/Extension/modules/Duplicate_Preventive/',
            'to' => 'custom/Extension/modules/Duplicate_Preventive/',
        ),
        4 =>
        array(
            'from' => '<basepath>/custom/modules/Accounts/',
            'to' => 'custom/modules/Accounts/',
        ),
        5 =>
        array(
            'from' => '<basepath>/custom/modules/Contacts/',
            'to' => 'custom/modules/Contacts/',
        ),
        6 =>
        array(
            'from' => '<basepath>/custom/modules/Leads/',
            'to' => 'custom/modules/Leads/',
        ),
        7 =>
        array(
            'from' => '<basepath>/modules/Duplicate_Preventive/',
            'to' => 'modules/Duplicate_Preventive/',
        ),
    ),
);
?>