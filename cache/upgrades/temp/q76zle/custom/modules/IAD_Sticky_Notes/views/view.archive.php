<?php

class Viewarchive extends SugarView {
  
  function Viewarchive() {
        parent::SugarView();
  }

  function display() 
  {

   global $current_user;
   if(!empty($_REQUEST["record"]))
   {       
      
       $sn=new IAD_Sticky_Notes();
       $sn->retrieve($_REQUEST["record"]);
       $sn->status_id='Expired';
       $sn->save();
   }
    $dataresult = array('error' =>'');
    header('Content-type: application/json');
    echo json_encode($dataresult);
  }
} 

