<?php

function smarty_function_sp_project_charts($params, &$smarty) {
    global $sugar_config;
    global $timedate, $current_user;
    global $app_list_strings;
  $objectName = BeanFactory::getObjectName('IAD_SP_Chart');
  if(empty($objectName))
      return '';
  
   if($params['what']=='showiframe')
      return '<iframe id="sp_graph" onload="resizeIframe(this)" src="index.php?module=IAD_SP_Chart&action=left_charts&to_pdf=1" scrolling="no" style="border:none;height:0px;width:100%;"></iframe>';
 
   if($params['what']=='showlink_setting')
      return '<li role="presentation"><a role="menuitem" id="link_charts_settings" href="index.php?module=IAD_SP_Chart&action=charts_settings" class="utilsLink">Charts settings</a></li>';
}

?>
