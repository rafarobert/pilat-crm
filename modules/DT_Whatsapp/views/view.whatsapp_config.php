<?php

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}


require_once("modules/Administration/Administration.php");

class Viewwhatsapp_config extends SugarView {

    public function preDisplay() {
        global $current_user;
        global $sugar_config;
        if (!is_admin($current_user)) {
            sugar_die("Unauthorized access to administration.");
        }
    }

    public function display() {

        require_once('include/Sugar_Smarty.php');
        global $sugar_config, $db;

        if (!is_admin($GLOBALS['current_user'])) {
            sugar_die('You do not have permission.');
        }

        $whatsapp_admin = new Administration();
        $whatsapp_ss = new Sugar_Smarty();
        

        if ((isset($_POST['save_whatsapp'])) && (!empty($_POST['save_whatsapp']))) {
            // Saving Whatsapp configuration
            $whatsapp_admin->saveSetting('whatsapp_config', 'waboxapp_token', $_REQUEST['waboxapp_token']);
            $sitios = $_REQUEST['waboxapp_site']; 
            $phones = $_REQUEST['waboxapp_mobile_number'];        
            $data = array();   
            for($i = 0; $i < count($sitios); ++$i) {                
                if(!empty($sitios[$i])){
                    $item['sitio'] = trim($sitios[$i]);
                    $item['numero'] = trim($phones[$i]);
                    $data[] = $item;                 
                }
            }
            $json =  base64_encode(trim(json_encode($data)));
            $whatsapp_admin->saveSetting('whatsapp_config', 'waboxapp_mobile_number', $json);
            SugarApplication::redirect('index.php?module=DT_Whatsapp&action=whatsapp_config');
            
        }else
        {           
            $settings_whatsapp = $whatsapp_admin->retrieveSettings('whatsapp_config');            
            $json = base64_decode($settings_whatsapp->settings['whatsapp_config_waboxapp_mobile_number']);
            $whatsapp_ss->assign('waboxapp_token', $settings_whatsapp->settings['whatsapp_config_waboxapp_token']);   
            $data = json_decode(stripslashes($json),true);
            $whatsapp_ss->assign('waboxapp_mobile_number', $data);            
        }
        $whatsapp_ss->assign('MOD', $GLOBALS['mod_strings']);
        $whatsapp_ss->assign('APP', $GLOBALS['app_strings']);
        echo $whatsapp_ss->fetch('modules/DT_Whatsapp/tpls/whatsapp_config.tpl');
    }

}
