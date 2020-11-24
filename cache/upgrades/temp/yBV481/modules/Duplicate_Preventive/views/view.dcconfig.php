<?php

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

require_once("modules/Administration/Administration.php");

class Viewdcconfig extends SugarView {

    public function preDisplay() {
        global $current_user;
        global $sugar_config;
        if (!is_admin($current_user)) {
            sugar_die("Unauthorized access to administration.");
        }

        require_once('modules/Duplicate_Preventive/license/DT_DuplicateCheckingOutfittersLicense.php');
       $validate = DT_DuplicateCheckingOutfittersLicense::isValid('Duplicate_Preventive');
       if ($validate != 1) {
           header('Location: index.php?module=Duplicate_Preventive&action=license');
       }
    }

    public function display() {

        require_once('include/Sugar_Smarty.php');

        global $sugar_config, $db;

        if (!is_admin($GLOBALS['current_user'])) {
            sugar_die('You do not have permission.');
        }

        $dc_admin = new Administration();
        $dc_ss    = new Sugar_Smarty();

        if(isset($_POST['save_dc']) && (!empty($_POST['save_dc'])))
        {
            $dc_admin->saveSetting('dc_config', 'account_name', $_REQUEST['account_name']);
            $dc_admin->saveSetting('dc_config', 'account_phone_no', $_REQUEST['account_phone_no']); 
            //$dc_admin->saveSetting('dc_config', 'account_email_id', $_REQUEST['account_email_id']); 
            $dc_admin->saveSetting('dc_config', 'account_email_id', $_REQUEST['account_email_id']); 
            $dc_admin->saveSetting('dc_config', 'account_document_number', $_REQUEST['account_document_number']); 
            $dc_admin->saveSetting('dc_config', 'contact_name', $_REQUEST['contact_name']); 
            $dc_admin->saveSetting('dc_config', 'contact_phone_no', $_REQUEST['contact_phone_no']); 
            //$dc_admin->saveSetting('dc_config', 'contact_email_id', $_REQUEST['contact_email_id']); 
            $dc_admin->saveSetting('dc_config', 'contact_document_number', $_REQUEST['contact_document_number']); 
            $dc_admin->saveSetting('dc_config', 'lead_name', $_REQUEST['lead_name']); 
            $dc_admin->saveSetting('dc_config', 'lead_phone_no', $_REQUEST['lead_phone_no']); 
            //$dc_admin->saveSetting('dc_config', 'lead_email_id', $_REQUEST['lead_email_id']); 
            $dc_admin->saveSetting('dc_config', 'lead_document_number', $_REQUEST['lead_document_number']); 
            $dc_admin->saveSetting('dc_config', 'duplicate_prevent', $_REQUEST['duplicate_prevent']); 
            SugarApplication::redirect('index.php?module=Duplicate_Preventive&action=dcconfig');
        }
        else
        {
            $settings_dc = $dc_admin->retrieveSettings('dc_config');
            $dc_ss->assign('account_name', $settings_dc->settings['dc_config_account_name']);            
            $dc_ss->assign('account_phone_no', $settings_dc->settings['dc_config_account_phone_no']);
            //$dc_ss->assign('account_email_id', $settings_dc->settings['dc_config_account_email_id']);
            $dc_ss->assign('account_document_number', $settings_dc->settings['dc_config_account_document_number']);
            $dc_ss->assign('contact_name', $settings_dc->settings['dc_config_contact_name']);
            $dc_ss->assign('contact_phone_no', $settings_dc->settings['dc_config_contact_phone_no']);
            //$dc_ss->assign('contact_email_id', $settings_dc->settings['dc_config_contact_email_id']);
            $dc_ss->assign('contact_document_number', $settings_dc->settings['dc_config_contact_document_number']);
            $dc_ss->assign('lead_name', $settings_dc->settings['dc_config_lead_name']);
            $dc_ss->assign('lead_phone_no', $settings_dc->settings['dc_config_lead_phone_no']);
            //$dc_ss->assign('lead_email_id', $settings_dc->settings['dc_config_lead_email_id']);
            $dc_ss->assign('lead_document_number', $settings_dc->settings['dc_config_lead_document_number']);
            $dc_ss->assign('duplicate_prevent', $settings_dc->settings['dc_config_duplicate_prevent']);
        }
        echo $dc_ss->fetch('modules/Duplicate_Preventive/tpls/dcconfig.tpl');
    }

}