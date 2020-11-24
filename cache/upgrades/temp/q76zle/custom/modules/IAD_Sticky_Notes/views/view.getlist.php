<?php

class Viewgetlist extends SugarView {
  
  function Viewgetlist() {
        parent::SugarView();
  }

  function display() 
  {


   global $current_user;
   global $timedate;
   $bean = BeanFactory::getBean('IAD_Sticky_Notes');
   $list = $bean->get_full_list("date_modified desc", "iad_sticky_notes.status_id<>'Expired'");
   $str="";
   if(empty($list))
      return "";
   foreach($list as $item)
    {     
        $datacreated="";
        if(!empty($item->date_modified))
        {
            $newTD= $timedate->fromString($item->date_modified,$current_user);
            $datacreated=$timedate->asUserDate($newTD, $current_user);
        }
    $str.='<div class="panel-body note-link">
   
     <small class="pull-right text-muted">'.$datacreated.'</small>
      <h5><a href="#" onclick=get_m("'.$item->id.'",2); return false;" ><i class="fa fa-remove"></i></a>&nbsp;
      <a href="#" onclick=get_m("'.$item->id.'",0); return false;" ><i class="pe-7s-note2"></i></a>&nbsp;
      <a href="#" onclick=get_m("'.$item->id.'",1); return false;" data-toggle="tab">'.$item->name.'</a></h5>
       <div class="small">'.$this->getExcerpt($item->description,60).'</div>
    </div>';

    }
   
    echo $str;
   
  }
  
  function getExcerpt($str, $startPos=0, $maxLength=100) {
	if(strlen($str) > $maxLength) {
		$excerpt   = substr($str, $startPos, $maxLength-3);
		$lastSpace = strrpos($excerpt, ' ');
		$excerpt   = substr($excerpt, 0, $lastSpace);
		$excerpt  .= '...';
	} else {
		$excerpt = $str;
	}
	
	return $excerpt;
 }
} 

