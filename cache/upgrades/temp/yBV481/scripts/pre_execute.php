<?php

$error_str="";
//For Edit Views.
if(file_exists("custom/modules/Accounts/views/view.edit.php"))
{
		rename("custom/modules/Accounts/views/view.edit.php","custom/modules/Accounts/views/view.edit.phpdtorg");
}
if(file_exists("custom/modules/Contacts/views/view.edit.php"))
{
		$error_str.="custom/modules/Contacts/views/view.edit.php<br>";
		rename("custom/modules/Contacts/views/view.edit.php","custom/modules/Contacts/views/view.edit.phpdtorg");
}
if(file_exists("custom/modules/Leads/views/view.edit.php"))
{
		$error_str.="custom/modules/Leads/views/view.edit.php<br>";
		rename("custom/modules/Leads/views/view.edit.php","custom/modules/Leads/views/view.edit.phpdtorg");
}
?>