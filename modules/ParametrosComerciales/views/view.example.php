<?php
if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

require_once("modules/Administration/Administration.php");

class ViewExample extends SugarView
{
    
    function display()
    {
        echo 'Example View';
    }
}
