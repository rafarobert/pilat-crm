<?php
$module_detail  =array();
$id_detail		=array();
$name_detail	=array();
$city_detail	=array();

if($module =='Accounts'){
	//for check duplicate name
	if($count > 0)
	{
		$query="select id,name,billing_address_city from accounts where deleted=0 and name = '".$name."'";
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$account_name	= $query_row['name'];
			$account_id		= $query_row['id'];
			$account_city   = $query_row['billing_address_city'];

			array_push($module_detail,'Accounts');
			array_push($id_detail,$account_id);
			array_push($name_detail,$account_name);
			array_push($city_detail,$account_city);
		}
	}

	if($doc_count > 0)
	{
		$query="select a.id as id,a.name as name,a.billing_address_city as city from accounts as a LEFT JOIN accounts_cstm as ac ON a.id=ac.id_c where a.deleted=0 and ac.numero_documento_c = '".$doc_no."' and a.id != '".$record_id."'";
		// /echo $query;die();
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$account_name	= $query_row['name'];
			$account_id		= $query_row['id'];
			$account_city   = $query_row['city'];

			array_push($module_detail,'Accounts');
			array_push($id_detail,$account_id);
			array_push($name_detail,$account_name);
			array_push($city_detail,$account_city);
		}
	}
	//for check duplicate office phone and fax phone
	if($office_phone_count > 0)
	{
		$query="select id,name,billing_address_city from accounts where deleted=0 and (replace(replace(replace(replace(replace(phone_office,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%')";
		//$query="select id,name,billing_address_city from accounts where deleted=0 and $field_id like '%".$format_number."%'";
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$account_name	= $query_row['name'];
			$account_id		= $query_row['id'];
			$account_city   = $query_row['billing_address_city'];

			array_push($module_detail,'Accounts');
			array_push($id_detail,$account_id);
			array_push($name_detail,$account_name);
			array_push($city_detail,$account_city);
		}
	}

	//for check duplicate email address
	/*if($emails_count > 0)
	{
		$query="select * from accounts where deleted=0 and id In(select bean_id email_count from email_addresses as ea,email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and rlea.bean_module='".$module."'and  rlea.email_address_id=ea.id)";
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$account_name	= $query_row['name'];
			$account_id		= $query_row['id'];
			$account_city   = $query_row['billing_address_city'];

			array_push($module_detail,'Accounts');
			array_push($id_detail,$account_id);
			array_push($name_detail,$account_name);
			array_push($city_detail,$account_city);
		}
	}*/
}

if($module == "Leads" || $module == "Contacts")
{
	if($count > 0)
    {
    	$query="select id,first_name,last_name,assigned_user_id from leads where deleted=0 and first_name = '".$first_name."' and last_name='".$last_name."'";
		$query_result=$GLOBALS['db']->query($query);
		
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$lead_name	= $query_row['first_name']." ".$query_row['last_name'];
			$lead_id	= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);

			array_push($module_detail,'Leads');
			array_push($id_detail,$lead_id);
			array_push($name_detail,$lead_name);
			array_push($city_detail,$user_name);
		}

		$query="select id,first_name,last_name,assigned_user_id from contacts where deleted=0 and first_name = '".$first_name."' and last_name='".$last_name."'";
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$contact_name	= $query_row['first_name']." ".$query_row['last_name'];
			$contact_id		= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);
			
			$select_query1 = "Select a.name from accounts as a join accounts_contacts as ac on ac.account_id=a.id where ac.contact_id='".$contact_id."' and ac.deleted='0'";
			$select_query_result1=$GLOBALS['db']->query($select_query1);
			$select_query_row1=$GLOBALS['db']->fetchByAssoc($select_query_result1);
			$account_name   = $select_query_row1['name'];

			if(!empty($account_name))
			{
				$contact_name = $contact_name."</br>(".$account_name.")";
			}

			array_push($module_detail,'Contacts');
			array_push($id_detail,$contact_id);
			array_push($name_detail,$contact_name);
			array_push($city_detail,$user_name);
		}
    }

    if($office_phone_count > 0)
    {
    	$query="select id,first_name,last_name,assigned_user_id from leads where deleted=0 and (replace(replace(replace(replace(replace(phone_mobile,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_work,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_other,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_home,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' )";
    	$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$lead_name	= $query_row['first_name']." ".$query_row['last_name'];
			$lead_id	= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);

			array_push($module_detail,'Leads');
			array_push($id_detail,$lead_id);
			array_push($name_detail,$lead_name);
			array_push($city_detail,$user_name);
		}
	
		$query="select id,first_name,last_name,assigned_user_id from contacts where deleted=0 and (replace(replace(replace(replace(replace(phone_mobile,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_work,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_other,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_home,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' )";
		$query_result=$GLOBALS['db']->query($query);

		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$contact_name	= $query_row['first_name']." ".$query_row['last_name'];
			$contact_id		= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);
			
			$select_query1 = "Select a.name from accounts as a join accounts_contacts as ac on ac.account_id=a.id where ac.contact_id='".$contact_id."' and ac.deleted='0'";
			$select_query_result1=$GLOBALS['db']->query($select_query1);
			$select_query_row1=$GLOBALS['db']->fetchByAssoc($select_query_result1);
			$account_name   = $select_query_row1['name'];

			if(!empty($account_name))
			{
				$contact_name = $contact_name."</br>(".$account_name.")";
			}

			array_push($module_detail,'Contacts');
			array_push($id_detail,$contact_id);
			array_push($name_detail,$contact_name);
			array_push($city_detail,$user_name);
		}
	}

	/*if($emails_count > 0)
	{
		$query="select id,first_name,last_name,assigned_user_id from leads where deleted=0 and id In(select bean_id email_count from email_addresses as ea,email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and rlea.bean_module='Leads' and  rlea.email_address_id=ea.id)";
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$lead_name	= $query_row['first_name']." ".$query_row['last_name'];
			$lead_id	= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);

			array_push($module_detail,'Leads');
			array_push($id_detail,$lead_id);
			array_push($name_detail,$lead_name);
			array_push($city_detail,$user_name);
		}

		$query="select id,first_name,last_name,assigned_user_id from contacts where deleted=0 and id In(select bean_id email_count from email_addresses as ea,email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and rlea.bean_module='Contacts'and  rlea.email_address_id=ea.id)";
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$contact_name	= $query_row['first_name']." ".$query_row['last_name'];
			$contact_id		= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);
			
			$select_query1 = "Select a.name from accounts as a join accounts_contacts as ac on ac.account_id=a.id where ac.contact_id='".$contact_id."' and ac.deleted='0'";
			$select_query_result1=$GLOBALS['db']->query($select_query1);
			$select_query_row1=$GLOBALS['db']->fetchByAssoc($select_query_result1);
			$account_name   = $select_query_row1['name'];

			if(!empty($account_name))
			{
				$contact_name = $contact_name."</br>(".$account_name.")";
			}

			array_push($module_detail,'Contacts');
			array_push($id_detail,$contact_id);
			array_push($name_detail,$contact_name);
			array_push($city_detail,$account_name);
		}
	}*/

	if($doc_count > 0)
	{
		$query="select l.id,l.first_name,l.last_name,l.assigned_user_id from leads as l LEFT JOIN leads_cstm as lc ON l.id=lc.id_c where l.deleted=0 and lc.numero_documento_c = '".$doc_no."' and l.id != '".$record_id."'";
		$query_result=$GLOBALS['db']->query($query);
		
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$lead_name	= $query_row['first_name']." ".$query_row['last_name'];
			$lead_id	= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);

			array_push($module_detail,'Leads');
			array_push($id_detail,$lead_id);
			array_push($name_detail,$lead_name);
			array_push($city_detail,$user_name);
		}

		$query="select c.id,c.first_name,c.last_name,c.assigned_user_id from contacts as c LEFT JOIN contacts_cstm as cc ON c.id=cc.id_c where c.deleted=0 and cc.numero_documento_c = '".$doc_no."' and c.id != '".$record_id."'";
		$query_result=$GLOBALS['db']->query($query);
		while($query_row=$GLOBALS['db']->fetchByAssoc($query_result))
		{
			$contact_name	= $query_row['first_name']." ".$query_row['last_name'];
			$contact_id		= $query_row['id'];

			$select_query = "Select first_name,last_name from users where id='".$query_row['assigned_user_id']."' and deleted='0'";
			$select_query_result=$GLOBALS['db']->query($select_query);
			$select_query_row=$GLOBALS['db']->fetchByAssoc($select_query_result);
			$user_name   = trim($select_query_row['first_name']." ".$select_query_row['last_name']);
			
			$select_query1 = "Select a.name from accounts as a join accounts_contacts as ac on ac.account_id=a.id where ac.contact_id='".$contact_id."' and ac.deleted='0'";
			$select_query_result1=$GLOBALS['db']->query($select_query1);
			$select_query_row1=$GLOBALS['db']->fetchByAssoc($select_query_result1);
			$account_name   = $select_query_row1['name'];

			if(!empty($account_name))
			{
				$contact_name = $contact_name."</br>(".$account_name.")";
			}

			array_push($module_detail,'Contacts');
			array_push($id_detail,$contact_id);
			array_push($name_detail,$contact_name);
			array_push($city_detail,$user_name);
		}
	}
}

?>
<style type="text/css">
.ui-dialog
{
    padding: 0px;
    box-shadow: 0 5px 10px #999999;
}
.ui-dialog .ui-dialog-titlebar
{
    border: 0px none;
    background-image: -moz-linear-gradient(center top,
        #ffffff 0%,
        #f1f1f1 10%,
        #efefef 100%
        );
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0, #ffffff),
        color-stop(.10, #f1f1f1),
        color-stop(1, #efefef)
        );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dfdfdf');
    padding-bottom: 2px;
    border-bottom: 1px solid #ccc;
}
.ui-dialog .ui-widget-content
{
    color: #444;
}
.ui-dialog .ui-dialog-titlebar .ui-dialog-title div
{
    font-weight: normal;
    color: #666;
    font-size: 13px;
    text-shadow: 0px 1px #fff;
}
.ui-dialog .ui-dialog-titlebar-close
{
    margin-top: -10px;
    width: 18px;
    padding: 0px;
}
.ui-dialog .ui-dialog-titlebar-close span
{
    background: url(../../../../index.php?entryPoint=getImage&themeName=Sugar&imageName=close.png) no-repeat center !important;
    height: 18px;
    width: 18px;
}
.ui-dialog .ui-dialog-titlebar-close.ui-state-hover
{
    border: 0px none;
    background: transparent none;
}
.ui-corner-all
{
    border-radius: 1px !important;
}
</style>
<div id='<?php echo $div_name; ?>' style="color:black;display:none; visibility: visible; z-index: 1000; width: fit-content; margin-top: 35px;" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable">
	<table width="370" border="0" cellpadding="1" cellspacing="0" class="olBgClass" >
		<tbody>
			<tr>
				<td>
					<table width="100%" border="0" cellpadding="2" cellspacing="0" class="olCgClass" >
						<tbody>
							<tr>
								<td width="100%" class="olCgClass">
									<div class="olCapFontClass" >
										<div style="float:left;font-weight: bold;">
											Duplicate <?php echo $module; ?> Information
										</div>
										<div style="float: right">
											<a>&nbsp;</a>
											<a></a>
											<a onclick="closepopup('<?php echo $div_name; ?>')" title='Click to Close'><img border="0" style="margin-left:2px; margin-right: 2px;" src="modules/Duplicate_Preventive/close.png"></a>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<table width="100%" border="0" cellpadding="2" cellspacing="0" class="olFgClass">
						<tbody>
							<tr style="border-collapse:collapse;font-size: 12px;">
								<td style="background-color:#f4f9fc;font-weight: bold;width:40px;">Module</td>
								<td style="background-color:#f4f9fc;font-weight: bold;width:140px;">Name</td>
								<td style="background-color:#f4f9fc;font-weight: bold;">
									<?php if($module =='Accounts'){ echo "City";}else if($module=='Contacts'){echo "Account Name";}else if($module=='Leads'){echo "Assigned User Name";} ?>
								</td>
							</tr>
							<?php
								$rows = count($module_detail); // define number of rows
								$cols = 3;// define number of columns
								$td=0;
								for($tr=0;$tr<=$rows;$tr++){

								    echo '<tr>';
								       // for($td=1;$td<=$cols;$td++){
								               echo '<td>'.trim($module_detail[$td]).'</td>';
								               echo '<td><a target="_blank" href="index.php?module='.$module_detail[$td].'&action=DetailView&record='.$id_detail[$td].'">'.trim($name_detail[$td]).'</a></td>';
								               if($city_detail[$td]=='')
												{
													echo '<td>'.trim($city_detail[$td]).'</td>';
												}
												else
												{
													echo '<td>'.trim($city_detail[$td]).'</td>';
												}
								        //}
												$td++;
								    echo "</tr>";
								}
							?>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</div>