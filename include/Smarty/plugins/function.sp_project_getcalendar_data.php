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

function smarty_function_sp_project_getcalendar_data($params, &$smarty) {
    $out= array();
    global $sugar_config;
    global $timedate;
    global $current_user;
    global $current_language;

 if($current_language=='en_us')
  echo '<script>
        (function($) {
                "use strict";
                var options = {
                        modal: \'#events-modal\',
                        events_source:';

 else
   echo '<script type="text/javascript" src="themes/sp_theme/jscalendar/language/'.str_replace("_","-",$current_language).'.js"></script>
           <script>
        (function($) {
                "use strict";
                var options = {
                        language: \''.str_replace("_","-",$current_language).'\',
                        modal: \'#events-modal\',
                        events_source:';


    $calendar_setting = json_decode($sugar_config['sp_theme_calendar_setting']);
 
    foreach($calendar_setting as $fieldcal)
    {
        if($fieldcal->module==$params['cmod'])
           $datafieldcal= trim(strtoupper($fieldcal->field_event));
    }


    foreach($params['params'] as $row)
    {

        if(empty($row[$datafieldcal]))
            continue;
        $strdisplay="";
        foreach($fieldcal->fields_display as $fieldsd)
        {
           if(!empty($strdisplay))
              $strdisplay.= " "; 
           $strdisplay.= $row[trim(strtoupper($fieldsd))];
        }

        $newTimeDate = $timedate->fromString(str_replace("/","-",$row[$datafieldcal]),$current_user);
        $start=strtotime($newTimeDate->asDB()).'000';
        if(empty($fieldcal->field_duration))
        {
            $end= strtotime($newTimeDate->modify("+1 hour")->asDB()).'000';
        }
        else
        {
            $end= strtotime($newTimeDate->modify("+".intval($row[strtoupper($fieldcal->field_duration)])." minutes")->asDB()).'000';       
        }
        $out[] = array(
                    'id' => $row["ID"],
                    'title' => $strdisplay,
                    'url' => 'index.php?module='.$params['cmod']."&action=EditView&sugar_body_only=1&record=".$row["ID"],
                    'class' => 'event-important',
                    'start' => $start,
                    'end'=>   $end
         );
    }
    
       return json_encode($out);	
}

?>
