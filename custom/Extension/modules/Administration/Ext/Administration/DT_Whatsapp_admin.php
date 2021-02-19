<?php

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
