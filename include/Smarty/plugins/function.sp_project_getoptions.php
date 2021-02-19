<?php

/**
 * Smarty {sugar_getlink} function plugin
 *
 * Type:     function
 * Name:     sugar_getlink
 * Purpose:  Returns HTML link <a> with embedded image or normal text
 * 
 * @param array
 * @param Smarty
 */

function smarty_function_sp_project_getoptions($params, &$smarty) {
    $out= array();
    global $sugar_config;
    global $timedate, $current_user;
    global $app_list_strings;
    $stropt='  var opt'.$params['name'].' = [';
    foreach($app_list_strings[$params['opts']] as $key =>$value)
    {
       $stropt.='{ Name: "'.$value.'", Id: "'.$key.'" },';
    }
    $stropt.= '];';

    return $stropt;	
}

?>
