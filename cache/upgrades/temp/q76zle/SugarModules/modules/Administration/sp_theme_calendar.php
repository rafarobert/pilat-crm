<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

    
    global $current_user;
    global $timedate;
    global $current_language;
    global $mod_strings;
    global $dictionary;  
    global $sugar_config; // declare global $sugar_config array
    
    require_once 'modules/Configurator/Configurator.php';
    $configurator = new Configurator();

   
    $sp_theme_calendar_setting=array();
    if(!empty($sugar_config['sp_theme_calendar_setting']))
      $sp_theme_calendar_setting= json_decode($sugar_config['sp_theme_calendar_setting']);

    if(empty($sp_theme_calendar_setting))
    {
     $sp_theme_calendar_setting[]=array('module'=>'','field_event'=>'','fieldeventend'=>'','duration'=>30,'field_duration'=>'','fields_display'=>array());
    }
                                                              
    
   if(empty($_REQUEST["wizard_step"]))
    {       
    ?>
       <style>
       .fieldevent,.fields_display,.field_duration,.fieldeventend,.selectmodule {width:180px;}
       .icons-box span,.icons-box i
       {
       cursor:pointer;
       }
       th {padding-left:10px;}
       </style>
       <script>
         
          $(function() {
             $('.rmb').click(removerow);
             $('.selectmodule').click(caricafield_event);          
             $('.fields_display').on('change', carica_fdisplay);
             
             $("body").toggleClass("hide-sidebar");
             var selected = $('.selectmodule').val();   
             $('.selectmodule option').sort(NASort).appendTo('.selectmodule'); 
             $('.selectmodule').val(selected);  
          }); 
              
          function carica_fdisplay() {
                 var cv=$(this).parent().parent().find('.fields_todisplay').val();
                 if(cv=='')
                   $(this).parent().parent().find('.fields_todisplay').val($(this).val());
                 else
                   $(this).parent().parent().find('.fields_todisplay').val(cv+"\n"+$(this).val());
          }
          
          function removerow()
          {
            if($('#importOptions').find('tr').length==3)
            {
              $(this).parent().parent().find('select').val('');
              $(this).parent().parent().find('textarea').val('');
            }
            else
              $(this).parent().parent().remove();
          }

          function addrow()
          {           
               var obrow=$('#importOptions').find('tr:nth-child(2)');
               var objcloned=obrow.clone().insertAfter($('#importOptions').find('tr:first'));
               objcloned.find('select').val('').find('textarea').val('');
               objcloned.find('.rmb').click(removerow); 
               objcloned.find('.selectmodule').click(caricafield_event); 
               objcloned.find('.fields_display').on('change', carica_fdisplay); 
               objcloned.find('.fields_todisplay').val('');
               
          }  
          function caricafield_event()
          {           
             var cm=$(this).val();
             for (var x = 0; x < data.length; x++) {
               if(data[x].module==cm)
               {
                   optrep="<option value=''></option>";
                   optrep_date="";
                   for (var k= 0; k < data[x].fields.length; k++) {
                       optrep+="<option value='"+data[x].fields[k].name+"'>"+data[x].fields[k].name+"</option>";
                       if((data[x].fields[k].type=='datetime')||(data[x].fields[k].type=='datetimecombo')||(data[x].fields[k].type=='date'))
                          optrep_date+="<option value='"+data[x].fields[k].name+"'>"+data[x].fields[k].name+"</option>";
                   }
                   var s1=$(this).parent().parent().find('.fieldevent');
                   var selected = s1.val();
                   s1.find('option').remove();
                   s1.append(optrep_date);
                   s1.find('option').sort(NASort).appendTo(s1);
                   s1.val(selected);
                   
                   s1=$(this).parent().parent().find('.fields_display');
                   selected = s1.val();
                   s1.find('option').remove();
                   s1.append(optrep);
                   s1.find('option').sort(NASort).appendTo(s1);
                   s1.val(selected);
                   
                   s1=$(this).parent().parent().find('.field_duration');
                   selected = s1.val();
                   s1.find('option').remove();
                   s1.append(optrep);
                   s1.find('option').sort(NASort).appendTo(s1);
                   s1.val(selected);
                   
                   optrep_date="<option value=''></option>"+optrep_date;
                   s1=$(this).parent().parent().find('.fieldeventend');
                   selected = s1.val();
                   s1.find('option').remove();
                   s1.append(optrep_date);
                   s1.find('option').sort(NASort).appendTo(s1);
                   s1.val(selected);

                   return;
               }     
             }
          }  
          <?php
          $strar='var data = [';
          $firstmod=true;
          $arr_f=array();
          $d = dir('modules');
      		while($e = $d->read()){
      			if(substr($e, 0, 1) == '.' || !is_dir('modules/' . $e))continue;
      			if(file_exists('modules/' . $e . '/metadata/studio.php') && isset($GLOBALS [ 'beanList' ][$e])) // installed modules must also exist in the beanList
      			{

              $objectName = BeanFactory::getObjectName($e);
              VardefManager::loadVardef($e, $objectName, true);          
              if (is_array($dictionary[$objectName]['fields']))
               {           
                if(!$firstmod)
                  {
                   $strar.=',';
                 }
                 $firstmod =false;  
                 $strar.='{"module":"'.$e.'","fields": [';
                 $first=true; 
                 foreach($dictionary[$objectName]['fields'] as $def) {
                    $arr_f[$e][]=array('name'=>$def['name'],'type'=>$def['type']);
                   if(!$first)
                   {
                     $strar.=',';
                   }
                    $strar.='{"name":"'.$def['name'].'","type":"'.$def['type'].'","vname":"'.$def['vname'].'"}';
                   $first =false;  
                  }
               }  
              $strar.=']}'; 
      			}
      		} 
          $strar.='];'; 
          echo $strar;         
          ?>
        function NASort(a, b) {    
                if (a.innerHTML == 'NA') {
                    return 1;   
                }
                else if (b.innerHTML == 'NA') {
                    return -1;   
                }       
                return (a.innerHTML > b.innerHTML) ? 1 : -1;
            };

       </script>
      <table style="width:100%">
          <tbody>
            <tr>
            <td>
              <div style="padding-bottom:5px;">
                <h2><?php echo $mod_strings['LBL_SP_THEME_CALENDAR_TITLE'];?></h2>
              </div>
              <p><?php echo $mod_strings['LBL_SP_THEME_CALENDAR_HELP'];?></p>
               <form action="index.php" method="POST" name="report_form" id="report_form">
                <input type="hidden" name="module" value="Administration">
                <input type="hidden" name="action" value="sp_theme_calendar">
                <input type="hidden" value="1" name="wizard_step"> 
                <input type="hidden" name="process" value="true">
                  <div class="hpanel">
                  <div class="panel-heading">
                     <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                        <tr>
                          <td align="left"> 
                          <br>
                              <input type="submit" id="gonext" value="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>"  name="button" class="button primary" title="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>" >
                              <input type="button" onclick="document.location.href='index.php?module=Administration&action=index';" value="<?php echo $mod_strings['LBL_SP_THEME_CANCEL'];?>" name="button" class="button" title="<?php echo $mod_strings['LBL_SP_THEME_CANCEL'];?>">
                          </td>
                        </tr>
                        </tbody>
                    </table>                 
                  </div>
                  <div class="panel-body">     
                  <br>
                     <table border="0" id="importOptions" style="" class="edit view noBorder"> 
                           <tr> 
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALENDAR_MODULE'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALENDAR_EVENT'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALENDAR_EVENT_END'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALENDAR_FIELD_DURATION'];?>
                             </th>                             
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALENDAR_DURATION'];?>
                             </th>
                             <th colspan=2>
                             <?php echo $mod_strings['LBL_SP_THEME_CALENDAR_FIELDSTODISPLAY'];?>
                             </th>
                          </tr>  
                          <?php

                              foreach($sp_theme_calendar_setting as $ar)
                              {
                                 $duration="30";
                                 if(!empty($ar->duration))
                                    $duration=$ar->duration;
                                    
                                 $strf="";
                                 foreach($ar->fields_display as $f)
                                 {
                                   if(empty($strf))
                                      $strf.="\n";
                                   $strf.=$f;
                                 }
                                   
                              ?>
                              <tr id="row_<?php echo $ar->id;?>">
                                 <td valign="top" style="width:20%;">   
                                      <select class="selectmodule"  name="c_module[]">  
                                      <option value=""></option>                                     
                                       <?php
                                          $d = dir('modules');
                                          $armo=array();
                                      		while($e = $d->read()){
                                      			if(substr($e, 0, 1) == '.' || !is_dir('modules/' . $e))continue;
                                      			if(file_exists('modules/' . $e . '/metadata/studio.php') && isset($GLOBALS [ 'beanList' ][$e])) // installed modules must also exist in the beanList
                                      			{
                                              $armo[]=$e;   
                                      			}
                                         } 
                                        
                                         foreach($armo as $e)
                                         {
                                         
                                             if($ar->module==$e)
                                                 echo '<option value="'.$e.'" selected="true">'.translate('LBL_MODULE_NAME',$e).'</option>';
                                              else
                                                 echo '<option value="'.$e.'" >'.translate('LBL_MODULE_NAME',$e).'</option>';
                                         }         
                                       ?> 
                                       </select>  
                                                                  
                                 </td>
                                 <td valign="top" style="width:20%;">     
                                     <select class="fieldevent"  name="fieldevent[]">
                                     <?php
                                     if(!empty($ar->module))
                                      foreach($arr_f[$ar->module] as $ff) {
                                         if(($ff['type']!='datetime') &&($ff['type']!='date')&&($ff['type']!='datetimecombo'))
                                            continue;   
                                        if($ar->field_event==$ff['name'])
                                          echo '<option selected="true" value="'.$ff['name'].'">'.$ff['name'].'</option>';
                                        else
                                          echo '<option value="'.$ff['name'].'">'.$ff['name'].'</option>'; 
                                      }
                                     ?>
                                     </select>       
                                 </td>
                                 <td valign="top" style="width:20%;">     
                                     <select class="fieldeventend"  name="fieldeventend[]">
                                     <option value=''></option>
                                     <?php
                                     if(!empty($ar->module))
                                      foreach($arr_f[$ar->module] as $ff) {
                                         if(($ff['type']!='datetime') &&($ff['type']!='date')&&($ff['type']!='datetimecombo'))
                                            continue;   
                                        if($ar->fieldeventend==$ff['name'])
                                          echo '<option selected="true" value="'.$ff['name'].'">'.$ff['name'].'</option>';
                                        else
                                          echo '<option value="'.$ff['name'].'">'.$ff['name'].'</option>'; 
                                      }
                                     ?>
                                     </select>       
                                 </td>
                                 <td valign="top" style="width:20%;">     
                                     <select class="field_duration"  name="field_duration[]">
                                     <option value=''></option>
                                     <?php
                                     if(!empty($ar->module))
                                      foreach($arr_f[$ar->module] as $ff) { 
                                        if($ar->field_duration==$ff['name'])
                                          echo '<option selected="true" value="'.$ff['name'].'">'.$ff['name'].'</option>';
                                        else
                                          echo '<option value="'.$ff['name'].'">'.$ff['name'].'</option>'; 
                                      }
                                     ?>
                                     </select>       
                                 </td>
                                 <td valign="top" >     
                                     <input type="text" style="width:70px" name="duration[]" value="<?php echo $duration;?>">    
                                 </td>
                                 <td valign="top" style="width:20%;">     
                                     <select class="fields_display"  name="fields_display[]">
                                      <?php
                                     if(!empty($ar->module))
                                      foreach($arr_f[$ar->module] as $ff) {
                                          echo '<option value="'.$ff['name'].'">'.$ff['name'].'</option>'; 
                                      }
                                     ?>
                                     </select>       
                                 </td>
                                 <td valign="top" style="width:20%;">     
                                     <textarea class="fields_todisplay" cols=15 rows=5 name="fields_todisplay[]"><?php echo $strf;?></textarea>     
                                 </td>
                                 <td>
                                 <i class="pe-7s-close rmb" style="font-size:22px;cursor:pointer;" ></i>

                                 </td>
                              </tr>   
                            <?php
                            }
                            ?> 
                            <tr>
                                 <td colspan=3>   
                                    <input type="button" onclick="addrow();" value="<?php echo $mod_strings['LBL_SP_THEME_CALENDAR_ADD'];?>" name="button" class="button" title="<?php echo $mod_strings['LBL_SP_THEME_CALENDAR_ADD'];?>">
                                 </td>
                           </tr>                         
                        </table>    
                      <br>                

                   </div>  
                  </form>
               </div>
               </div>  
            </td>
            </tr>
           </tbody>
         </table> 
              
    <?php 
    }
  else
  {

     $configurator->loadConfig(); 
     $sp_theme_calendar_setting=array();


     $j=0;  

     foreach($_REQUEST["c_module"] as $module)
        {
              if(empty($_REQUEST["fieldevent"][$j]))
                continue;
              if(empty($_REQUEST["duration"][$j]))
               $durat=30;
              else
               $durat=$_REQUEST["duration"][$j];
              $text = trim($_REQUEST['fields_todisplay'][$j]);
              $df= explode("\n", $text);                                                                                                      
              $sp_theme_calendar_setting[]=array('module'=>$module,'field_event'=>$_REQUEST["fieldevent"][$j],'fieldeventend'=>$_REQUEST["fieldeventend"][$j],'field_duration'=>$_REQUEST["field_duration"][$j],'duration'=>$durat,'fields_display'=>$df);
              $j++;
        }                                                            
    
        $configurator->config['sp_theme_calendar_setting'] = json_encode($sp_theme_calendar_setting);  
 

        $configurator->saveConfig(); // save changes
        $queryParams = array(
             'module' => 'Administration',
             'action' => 'index'
         );
         SugarApplication::redirect('index.php?' . http_build_query($queryParams));
      
 }
?>