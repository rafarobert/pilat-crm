<?php

global $sugar_version;
$admin_option_defs = array();

if(preg_match( "/^6.*/", $sugar_version) ) {
    $admin_option_defs['Administration']['parametros_config']= array('param_general','LBL_PARAMETER_CONFIG_TITLE','LBL_PARAMETER_CONFIG_INFO','./index.php?module=ParametrosComerciales&action=parametros_comerciales');
} else {
    $admin_option_defs['Administration']['parametros_config']= array('param_general','LBL_PARAMETER_CONFIG_TITLE','LBL_PARAMETER_CONFIG_INFO','javascript:parent.SUGAR.App.router.navigate("#bwc/index.php?module=ParametrosComerciales&action=parametros_comerciales", {trigger: true});');	
}

$admin_group_header[]= array('LBL_PARAMETERS','',false,$admin_option_defs, '');
