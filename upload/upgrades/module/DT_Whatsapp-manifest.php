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
    'key' => 'DT_Whatsapp',
    'author' => 'Dreamer Technologies',
    'description' => 'APIWHA WhatsApp Integration with SuiteCRM.',
    'is_uninstallable' => true,
    'name' => 'DT_Whatsapp',
    'published_date' => '2018-08-15 10:20:00',
    'type' => 'module',
    'version' => '1.0',
);

$installdefs = array(
    'id' => 'DT_Whatsapp',
    'image_dir' => '<basepath>/icons',
    'copy' =>
     array(
        0 =>
        array(
            'from' => '<basepath>/custom/Extension/application/Ext/LogicHooks/DT_Whatsapp_UIFrame.php',
            'to' => 'custom/Extension/application/Ext/LogicHooks/DT_Whatsapp_UIFrame.php',
        ),
        1 =>
        array(
            'from' => '<basepath>/custom/Extension/application/Ext/EntryPointRegistry/DT_Whatsapp_Options.php',
            'to' => 'custom/Extension/application/Ext/EntryPointRegistry/DT_Whatsapp_Options.php',
        ),
        2 =>
        array(
            'from' => '<basepath>/custom/modules/EmailTemplates',
            'to' => 'custom/modules/EmailTemplates',
        ),
        3 =>
        array(
            'from' => '<basepath>/custom/include/SugarFields/Fields/Phone',
            'to' => 'custom/include/SugarFields/Fields/Phone',
        ),
        4 =>
        array(
            'from' => '<basepath>/modules/DT_Whatsapp',
            'to' => 'modules/DT_Whatsapp',
        ),
        5 =>
        array(
            'from' => '<basepath>/custom/modules/AOW_Actions/actions/actionSendEmail.php',
            'to' => 'custom/modules/AOW_Actions/actions/actionSendEmail.php',
        ),
        6 =>
        array(
            'from' => '<basepath>/custom/Extension/modules/Schedulers/Ext/Language/en_us.whatsapp_status.php',
            'to' => 'custom/Extension/modules/Schedulers/Ext/Language/en_us.whatsapp_status.php',
        ),
        7 =>
        array(
            'from' => '<basepath>/custom/Extension/modules/Schedulers/Ext/ScheduledTasks/whatsapp_status.php',
            'to' => 'custom/Extension/modules/Schedulers/Ext/ScheduledTasks/whatsapp_status.php',
        ),
    ),
    'language' =>
    array(
        0 =>
        array(
            'from' => '<basepath>/custom/Extension/modules/Administration/Ext/Language/en_us.DT_Whatsapp.php',
            'to_module' => 'Administration',
            'language' => 'en_us'
        ),
        1 =>
        array(
            'from' => '<basepath>/custom/Extension/modules/EmailTemplates/Ext/Language/en_us.DT_WhatsApp_Email.php',
            'to_module' => 'EmailTemplates',
            'language' => 'en_us'
        ),
      
    ),
    'administration' =>
    array(
        0 => array(
            'from' => '<basepath>/custom/Extension/modules/Administration/Ext/Administration/DT_Whatsapp_admin.php',
        ),
    ),
     'action_view_map' =>
    array(
        0 => array(
            'from' => '<basepath>/custom/Extension/modules/DT_Whatsapp/Ext/ActionViewMap/DT_Whatsapp_actionviewmap.php', 
            'to_module' => 'DT_Whatsapp',
        ),
        1 => array(
            'from' => '<basepath>/custom/Extension/modules/DT_Whatsapp/Ext/ActionViewMap/DT_Whatsapp_actionviewmap_config.php', 
            'to_module' => 'DT_Whatsapp',
        ),
    ),
    'custom_fields' =>
    array(
        'EmailTemplatessms_module' =>
        array(
            'id' => 'EmailTemplatessms_module',
            'name' => 'sms_module',
            'label' => 'LBL_SMS_MODULE',
            'comments' => '',
            'help' => '',
            'module' => 'EmailTemplates',
            'type' => 'enum',
            'max_size' => '120',
            'require_option' => '0',
            'default_value' => '',
            'date_modified' => '2018-08-15 12:34:22',
            'deleted' => '0',
            'audited' => '0',
            'mass_update' => '0',
            'duplicate_merge' => '0',
            'reportable' => '1',
            'importable' => 'true',
            'ext1' => 'sms_module_list',
            'ext2' => NULL,
            'ext3' => NULL,
            'ext4' => NULL,
        ),
        'Callsmessage_id_c' =>
        array(
            'id' => 'Callsmessage_id_c',
            'name' => 'message_id_c',
            'label' => 'Message_ID',
            'comments' => '',
            'help' => '',
            'module' => 'Calls',
            'type' => 'varchar',
            'max_size' => '255',
            'require_option' => '0',
            'default_value' => '',
            'audited' => '0',
            'mass_update' => '0',
            'duplicate_merge' => '0',
            'reportable' => '1',
            'importable' => 'true',
            'ext1' => '',
            'ext2' => '',
            'ext3' => '',
            'ext4' => '',
        ),
    ),
    'post_install' => array('<basepath>/scripts/post_install.php'),
    'pre_execute' => array('<basepath>/scripts/pre_execute.php'),
);


?>
