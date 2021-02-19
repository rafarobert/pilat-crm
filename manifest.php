<?php
$manifest = array (
	'acceptable_sugar_versions' => array(
		'exact_matches' => array(),
    'regex_matches' => array('.*'),
	),
	'acceptable_sugar_flavors' => array(
	   0 => 'CE',
	),
	'name' => 'Sugar Project Theme Pro',
	'description' => 'Sugar Project theme Pro',
	'author' => 'IAD',
	'published_date' => '2018-06-06 00:00:00',
	'version' => '8.571',
	'type' => 'theme',
	'is_uninstallable' => true,
	'icon' => 'images/themePreview.png',
);                  

$installdefs = array (
  'id' => 'Sugar_Project_Theme',
  'copy' => 
  array (
    array (
      'from' => '<basepath>/themes/sp_theme/',
      'to' => 'themes/sp_theme',
    ),
    array(
      'from' => '<basepath>/cache',
      'to' => 'cache',
    ), 
 
    
    array('from' => '<basepath>/include/Dashlets/Dashlet.php','to' => 'include/Dashlets/Dashlet.php'),
    array('from' => '<basepath>/include/javascript/popup_helper.js','to' => 'include/javascript/popup_helper.js'),
    array('from' => '<basepath>/include/javascript/sugar_3.js','to' => 'include/javascript/sugar_3.js'), 
    array('from' => '<basepath>/include/ListView/ListViewDisplay.php','to' => 'include/ListView/ListViewDisplay.php'),
    array('from' => '<basepath>/include/ListView/ListViewFacade.php','to' => 'include/ListView/ListViewFacade.php'),
    array('from' => '<basepath>/include/MVC/View/views/view.list.php','to' => 'include/MVC/View/views/view.list.php'),
    array('from' => '<basepath>/include/MVC/View/SugarView.php','to' => 'include/MVC/View/SugarView.php'),
    array('from' => '<basepath>/include/MySugar/javascript/MySugar.js','to' => 'include/MySugar/javascript/MySugar.js'),
    array('from' => '<basepath>/include/Smarty/plugins/function.html_options.php','to' => 'include/Smarty/plugins/function.html_options.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.html_select_date.php','to' => 'include/Smarty/plugins/function.html_select_date.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.html_select_time.php','to' => 'include/Smarty/plugins/function.html_select_time.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.html_options.php','to' => 'include/Smarty/plugins/function.html_options.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sp_project_charts.php','to' => 'include/Smarty/plugins/function.sp_project_charts.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sp_project_getcalendar_data.php','to' => 'include/Smarty/plugins/function.sp_project_getcalendar_data.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sp_project_getcustomtoolbar.php','to' => 'include/Smarty/plugins/function.sp_project_getcustomtoolbar.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sp_project_getoptions.php','to' => 'include/Smarty/plugins/function.sp_project_getoptions.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sp_project_isadmin.php','to' => 'include/Smarty/plugins/function.sp_project_isadmin.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sp_project_kanban.php','to' => 'include/Smarty/plugins/function.sp_project_kanban.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sp_project_logo.php','to' => 'include/Smarty/plugins/function.sp_project_logo.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sugar_link.php','to' => 'include/Smarty/plugins/function.sugar_link.php'),
    array('from' => '<basepath>/include/Smarty/plugins/function.sugar_menu.php','to' => 'include/Smarty/plugins/function.sugar_menu.php'),
    array('from' => '<basepath>/include/SubPanel/SubPanel.php','to' => 'include/SubPanel/SubPanel.php'),
    array('from' => '<basepath>/include/SubPanel/SubPanelDynamic.html','to' => 'include/SubPanel/SubPanelDynamic.html'),
    array('from' => '<basepath>/include/SubPanel/SubPanelTiles.php','to' => 'include/SubPanel/SubPanelTiles.php'),
    array('from' => '<basepath>/include/SubPanel/SubPanelTiles.js','to' => 'include/SubPanel/SubPanelTiles.js'),
    array('from' => '<basepath>/include/utils/layout_utils.php','to' => 'include/utils/layout_utils.php'),
    array('from' => '<basepath>/jssource/JSGroupings.php','to' => 'jssource/JSGroupings.php'),
    array('from' => '<basepath>/jssource/src_files/include/javascript/quickCompose.js','to' => 'jssource/src_files/include/javascript/quickCompose.js'),
    array('from' => '<basepath>/include/generic/SugarWidgets/SugarWidgetSubPanelTopComposeEmailButton.php','to' => 'include/generic/SugarWidgets/SugarWidgetSubPanelTopComposeEmailButton.php'),
    array('from' => '<basepath>/modules/Administration/Locale.tpl','to' => 'modules/Administration/Locale.tpl'),  
    array('from' => '<basepath>/modules/Administration/PasswordManager.tpl','to' => 'modules/Administration/PasswordManager.tpl'),
    array('from' => '<basepath>/modules/AOS_Products_Quotes/line_items.js','to' => 'modules/AOS_Products_Quotes/line_items.js'),
    array('from' => '<basepath>/modules/Emails/EmailUI.css','to' => 'modules/Emails/EmailUI.css'),
    array('from' => '<basepath>/modules/Emails/templates/_baseEmail.tpl','to' => 'modules/Emails/templates/_baseEmail.tpl'),
    array('from' => '<basepath>/modules/Emails/javascript/complexLayout.js','to' => 'modules/Emails/javascript/complexLayout.js'),
    array('from' => '<basepath>/modules/Emails/javascript/EmailUIShared.js','to' => 'modules/Emails/javascript/EmailUIShared.js'),
    array('from' => '<basepath>/modules/Emails/javascript/init.js','to' => 'modules/Emails/javascript/init.js'),
    array('from' => '<basepath>/modules/Emails/javascript/composeEmailTemplate.js','to' => 'modules/Emails/javascript/composeEmailTemplate.js'),
    array('from' => '<basepath>/modules/Emails/include/ComposeView/ComposeView.tpl','to' => 'modules/Emails/include/ComposeView/ComposeView.tpl'),
    array('from' => '<basepath>/modules/Emails/include/ComposeView/EmailsComposeView.js','to' => 'modules/Emails/include/ComposeView/EmailsComposeView.js'),
    array('from' => '<basepath>/modules/EmailTemplates/EditView.html','to' => 'modules/EmailTemplates/EditView.html'),
    array('from' => '<basepath>/modules/InboundEmail/EditView.html','to' => 'modules/InboundEmail/EditView.html'),
    array('from' => '<basepath>/modules/ModuleBuilder/tpls/LayoutEditor.css','to' => 'modules/ModuleBuilder/tpls/LayoutEditor.css'),
    array('from' => '<basepath>/modules/ModuleBuilder/javascript/ModuleBuilder.js','to' => 'modules/ModuleBuilder/javascript/ModuleBuilder.js'),
    array('from' => '<basepath>/modules/Studio/wizards/RenameModules.php','to' => 'modules/Studio/wizards/RenameModules.php'),
    array('from' => '<basepath>/modules/Studio/wizards/RenameModules.tpl','to' => 'modules/Studio/wizards/RenameModules.tpl'),
    array('from' => '<basepath>/modules/Users/authentication/SugarAuthenticate/FactorAuthEmailCode.tpl','to' => 'modules/Users/authentication/SugarAuthenticate/FactorAuthEmailCode.tpl'),
    array('from' => '<basepath>/modules/Users/Login.php','to' => 'modules/Studio/Users/Login.php'),

  ) 
);    
?>                                              