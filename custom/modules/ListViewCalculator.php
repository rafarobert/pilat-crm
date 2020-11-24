<?php
class ListViewCalculatorCls
{
  function ListViewCalculator($event, $arguments)
  {    
    $action = isset($_REQUEST['action']) ? $_REQUEST['action'] : null;
    $module = isset($_REQUEST['module']) ? $_REQUEST['module'] : null;
  
    $action = strtolower($action);
    if(isset($module) && ($action == "list" || $action == "index" || $action == "listview") 
    	&& (!isset($_REQUEST['search_form_only']) || $_REQUEST['search_form_only'] != true)
      && ($module!='Administration'))      
    {

        global $db;
        global $sugar_config; 
        require_once 'modules/Configurator/Configurator.php';
        $configurator = new Configurator();
       
        $sp_theme_calculator_setting=array();
        if(empty($sugar_config['sp_theme_calculator_setting']))
          return;
     
        $sp_theme_calculator_setting = json_decode($sugar_config['sp_theme_calculator_setting']);
        $strt="";
        foreach($sp_theme_calculator_setting as $ar)
        {
            if($ar->module==$module)
            {                                               
                  $query=$_SESSION[$module.'2_QUERY'];
              
                  $query="SELECT ".$ar->expression." AS temp1 FROM (".$query.") a ";
          
                  $resultquery = $db->query($query);
                  while ($row = $db->fetchByAssoc($resultquery))       
                  {
                    $temp1=number_format($row["temp1"],$ar->decimals);
                  }
                  if(empty($strt))
                   $strt="<td colspan=4>".$ar->label.": ".$temp1."</td>";
                  else
                   $strt.="<td >".$ar->label.": ".$temp1."</td>";
                
              }
        } 
        if(!empty($strt))        
          echo ' <script>$(function() {
                     $("#pagination").after("<tr>'.$strt.'</tr>");
                     });</script>';         
    } 
       
  }  
                                                                  
}
?>