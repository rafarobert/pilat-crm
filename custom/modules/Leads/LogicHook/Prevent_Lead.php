<?php
class Prevent_LeadClass
{
	function PreventLeadJSFunction ($event, $arguments)
    {
	//echo "[[Loaded]]";
        if ($GLOBALS['module'] == 'Leads')
        {
            echo "<script type='text/javascript' src='custom/modules/Leads/JavaScript/Prevent_Lead.js'></script>";
        }
    }

}
?>
