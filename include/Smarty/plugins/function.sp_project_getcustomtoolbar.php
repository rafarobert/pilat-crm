<?php

function smarty_function_sp_project_getcustomtoolbar($params, &$smarty) {
 
    global $sugar_config;
    $icons=array();
    $stropt="";
    
    if(!empty($sugar_config['sp_toolbar']))
    {
        $icons = json_decode($sugar_config['sp_toolbar']);
        foreach($icons as $ar)
        {
           if((empty($ar->icon))||(empty($ar->url)))
             continue;
           if($ar->target==1)
            $tg='target="_blank"';
           else
            $tg=''; 
           $stropt.='<li>                
                      <a href="'.$ar->url.'" title="'.$ar->name.'" class="" '.$tg.'>
                          <i class="'.$ar->icon.'"></i>
                      </a>
                  </li>';
        }
    }
    return $stropt;	
}

?>
