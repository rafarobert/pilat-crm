<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

    global $current_user;
    global $timedate;
    global $current_language;
    global $mod_strings;
    global $sugar_config; // declare global $sugar_config array
    
    require_once 'modules/Configurator/Configurator.php';
    $configurator = new Configurator();

       
    $linecolor = $sugar_config['sp_theme_linecolor'];
    $buttoncolor = $sugar_config['sp_theme_buttoncolor'];
    $maincolor = $sugar_config['sp_theme_maincolor'];
    $max_subpanel_toolbar = $sugar_config['max_subpanel_toolbar'];
    $default_max_tabs   = $sugar_config['sp_theme_nummaxmenuleft'];
    $sp_theme_logo_left   = $sugar_config['sp_theme_logo_left'];
                                            
     
    if(empty($sp_theme_logo_left))
    {
        $sp_theme_logo_left=0;
    }
      
    if(empty($default_max_tabs))
    {
        $default_max_tabs="10";
    }
    
    if(empty($max_subpanel_toolbar))
    {
        $max_subpanel_toolbar="12";
    }
    
    if(empty($maincolor))
    {
        $maincolor="#4d8f72";
    }
    if(empty($linecolor))
    {
        $linecolor="#e41e13";
    }   
    if(empty($buttoncolor))
    {
        $buttoncolor="#225485";
    }
   
    
   if(empty($_REQUEST["wizard_step"]))
   {       
    ?>
    <link rel="stylesheet" href="themes/sp_theme/vendor/colorpicker/css/colorpicker.css" type="text/css" />
    <style>
        #buttoncolordiv,#linecolordiv,#maincolordiv{
        	position: relative;
        	width: 36px;
        	height: 36px;
        	background: url('themes/sp_theme/vendor/colorpicker/images/select2.png');
        }
        #buttoncolordiv div,#linecolordiv div,#maincolordiv div{
        	position: absolute;
        	top: 3px;
        	left: 3px;
        	width: 30px;
        	height: 30px;
        	background: url(themes/sp_theme/vendor/colorpicker/images/select2.png') center;
        }
    </style>
    <script type="text/javascript" src="themes/sp_theme/vendor/colorpicker/js/colorpicker.js"></script>
    <style>div#rollover {position: relative;float: left;margin: none;text-decoration: none;}div#rollover a:hover {padding: 0;text-decoration: none;}div#rollover a span {display: none;}div#rollover a:hover span {text-decoration: none;display: block;width: 250px;margin-top: 5px;margin-left: 5px;position: absolute;padding: 10px;color: #333;	border: 1px solid #ccc;	background-color: #fff;	font-size: 12px;z-index: 1000;}</style>

      <table style="width:100%">
          <tbody>
            <tr>
            <td>
              <div style="padding-bottom:5px;">
                <h2><?php echo $mod_strings['LBL_SP_THEME_ADMIN_DESC'];?></h2>
              </div>
               <form action="index.php" method="POST" name="report_form" id="report_form">
                <input type="hidden" name="module" value="Administration">
                <input type="hidden" name="action" value="sp_theme_general">
                <input type="hidden" value="1" name="wizard_step"> 
                <input type="hidden" name="process" value="true">
                  <div class="hpanel">
                  <div class="panel-heading">
                     <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                        <tr>
                          <td align="left"> 
                          <br>
                              <input type="submit" id="gonext" value="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>" onclick="conferma();" name="button" class="button primary" title="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>" >
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
                            <th align="left" scope="row" colspan="4"><h4><?php echo $mod_strings['LBL_SP_THEME_CONFIG_TITLE'];?></h4></th> 
                          </tr> 
                          <tr>
                             <td scope="col" style="width:280px;text-align:right;">
                                  <?php echo $mod_strings['LBL_SP_THEME_SHOWMENULEFT'];?>:
                              </td>
                              <td>
                              <?php
                              if($sp_theme_logo_left==1)
                              {
                              ?>
                                    <input type='checkbox' checked="true" id="sp_theme_logo_left" name="sp_theme_logo_left" value="1"/>
                               <?php
                              }
                              else
                              {
                              ?>
                                    <input type='checkbox' id="sp_theme_logo_left" name="sp_theme_logo_left" value="1"/>
                               <?php
                              }
                              ?>
                              </td>
                              <td>     
                                  <?php echo $mod_strings['LBL_SP_THEME_SHOWMENULEFT_INFO'];?>
                              </td>
                          </tr>     
                          <tr>
                             <td scope="col" style="width:280px;text-align:right;">
                                  <?php echo $mod_strings['LBL_SP_THEME_MAXMENUITEMS'];?>:
                              </td>
                              <td>
                                    <input type='text' id="default_max_tabs" name="default_max_tabs" value="<?php echo $default_max_tabs;?>"/>
                              </td>
                              <td>     
                                  <?php echo $mod_strings['LBL_SP_THEME_MAXMENUITEMS_INFO'];?>
                              </td>
                          </tr>   
                                                     
                          <tr>
                             <td scope="col" style="width:280px;text-align:right;">
                                  <?php echo $mod_strings['LBL_SP_THEME_TOOLBARSUBPANELS'];?>:
                              </td>
                              <td>
                                    <input type='text' id="max_subpanel_toolbar" name="max_subpanel_toolbar" value="<?php echo $max_subpanel_toolbar;?>"/>
                              </td>
                              <td>     
                                  <?php echo $mod_strings['LBL_SP_THEME_TOOLBARSUBPANELS_INFO'];?>
                              </td>
                          </tr>  
                        </table>    
                      <br>                
                      <table border="0" id="importOptions" style="" class="edit view noBorder"> 
                           <tr> 
                            <th align="left" scope="row" colspan="4"><h4><?php echo $mod_strings['LBL_SP_THEME_COLORS_TITLE'];?></h4></th> 
                          </tr>     
                          <tr>
                             <td scope="col" style="width:280px;text-align:right;">
                                  <?php echo $mod_strings['LBL_SP_THEME_MAINCOLOR'];?>:
                              </td>
                              <td>
                                    <input type='text' id="maincolor" name="maincolor" value="<?php echo $maincolor;?>"/>
                              </td>
                              <td>     
                                    <div id="maincolordiv"><div style="background-color:<?php echo $maincolor;?>;"></div></div>
                              </td>
                          </tr> 
                          <tr>
                             <td scope="col" style="width:280px;text-align:right;">
                                 <?php echo $mod_strings['LBL_SP_THEME_LINECOLOR'];?>:
                              </td>
                              <td>
                                    <input type='text' id="linecolor" name="linecolor" value="<?php echo $linecolor;?>"/>
                              </td>
                              <td>         
                                    <div id="linecolordiv"><div style="background-color:<?php echo $linecolor;?>;"></div></div>
                              </td>
                          </tr> 
                         <tr>
                             <td scope="col" style="width:280px;text-align:right;">
                                  <?php echo $mod_strings['LBL_SP_THEME_BUTTONCOLOR'];?>:</slot>
                              </td>
                              <td>
                                    <input type='text' id="buttoncolor" name="buttoncolor" value="<?php echo $buttoncolor;?>"/>
                              </td>
                              <td>   
                                    <div id="buttoncolordiv"><div style="background-color:<?php echo $buttoncolor;?>;"></div></div>
                              </td>
                          </tr> 
                        </table>
                   </div>  
                  </form>
               </div>
               </div>  
            </td>
            </tr>
           </tbody>
         </table> 

    <script>
        function conferma()
        {
            $('#report_form').submit();
        }

        $(function() {

            $('#linecolordiv').ColorPicker({
                    color: $('#linecolor').val(),
                            onShow: function (colpkr) {
                                    $(colpkr).fadeIn(500);
                                    return false;
                            },
                            onHide: function (colpkr) {
                                    $(colpkr).fadeOut(500);
                                    return false;
                            },
                            onChange: function (hsb, hex, rgb) {
                                    $('#linecolordiv div').css('backgroundColor', '#' + hex);
                                    $('#linecolor').val( '#' + hex);
                            }
                    });
             $('#buttoncolordiv').ColorPicker({
                color: $('#buttoncolor').val(),
                        onShow: function (colpkr) {
                                $(colpkr).fadeIn(500);
                                return false;
                        },
                        onHide: function (colpkr) {
                                $(colpkr).fadeOut(500);
                                return false;
                        },
                        onChange: function (hsb, hex, rgb) {
                                $('#buttoncolordiv div').css('backgroundColor', '#' + hex);
                                $('#buttoncolor').val( '#' + hex);
                        }
                });
              $('#maincolordiv').ColorPicker({
              color: $('#maincolor').val(),
                      onShow: function (colpkr) {
                              $(colpkr).fadeIn(500);
                              return false;
                      },
                      onHide: function (colpkr) {
                              $(colpkr).fadeOut(500);
                              return false;
                      },
                      onChange: function (hsb, hex, rgb) {
                              $('#maincolordiv div').css('backgroundColor', '#' + hex);
                              $('#maincolor').val( '#' + hex);
                      }
              });      
        });           
      </script> 
      <?php 
  }
  else
  {
    
        $configurator->loadConfig(); 
  
        $filename="themes/sp_theme/style/custom_colors.css";
        $filenameOUT=$filename;
        
        $editcss=file_get_contents($filename); 
        $pos = strpos($editcss, $maincolor);
        if ($pos === false) {
            $maincolor="#4d8f72";
            $linecolor="#e41e13";
            $buttoncolor="#225485";   
        }                               

        
        
        if(!empty($_REQUEST["maincolor"]))
        {         
          $editcss=str_replace($maincolor,$_REQUEST["maincolor"],$editcss);     
          $configurator->config['sp_theme_maincolor'] = $_REQUEST["maincolor"]; 
        }
            
        if(!empty($_REQUEST["linecolor"]))
        {  
          $editcss=str_replace($linecolor,$_REQUEST["linecolor"],$editcss);     
          $configurator->config['sp_theme_linecolor'] = $_REQUEST["linecolor"]; 
        }
        
        if(!empty($_REQUEST["buttoncolor"]))
        {      
          $editcss=str_replace($buttoncolor,$_REQUEST["buttoncolor"],$editcss);     
          $configurator->config['sp_theme_buttoncolor'] = $_REQUEST["buttoncolor"];  
        }
  
        file_put_contents($filenameOUT, $editcss);
                
        if(!empty($_REQUEST["max_subpanel_toolbar"]))
        {           
          $configurator->config['max_subpanel_toolbar'] = $_REQUEST["max_subpanel_toolbar"];  
        }
        else
        {
        $configurator->config['max_subpanel_toolbar'] =10;
        }
       if(!empty($_REQUEST["default_max_tabs"]))
        {           
          $configurator->config['sp_theme_nummaxmenuleft'] = $_REQUEST["default_max_tabs"];  
        } 
        else
        {
          $configurator->config['max_subpanel_toolbar'] =12;
        }
        if(!empty($_REQUEST["sp_theme_logo_left"]))
        {           
          $configurator->config['sp_theme_logo_left'] = 1; 
        } 
        else
        {
          $configurator->config['sp_theme_logo_left'] = 0;
        }
    
        $configurator->saveConfig(); // save changes
        
        $queryParams = array(
             'module' => 'Administration',
             'action' => 'index'
         );
         SugarApplication::redirect('index.php?' . http_build_query($queryParams));
         
  }
