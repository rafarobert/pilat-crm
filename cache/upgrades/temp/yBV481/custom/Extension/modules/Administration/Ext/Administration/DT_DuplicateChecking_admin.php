<?php

global $sugar_version;

$admin_option_defs=array();
    
$admin_option_defs['Administration']['dt_duplicatechecking_config']= array('','LBL_DT_DUPLICATE_CHECKING_CONFIGURATION','LBL_DT_DUPLICATE_CHECKING_MESSAGE','./index.php?module=Duplicate_Preventive&action=dcconfig');


$admin_option_defs['Administration']['dt_duplicatechecking_info']= array('','LBL_DT_DUPLICATE_CHECKING_LICENSE_TITLE','LBL_DT_DUPLICATE_CHECKING_LICENSE','./index.php?module=Duplicate_Preventive&action=license');

$admin_group_header[]= array('LBL_DT_DUPLICATE_CHECKING','',false,$admin_option_defs, '');
