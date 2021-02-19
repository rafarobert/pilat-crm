<?php

function smarty_function_sp_project_isadmin($params, &$smarty) {
   global  $current_user;
   if($current_user->is_admin) 
   return"<li>     
              <a href='index.php?module=Administration&action=index' id='admin_link'>
                  <i class='pe-7s-tools'></i>
              </a>
          </li>";
   else
   return "";
   
  }

?>