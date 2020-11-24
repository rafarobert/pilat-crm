<?php
class SpTheme_return_dialogcls
{ 
  // REDIRECTS FROM EDIT DIALOG  
  function return_dialog($event, $arguments)
  {    
    global $current_user;
    global $currentModule;


   if(!empty($_REQUEST["return_dialog"]))
   {
       
         $queryParams = array(
            'module' =>$_REQUEST["return_dialog"],
            'action' => 'index'
        );
        SugarApplication::redirect('index.php?' . http_build_query($queryParams));
        die();
   }
 
  }  
                                                                  
}
