<?php

function smarty_function_sp_project_logo($params, &$smarty) {
    global $sugar_config;


    if(!empty($sugar_config['sp_theme_logo_left']))
    {
      if($sugar_config['sp_theme_logo_left']==1)
      {
      if( file_exists("custom/themes/default/images/company_logo.png"))
          return '<div class="profile-picture">
            <div class="stats-label text-color">
              <img src="custom/themes/default/images/company_logo.png" class="logoleft">     
            </div>
        </div>';  
      else
         return '<div class="profile-picture">
            <div class="stats-label text-color">
              <img src="themes/default/images/company_logo.png" class="logoleft">     
            </div>
        </div>';  
      }   
    }
    return "";
  
}

?>
