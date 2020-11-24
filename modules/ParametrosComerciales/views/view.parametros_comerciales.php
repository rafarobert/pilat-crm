<?php

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

require_once("modules/Administration/Administration.php");

class ViewParametros_Comerciales extends SugarView {
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

        $parameters_admin = new Administration();
        $parameters_ss = new Sugar_Smarty();
	
        if ((isset($_POST['save_parametros_comerciales'])) && (!empty($_POST['save_parametros_comerciales']))) {
	    $parameters_admin->saveSetting('comercial', 'dias_cierre', $_REQUEST['fecha_cierre_dias']);
	    SugarApplication::redirect('index.php?module=ParametrosComerciales&action=parametros_comerciales');
	}else
        {           
            $settings = $parameters_admin->retrieveSettings('comercial');       
            $parameters_ss->assign('fecha_cierre_dias', $settings->settings['comercial_dias_cierre']);            
        }
 	echo $parameters_ss->fetch('modules/ParametrosComerciales/tpls/parametros_comerciales.tpl');
    }

}
