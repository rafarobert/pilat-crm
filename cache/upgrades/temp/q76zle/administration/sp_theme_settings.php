<?php  
$admin_option_defs = array();

$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_general'] = array('sp_general', 'LBL_SP_THEME_CONFIG_TITLE', 'LBL_SP_THEME_CONFIG_INFO', './index.php?module=Administration&action=sp_theme_general');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_toptoolbar'] = array('sp_theme_toptoolbar', 'LBL_SP_THEME_TOP_TOOLBAR_TITLE', 'LBL_SP_THEME_TOP_TOOLBAR_INFO', './index.php?module=Administration&action=sp_theme_toptoolbar');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_heme_toolbarsubpanels'] = array('sp_heme_toolbarsubpanels', 'LBL_SP_THEME_TOOLBSUBP_TITLE', 'LBL_SP_THEME_TOOLBSUBP_INFO', './index.php?module=Administration&action=sp_heme_toolbarsubpanels');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_kanban'] = array('sp_kanban', 'LBL_SP_THEME_KANBAN_TITLE', 'LBL_SP_THEME_KANBAN_INFO', './index.php?module=Administration&action=sp_theme_kanban');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_calendar'] = array('sp_calendar', 'LBL_SP_THEME_CALENDAR_TITLE', 'LBL_SP_THEME_CALENDAR_INFO', './index.php?module=Administration&action=sp_theme_calendar');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_gridedit'] = array('sp_theme_gridedit', 'LBL_SP_THEME_GRIDEDIT_TITLE', 'LBL_SP_THEME_GRIDEDIT_INFO', './index.php?module=Administration&action=sp_theme_gridedit');
$admin_option_defs['ID_SP_THEME_SETTINGS']['sp_theme_calculator'] = array('sp_theme_calculator', 'LBL_SP_THEME_CALCULATOR_TITLE', 'LBL_SP_THEME_CALCULATOR_INFO', './index.php?module=Administration&action=sp_theme_calculator');
$admin_group_header[]= array('LBL_SP_THEME_TITLE', '', false, $admin_option_defs, 'LBL_SP_THEME_ADMIN_DESC');

