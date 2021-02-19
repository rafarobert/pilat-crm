<?php

   ini_set('display_startup_errors',1);
  ini_set('display_errors',1);
  error_reporting(E_ALL ^ E_STRICT );
  
  $src_array=array(
  'include/utils/layout_utils.php',
  'include/Dashlets/Dashlet.php',
  'include/javascript/popup_helper.js',
  'include/javascript/sugar_3.js',
  'include/ListView/ListViewDisplay.php',
  'include/ListView/ListViewFacade.php',
  'include/ListView/ListViewSubPanel.php',
  'include/MVC/View/SugarView.php',
  'include/MVC/View/views/view.list.php',
  'include/MySugar/javascript/MySugar.js',
  'include/Smarty/plugins/function.sugar_link.php',
  'include/Smarty/plugins/function.sugar_menu.php',
  'include/SubPanel/SubPanelDynamic.html',
  'include/SubPanel/tpls/SubPanelDynamic.tpl',
  'include/SubPanel/SubPanelTiles.js',
  'include/SubPanel/SubPanelTiles.php',
  'include/SubPanel/SubPanel.php',
  'modules/Administration/Locale.tpl',
  'modules/Administration/Locale.tpl',
  'modules/Emails/javascript/complexLayout.js',
  'modules/Emails/javascript/EmailUIShared.js',
  'modules/Emails/javascript/init.js',
  'modules/Emails/javascript/composeEmailTemplate.js',
  'modules/Emails/javascript/EmailUICompose.js',
  'modules/Emails/templates/_baseEmail.tpl',
  'modules/Emails/EmailUI.css', 
  'modules/Emails/include/ComposeView/ComposeView.tpl',
  'modules/Emails/include/ComposeView/EmailsComposeView.js',
  'modules/EmailTemplates/EditView.html',
  'modules/InboundEmail/EditView.html',
  'modules/ModuleBuilder/javascript/ModuleBuilder.js', 
  'modules/ModuleBuilder/tpls/LayoutEditor.css',
  'modules/Studio/wizards/RenameModules.tpl',
  'modules/Users/Login.php', 
  'modules/Users/User.php',
  'modules/Users/authentication/SugarAuthenticate/FactorAuthEmailCode.tpl',
  'jssource/JSGroupings.php',  
  'include/javascript/quickCompose.js',
  'include/generic/SugarWidgets/SugarWidgetSubPanelTopComposeEmailButton.php',
  'ModuleInstall/PackageManager/tpls/PackageManagerScripts.tpl',
  'cache/include/javascript/sugar_field_grp.js',
  'cache/include/javascript/sugar_grp_emails.js',
  'cache/include/javascript/sugar_grp_jsolait.js',
  'cache/include/javascript/sugar_grp_project.js',
  'cache/include/javascript/sugar_grp_project_template.js',
  'cache/include/javascript/sugar_grp_quickcomp.js',
  'cache/include/javascript/sugar_grp_yui_widgets.css',
  'cache/include/javascript/sugar_grp_yui_widgets.js',
  'cache/include/javascript/sugar_grp_yui2.js',
  'cache/include/javascript/sugar_grp1.js',
  'cache/include/javascript/sugar_grp1_jquery.js',
  'cache/include/javascript/sugar_grp1_yui.js'
  );

 // MAKE BACKUP OF CORES FILES
 foreach($src_array as $path)
 {
    $dest=$path;
    $source="themes/sp_theme/backup_core/".$path;
     
    try {
     copyr($source, $dest);
     check_copy($source, $dest);
    }
    
    catch(Exception $e) {
      echo 'Error: ' .$e->getMessage();
      die();
    } 
    
 }
 

  function check_copy($source, $dest)
  {
      
      if(is_dir($source)) {
          $dir_handle=opendir($source);
          $sourcefolder = basename($source);
           while($file=readdir($dir_handle)){
              if($file!="." && $file!=".."){
                  if(is_dir($source."/".$file)){
                      check_copy($source."/".$file, $dest."/".$sourcefolder);
                  } else { 
                    if(is_file($source."/".$file))
                      if(!is_file($dest."/".$file))
                      {
                        echo "Error with restore SuiteCRM core files. Please check your files permissions";
                        die();
                      }
                  }
              }
          }
          closedir($dir_handle);
      } else {
         if(!is_file($source))
            if(!is_file($dest))
                {
                  echo "Error with backup restore core files. Please check your files permissions";
                  die();
                }
      }
  }
  
  function copyr($source, $dest)
  {
      // recursive function to copy
      // all subdirectories and contents:
      if(is_dir($source)) {
          $dir_handle=opendir($source);
          $sourcefolder = basename($source);
          mkdir($dest."/".$sourcefolder,0755,true);
          while($file=readdir($dir_handle)){
              if($file!="." && $file!=".."){
                  if(is_dir($source."/".$file)){
                      copyr($source."/".$file, $dest."/".$sourcefolder);
                  } else {
                      copy($source."/".$file, $dest."/".$file);
                  }
              }
          }
          closedir($dir_handle);
      } else {
          // can also handle simple copy commands
          $sourcefolder = dirname($dest);
          if(!is_dir($sourcefolder)) 
             mkdir($sourcefolder,0755,true);
    
          copy($source, $dest);
      }
  }


?>

<script>
toggleDisplay('displayLog');
</script>
<br />
<table width="90%" border="0" cellspacing="0" cellpadding="5">

    <tr>
        <td align="left" valign="top">
            <h1>Sugar-Project Theme and Modules</h1>
            <p>
                Unistall<br />
            </p>
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="http://www.sugar-project.com">www.sugar-project.com</a><br/>
        </td>
    </tr>
</table>
<br />
