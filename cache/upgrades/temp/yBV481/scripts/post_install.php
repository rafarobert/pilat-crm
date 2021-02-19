<?php
if (! defined('sugarEntry') || ! sugarEntry) die('Not A Valid Entry Point');
 
function post_install()
{
	$autoexecute = false;
	$show_output = false;
	require_once("modules/Administration/QuickRepairAndRebuild.php");
	$randcall = new RepairAndClear();
	$randcall->repairAndClearAll(array('clearAll'),array(translate('LBL_ALL_MODULES')), $autoexecute,$show_output);

$file_list="";
if(file_exists("custom/modules/Accounts/views/view.edit.phpdtorg"))
{
	$file_list.="Accounts,";
}
if(file_exists("custom/modules/Contacts/views/view.edit.phpdtorg"))
{
	$file_list.="Contacts,";
}
if(file_exists("custom/modules/Leads/views/view.edit.phpdtorg"))
{
	$file_list.="Leads";
}


if($file_list!="")
{
	$file_list = substr($file_list,0,-1);
	$msg_alt = "<br><span style='font-size: 1.8em;'>NOTE : You already had ";
	if($file_list!="")
	{
		$msg_alt .= " view.edit.php in custom views of <b>$file_list</b>";
	}
	
	$warn_alt = "<br>We have taken a copy with '.phpdtorg' prepended in respective files<br>Later you will have to merge the files manually to merge functionality.</span>";
	$alert_msg = $msg_alt.$warn_alt;
	echo($alert_msg);
}

?>

<br>
    <div style="margin: 22px;">
        <span style="font-size: 1.5em;color: green"><strong>Duplicate Checker addon installed successfully.</strong></span>
        <ul>
            <li style="">Duplicate Checker Configuration Documentation <a href="https://store.suitecrm.com/docs/duplicate-preventive"> Click Here </a> </li>
            <li style="">For Lisence Activation <a href="index.php?module=Duplicate_Preventive&action=license"> Click Here </a> </li>
        </ul>
        <span style="font-size: 1.5em;color: blue"><strong>Contact us !!</strong></span>
        <br>
        mailto - info@dreamertechs.com
    </div>

      <br /><br />
<?php
}
?>
