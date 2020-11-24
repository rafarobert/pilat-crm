<?php 
 //WARNING: The contents of this file are auto-generated

  
$admin_option_defs = array();

$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_general'] = array('sp_general', 'LBL_SP_THEME_CONFIG_TITLE', 'LBL_SP_THEME_CONFIG_INFO', './index.php?module=Administration&action=sp_theme_general');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_toptoolbar'] = array('sp_theme_toptoolbar', 'LBL_SP_THEME_TOP_TOOLBAR_TITLE', 'LBL_SP_THEME_TOP_TOOLBAR_INFO', './index.php?module=Administration&action=sp_theme_toptoolbar');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_heme_toolbarsubpanels'] = array('sp_heme_toolbarsubpanels', 'LBL_SP_THEME_TOOLBSUBP_TITLE', 'LBL_SP_THEME_TOOLBSUBP_INFO', './index.php?module=Administration&action=sp_heme_toolbarsubpanels');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_kanban'] = array('sp_kanban', 'LBL_SP_THEME_KANBAN_TITLE', 'LBL_SP_THEME_KANBAN_INFO', './index.php?module=Administration&action=sp_theme_kanban');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_calendar'] = array('sp_calendar', 'LBL_SP_THEME_CALENDAR_TITLE', 'LBL_SP_THEME_CALENDAR_INFO', './index.php?module=Administration&action=sp_theme_calendar');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_gridedit'] = array('sp_theme_gridedit', 'LBL_SP_THEME_GRIDEDIT_TITLE', 'LBL_SP_THEME_GRIDEDIT_INFO', './index.php?module=Administration&action=sp_theme_gridedit');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_calculator'] = array('sp_theme_calculator', 'LBL_SP_THEME_CALCULATOR_TITLE', 'LBL_SP_THEME_CALCULATOR_INFO', './index.php?module=Administration&action=sp_theme_calculator');
$admin_group_header[]= array('LBL_SP_THEME_TITLE', '', false, $admin_option_defs, 'LBL_SP_THEME_ADMIN_DESC');




global $sugar_version;

$admin_option_defs=array();

if(preg_match( "/^6.*/", $sugar_version) ) {
    
	$admin_option_defs['Administration']['dt_whatsapp_config']= array('','LBL_DTWHATSAPP_LICENSE_WHATSAPP_CONFIGURATION','LBL_DTWHATSAPP_LICENSE_MESSAGE','./index.php?module=DT_Whatsapp&action=whatsapp_config');

    $admin_option_defs['Administration']['dt_whatsapp_info']= array('','LBL_DTWHATSAPP_LICENSE_TITLE','LBL_DTWHATSAPP_LICENSE','./index.php?module=DT_Whatsapp&action=license');
    
} else {

	$admin_option_defs['Administration']['dt_whatsapp_config']= array('','LBL_DTWHATSAPP_LICENSE_WHATSAPP_CONFIGURATION','LBL_DTWHATSAPP_LICENSE_MESSAGE','#bwc/index.php?module=DT_Whatsapp&action=whatsapp_config');

    $admin_option_defs['Administration']['dt_whatsapp_info']= array('','LBL_DTWHATSAPP_LICENSE_TITLE','LBL_DTWHATSAPP_LICENSE','javascript:parent.SUGAR.App.router.navigate("#bwc/index.php?module=DT_Whatsapp&action=license", {trigger: true});');
 
}

$admin_group_header[]= array('LBL_DTWHATSAPP','',false,$admin_option_defs, '');



global $sugar_version;

$admin_option_defs=array();

if(preg_match( "/^6.*/", $sugar_version) ) {
    $admin_option_defs['Administration']['analyticreporting_info']= array('helpInline','LBL_ANALYTICREPORTING_LICENSE_TITLE','LBL_ANALYTICREPORTING_LICENSE','./index.php?module=AnalyticReporting&action=license');
} else {
    $admin_option_defs['Administration']['analyticreporting_info']= array('helpInline','LBL_ANALYTICREPORTING_LICENSE_TITLE','LBL_ANALYTICREPORTING_LICENSE','javascript:parent.SUGAR.App.router.navigate("#bwc/index.php?module=AnalyticReporting&action=license", {trigger: true});');
}

$admin_group_header[]= array('LBL_ANALYTICREPORTING','',false,$admin_option_defs, '');



global $sugar_version;
$admin_option_defs = array();

if(preg_match( "/^6.*/", $sugar_version) ) {
    $admin_option_defs['Administration']['parametros_config']= array('param_general','LBL_PARAMETER_CONFIG_TITLE','LBL_PARAMETER_CONFIG_INFO','./index.php?module=ParametrosComerciales&action=parametros_comerciales');
} else {
    $admin_option_defs['Administration']['parametros_config']= array('param_general','LBL_PARAMETER_CONFIG_TITLE','LBL_PARAMETER_CONFIG_INFO','javascript:parent.SUGAR.App.router.navigate("#bwc/index.php?module=ParametrosComerciales&action=parametros_comerciales", {trigger: true});');	
}

$admin_group_header[]= array('LBL_PARAMETERS','',false,$admin_option_defs, '');



global $sugar_version;

$admin_option_defs=array();
    
$admin_option_defs['Administration']['dt_duplicatechecking_config']= array('','LBL_DT_DUPLICATE_CHECKING_CONFIGURATION','LBL_DT_DUPLICATE_CHECKING_MESSAGE','./index.php?module=Duplicate_Preventive&action=dcconfig');


$admin_option_defs['Administration']['dt_duplicatechecking_info']= array('','LBL_DT_DUPLICATE_CHECKING_LICENSE_TITLE','LBL_DT_DUPLICATE_CHECKING_LICENSE','./index.php?module=Duplicate_Preventive&action=license');

$admin_group_header[]= array('LBL_DT_DUPLICATE_CHECKING','',false,$admin_option_defs, '');

?>