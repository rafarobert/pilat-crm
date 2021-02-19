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
   
    $sp_theme_subpanel_setting=array();
    if(!empty($sugar_config['sp_theme_calculator_setting']))
      $sp_theme_calculator_setting = json_decode($sugar_config['sp_theme_calculator_setting']);

    if(empty($sp_theme_calculator_setting))
    {
     $sp_theme_calculator_setting[]=array('field'=>'','module'=>'','expression'=>'','label'=>'','decimals'=>'');
    }

    
   if(empty($_REQUEST["wizard_step"]))
    {       
    ?>
       <style>
       .icons-box span,.icons-box i
       {
       cursor:pointer;
       }
       </style>
       <script>
       
               
          $(function() {
            $('.rmb').click(removerow);
            $('.selectmodule').click(caricafields);
            $(".selectmodule").trigger( "click" );
            $(".fieldsmod").change(function() {
              $(this).parent().parent().find('.expression').val('sum('+$(this).val()+')');        
              $(this).parent().parent().find('.flabel').val('');
              $(this).parent().parent().find('.decimals').val('');
            });
            
          });     
     
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
               objcloned.find('.selectmodule').click(caricafields); 
               
               objcloned.find(".fieldsmod").change(function() {
                  $(this).parent().parent().find('.expression').val('sum('+$(this).val()+')');        
                  $(this).parent().parent().find('.flabel').val('');
                  $(this).parent().parent().find('.decimals').val('');
               });
               objcloned.find(".expression").val('');
               objcloned.find(".flabel").val('');
               objcloned.find(".decimals").val('');
          }  
          
          function caricafields()
          {           
             var cm=$(this).val();
             for (var x = 0; x < data.length; x++) {
               if(data[x].module==cm)
               {
                   optrep="";
                   for (var k= 0; k < data[x].fields.length; k++) {
                      if($(this).parent().parent().find('.fieldsmod').val()==data[x].fields[k].name)
                       optrep+="<option selected='true' value='"+data[x].fields[k].name+"'>"+data[x].fields[k].name+"</option>";
                      else
                       optrep+="<option value='"+data[x].fields[k].name+"'>"+data[x].fields[k].name+"</option>";                      
                   }
                   $(this).parent().parent().find('.fieldsmod').find('option').remove();
                   $(this).parent().parent().find('.fieldsmod').append(optrep);
                   return;
               }     
             }
          } 

      

          <?php
          $strar='var data = [';
          $firstmod=true;
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
                   if(!$first)
                   {
                     $strar.=',';
                   }
                    $strar.='{"name":"'.$def['name'].'","type":"'.$def['name'].'","vname":"'.$def['name'].'"}';
                   $first =false;  
                  }
               }  
              $strar.=']}'; 
      			}
      		} 
          $strar.='];'; 
          echo $strar;         
          ?>
 
       </script>
      <table style="width:100%">
          <tbody>
            <tr>
            <td>
              <div style="padding-bottom:5px;">
                <h2><?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_TITLE'];?></h2>
              </div>
              <p><?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_TITLE_HELP'];?></p>
               <form action="index.php" method="POST" name="report_form" id="report_form">
                <input type="hidden" name="module" value="Administration">
                <input type="hidden" name="action" value="sp_theme_calculator">
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
                             <?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_MODULE'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_FIELD'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_EXPRESSION'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_LABEL'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_DECIMALS'];?>
                             </th>
                          </tr>  
                          <?php
                        
                              foreach($sp_theme_calculator_setting as $ar)
                              {
                              ?>
                              <tr id="row_<?php echo $ar->id;?>">
                                 <td valign="top" style="width:20%;">   
                                      <select class="selectmodule" id="module_<?php echo $ar->id;?>" name="calculator_module[]">  
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
                                         sort($armo); 
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
                                     <select  class="fieldsmod" id="field_<?php echo $ar->id;?>" name="field[]">
                                     <?php
                                     if(!empty($ar->field))
                                     {
                                         echo '<option value="'.$ar->field.'" selected="true">'.$ar->field.'</option>';
                                     }
                                     
                                     ?>
                                     </select>       
                                 </td>
                                 <td valign="top" style="width:30%;">     
                                      <textarea class="expression" id="expression_<?php echo $ar->id;?>" rows=3 cols=30 name="expression[]"><?php echo $ar->expression;?></textarea>
                                 </td>
                                 <td valign="top" style="width:30%;">     
                                      <input class="flabel" type="text" id="label_<?php echo $ar->id;?>"name="label[]" value="<?php echo $ar->label;?>">
                                 </td> 
                                 <td valign="top" style="width:30%;">     
                                      <input class="decimals" type="text" id="decimals_<?php echo $ar->id;?>"  name="decimals[]" value="<?php echo $ar->decimals;?>">
                                 </td> 
                                 <td >
                                 <i class="pe-7s-close rmb" style="font-size:22px;cursor:pointer;" ></i>
                                 </td>
                              </tr>   
                            <?php
                            }
                            ?> 
                            <tr>
                                 <td colspan=3>   
                                    <input type="button" onclick="addrow();" value="<?php echo $mod_strings['LBL_SP_THEME_CALCULATOR_ADD'];?>" name="button" class="button" title="<?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_ADD'];?>">
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
     $sp_theme_calculator_setting=array();
     $j=0;   
     foreach($_REQUEST["calculator_module"] as $module)
        {
           if(empty($_REQUEST["expression"][$j]))
              continue;

           $field = trim($_REQUEST['field'][$j]);
           $expression = trim($_REQUEST['expression'][$j]);
           if(empty($_REQUEST["decimals"][$j]))
              $decimals=2;
           else
              $decimals=$_REQUEST["decimals"][$j];
           $sp_theme_calculator_setting[]=array(
           'module'=>$module,
           'expression'=>$_REQUEST["expression"][$j],
           'label'=>$_REQUEST["label"][$j],
           'field'=>$_REQUEST["field"][$j],
           'decimals'=>$decimals
           );
           $j++;
        }                                                            
    
        $configurator->config['sp_theme_calculator_setting'] = json_encode($sp_theme_calculator_setting);  
        $configurator->saveConfig(); // save changes
        
        $queryParams = array(
             'module' => 'Administration',
             'action' => 'index'
         );
         SugarApplication::redirect('index.php?' . http_build_query($queryParams));
         
  }
