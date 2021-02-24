<?php 
 //WARNING: The contents of this file are auto-generated

 
 //WARNING: The contents of this file are auto-generated
$beanList['AnalyticReporting'] = 'AnalyticReporting';
$beanFiles['AnalyticReporting'] = 'modules/AnalyticReporting/AnalyticReporting.php';
$moduleList[] = 'AnalyticReporting';



// Set BCW mode for AnalyticReporting module
$bwcModules[] = 'AnalyticReporting';
 
 //WARNING: The contents of this file are auto-generated
$beanList['G3L_gel_email'] = 'G3L_gel_email';
$beanFiles['G3L_gel_email'] = 'modules/G3L_gel_email/G3L_gel_email.php';
$moduleList[] = 'G3L_gel_email';
$beanList['G3L_gel_whatsapp'] = 'G3L_gel_whatsapp';
$beanFiles['G3L_gel_whatsapp'] = 'modules/G3L_gel_whatsapp/G3L_gel_whatsapp.php';
$moduleList[] = 'G3L_gel_whatsapp';




/* * *******************************************************************************
* This file is part of KReporter. KReporter is an enhancement developed
* by aac services k.s.. All rights are (c) 2016 by aac services k.s.
*
* This Version of the KReporter is licensed software and may only be used in
* alignment with the License Agreement received with this Software.
* This Software is copyrighted and may not be further distributed without
* witten consent of aac services k.s.
*
* You can contact us at info@kreporter.org
******************************************************************************* */

if (!isset($GLOBALS['sugar_config']['addAjaxBannedModules'])
    || !is_array($GLOBALS['sugar_config']['addAjaxBannedModules'])
) {
    $GLOBALS['sugar_config']['addAjaxBannedModules'] = array();
}


if (!array_search('KReports', $GLOBALS['sugar_config']['addAjaxBannedModules']))
    $GLOBALS['sugar_config']['addAjaxBannedModules'][] = 'KReports';

 
 //WARNING: The contents of this file are auto-generated
$beanList['IAD_Sticky_Notes'] = 'IAD_Sticky_Notes';
$beanFiles['IAD_Sticky_Notes'] = 'modules/IAD_Sticky_Notes/IAD_Sticky_Notes.php';
$moduleList[] = 'IAD_Sticky_Notes';


?>