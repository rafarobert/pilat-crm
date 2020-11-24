<?php
class Prevent_ContactClass
{
	function PreventContactJSFunction ($event, $arguments)
    {
        if ($GLOBALS['module'] == 'Contacts')
        {
            echo "<script type='text/javascript' src='custom/modules/Contacts/JavaScript/Prevent_Contact.js'></script>";
        }
    }

}
?>