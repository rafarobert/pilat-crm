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

function smarty_function_sp_project_kanban($params, &$smarty) {  

        global $sugar_config;
       
        global $current_language;
        global $timedate, $current_user;                

       
        $clist=""; 
        $strtempl='<div id="kanbant" style="display:none;"><a onclick="get_editpopup(\'#ID#\',\''.$params['cmod'].'\',2);return false;" href="#">';
        $kanban_setting = json_decode($sugar_config['sp_theme_kanban_setting']);       
        
        foreach($kanban_setting as $modc)
              {
                  if($modc->module==$params['cmod'])
                  {
                    $clist=$modc->field;
                    if(!empty($modc->template))
                       $strtempl.=strtoupper(html_entity_decode($modc->template));
                    else
                       $strtempl.='#NAME#<div style="clear: both;font-size:86%;">#ASSIGNED_USER_NAME#</div>';
                  }
              } 
              
        $strtemp.='</a></div>';
        
        if(empty($clist))
        {
           return "";
        }    
                            
        foreach($params['params'] as $row)
        {                     
            $out[$row[strtoupper($clist)]][] = $row;
        }
        
     
        $strkanban=$strtempl."<script>";
        $strcols="";
        $liststep = return_app_list_strings_language($current_language) ; 
        $objectName = BeanFactory::getObjectName($params['cmod']); 
        VardefManager::loadVardef($params['cmod'], $objectName, true); 
        global $dictionary; 
        $list_name='';
      
        if (is_array($dictionary[$objectName]['fields']))
        {
          foreach($dictionary[$objectName]['fields'] as $def) {
           if($def['name']==$clist)
             $list_name=$def['options'];                                                             
          }  
        } 
        $j=0;
        foreach ($liststep[$list_name] as $key=> $value)    
        {  
           if(!empty($out[$key]))
             $strkanban.="var datalist_".$j."=".json_encode($out[$key]).";";	 
           $strkanban.='var list_'.$j.'={  
              id:"l'.$j.'",  
      				view:"list", 
      				template:"html->kanbant",
      				type:{
      				 width:210,
               height:"auto"
      				},
      				select:false, 
              drag:true';
            if(!empty($out[$key]))     
            	 $strkanban.=',data:webix.copy(datalist_'.$j.')';   
                              
      		  $strkanban.='};';	
            if(!empty($strcols))
               $strcols.=',';
            $strcols.='{ header:"'.$value.'",  body:list_'.$j.', width:230';
            if(count($liststep[$list_name])>10)     
            	 $strcols.=',collapsed: true';        
            $strcols.='}';	
            $j++;
        }
        
 			  $strkanban.='webix.ui({
    				container:"kanban",
    				multi:true,
    				view:"accordion",
    				cols:[
    					'.$strcols.'
    				]
    			});';
        $j=0;
        foreach ($liststep[$list_name] as $key=> $value)    
        {  
         $strkanban.='$$("l'.$j.'").attachEvent("onAfterDrop", function(context, ev){  
   
           var item = this.getItem(context.source[0]);
 

           
           $.ajax({
                type: "POST",
                url: "index.php?entryPoint=jsgrid&kanban=true",
                data: {
                  module: "'.$params['cmod'].'",
                  id: item.ID,
                  key: "'.$key.'",
                  list_name: "'.$list_name.'",
                  field:"'.$clist.'"
                }
             }).done(function(response) {
             
             }).fail(function(xhr, ajaxOptions, thrownError) {

            });

          });';   
          $j++;      
        }	  

     
    return $strkanban."</script>";	
    
}

?>
