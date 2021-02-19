<?php

$module 	= $_REQUEST['module'];
$action 	= $_REQUEST['action'];
$div_name	= $_REQUEST['div_name'];
$record_id	= $_REQUEST['record_id'];	
$name 		= $_REQUEST['name'];
$doc_no 	= $_REQUEST['doc_no'];
$phone_no 	= $_REQUEST['phone_no'];
$field_id 	= $_REQUEST['field_id'];
//$email 		= $_REQUEST['email'];

//contact details
$first_name = $_REQUEST['first_name'];
$last_name 	= $_REQUEST['last_name'];

$id_detail		= array();
$name_detail	= array();
$city_detail	= array();
$dc_setting     = array();
//Query for the Duplicate Checking Setting
$select_dc_query 	= "select * from config where category = 'dc_config'";
$dc_query_result 	= $GLOBALS['db']->query($select_dc_query);
while($dc_query_row 		= $GLOBALS['db']->fetchByAssoc($dc_query_result))
{
	$dc_setting[$dc_query_row['name']] = $dc_query_row['value'];
}

if($module == "Accounts")
{
	if($dc_setting['account_name'] == "1")
	{
		if($action == "Check_Duplicate_Account_Name" && !empty($name))
		{
			$select_query 	= "select count(*) as count from accounts where 1=1 and id <> '".$record_id."' and name = '".$name."' and deleted = 0";
			$query_result 	= $GLOBALS['db']->query($select_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $count 			= $query_row['count'];
	        
	        if($count > 0)
	        {
	            echo "This Account Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	echo "No Duplicate Found";
	        }
		}
	}

	if($dc_setting['account_phone_no'] == "1")
	{
		if($action == "Check_Duplicate_Account_phone" && !empty($phone_no))
		{
			$phone_no = str_replace(array('(', ')', ' ', '-', '+'), '', $phone_no);
			if($field_id == "phone_office")
			{
				$format_number = number_formating($phone_no);
			}
			else
			{
				$format_number = $phone_no;
			}
			$select_query="select count(*) as count from accounts where 1=1 and id <> '".$record_id."' and (replace(replace(replace(replace(replace(phone_office,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%')";
			$query_result 	= $GLOBALS['db']->query($select_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $office_phone_count 			= $query_row['count'];
	        //echo $format_number."----->".$select_query;
	        if($office_phone_count > 0)
	        {
	            echo "This Number Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	echo "No Duplicate Found";
	        }
	    }
	}

	if($dc_setting['account_document_number'] == "1")
	{
		if($action == "Check_Duplicate_Account_Document_Number" && !empty($doc_no))
		{
			$select_query 	= "select count(*) as count from accounts_cstm as ac LEFT JOIN accounts as a ON a.id=ac.id_c where 1=1 and ac.id_c <> '".$record_id."' and ac.numero_documento_c = '".$doc_no."' and a.deleted = 0";
			$query_result 	= $GLOBALS['db']->query($select_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $doc_count 			= $query_row['count'];
	        
	        if($doc_count > 0)
	        {
	            echo "This Document Number Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	echo "No Duplicate Found";
	        }
		}
	}

	/*if($dc_setting['account_email_id'] == "1")
	{
		if($action == "Check_Duplicate_Account_Email" && !empty($email))
		{
			$email_query = "select count(*) as emails_count from email_addresses as ea, email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and rlea.bean_module='".$module."'and  rlea.email_address_id=ea.id and rlea.bean_id <> '".$record_id."'";

			$query_result 	= $GLOBALS['db']->query($email_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $emails_count 	= $query_row['emails_count'];
	        
	        if($emails_count > 0)
	        {
	            echo "This Email Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	echo "No Duplicate Found";
	        }
		}
	}*/
}

if($module == "Leads")
{
	if($dc_setting['lead_name'] == "1")
	{
		if($action == "Check_Duplicate_Lead_Name" && !empty($last_name))
		{
			$select_query 	= "select count(*) as count from leads where 1=1 and id <> '".$record_id."' and first_name = '".$first_name."' and last_name = '".$last_name."' and deleted = 0";
			$query_result 	= $GLOBALS['db']->query($select_query);
		    $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
		    $count 			= $query_row['count'];

		    if($count > 0)
		    {
		        echo "This Name Is Already Exists In CRM!";
		        include_once('popup.php');
		        if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
		    else
		    {
		    	$select_query 	= "select count(*) as count from contacts where 1=1 and first_name = '".$first_name."' and last_name = '".$last_name."' and deleted = 0";
				$query_result 	= $GLOBALS['db']->query($select_query);
			    $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
			    $count 			= $query_row['count'];

			    if($count > 0)
			    {
			        echo "This Name Is Already Exists In CRM!";
			        include_once('popup.php');
			        if($dc_setting['duplicate_prevent'] == "1")
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
		            }
		            else
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',false);</script>";	
		            }
			    }
			    else
			    {
			    	echo "No Duplicate Found";	
			    }
		    }
		}
	}

	if($dc_setting['lead_phone_no'] == "1")
	{
		if($action == "Check_Duplicate_Lead_Phone" && !empty($phone_no))
		{
			$phone_no = str_replace(array('(', ')', ' ', '-', '+'), '', $phone_no);
			if($field_id == "phone_work" || $field_id == "phone_mobile" || $field_id == "phone_other")
			{
				$format_number = number_formating($phone_no);
			}
			else
			{
				$format_number = $phone_no;
			}
			$select_query="select count(*) as count from leads where 1=1 and id <> '".$record_id."' and (replace(replace(replace(replace(replace(phone_mobile,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_work,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_other,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_home,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%')";
			$query_result 	= $GLOBALS['db']->query($select_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $office_phone_count 			= $query_row['count'];
	        
	        if($office_phone_count > 0)
	        {
	            echo "This Number Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	if($field_id != "phone_fax")
				{
					$format_number = number_formating($phone_no);
				}
				else
				{
					$format_number = $phone_no;
				}
				$select_query="select count(*) as count from contacts where 1=1 and id <> '".$record_id."' and (replace(replace(replace(replace(replace(phone_mobile,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_work,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_other,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_home,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%')";
				$query_result 	= $GLOBALS['db']->query($select_query);
		        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
		        $office_phone_count 			= $query_row['count'];
		        //echo $select_query;
		        if($office_phone_count > 0)
		        {
		            echo "This Number Is Already Exists!";
		            include_once('popup.php');
		            if($dc_setting['duplicate_prevent'] == "1")
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
		            }
		            else
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',false);</script>";	
		            }
		        }
		        else
			    {
			    	echo "No Duplicate Found";	
			    }
	        }
		}
	}

	/*if($dc_setting['lead_email_id'] == "1")
	{
		if($action == "Check_Duplicate_Lead_Email" && !empty($email))
		{
			$email_query = "select count(*) as emails_count from email_addresses as ea, email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and	rlea.bean_module='Leads' and  rlea.email_address_id=ea.id and rlea.bean_id <> '".$record_id."'";

			$query_result 	= $GLOBALS['db']->query($email_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $emails_count 	= $query_row['emails_count'];
	        
	        if($emails_count > 0)
	        {
	            echo "This Email Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	$email_query = "select count(*) as emails_count from email_addresses as ea, email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and rlea.bean_module='Contacts'and  rlea.email_address_id=ea.id and rlea.bean_id <> '".$record_id."'";

				$query_result 	= $GLOBALS['db']->query($email_query);
		        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
		        $emails_count 	= $query_row['emails_count'];
		        
		        if($emails_count > 0)
		        {
		            echo "This Email Is Already Exists!";
					include_once('popup.php');
					if($dc_setting['duplicate_prevent'] == "1")
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
		            }
		            else
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',false);</script>";	
		            }
		        }
		        else
			    {
			    	echo "No Duplicate Found";	
			    }
	        }
		}
	}*/

	if($dc_setting['lead_document_number'] == "1")
	{
		if($action == "Check_Duplicate_Lead_Document_Number" && !empty($doc_no))
		{
			$select_query 	= "select count(*) as count from leads_cstm as lc LEFT JOIN leads as l ON l.id=lc.id_c where 1=1 and lc.id_c <> '".$record_id."' and lc.numero_documento_c = '".$doc_no."' and l.deleted = 0";
			$query_result 	= $GLOBALS['db']->query($select_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $doc_count 		= $query_row['count'];
	        
	        if($doc_count > 0)
	        {
	            echo "This Document Number Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	echo "No Duplicate Found";
	        }
		}
	}
}

if($module == "Contacts")
{
	if($dc_setting['contact_name'] == "1")
	{
		if($action == "Check_Duplicate_Contact_Name" && !empty($last_name))
		{
			$select_query 	= "select count(*) as count from leads where 1=1 and id <> '".$record_id."' and first_name = '".$first_name."' and last_name = '".$last_name."' and deleted = 0";
			$query_result 	= $GLOBALS['db']->query($select_query);
		    $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
		    $count 			= $query_row['count'];

		    if($count > 0)
		    {
		        echo "This Name Is Already Exists In CRM!";
		        include_once('popup.php');
		        if($dc_setting['duplicate_prevent'] == "1")
            	{
            		echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
            	}
		    }
		    else
		    {
		    	$select_query 	= "select count(*) as count from contacts where 1=1 and id <> '".$record_id."' and first_name = '".$first_name."' and last_name = '".$last_name."' and deleted = 0";
				$query_result 	= $GLOBALS['db']->query($select_query);
			    $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
			    $count 			= $query_row['count'];

			    if($count > 0)
			    {
			        echo "This Name Is Already Exists In CRM!";
			        include_once('popup.php');
			        if($dc_setting['duplicate_prevent'] == "1")
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
		            }
		            else
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',false);</script>";	
		            }
			    }
			    else
			    {
			    	echo "No Duplicate Found";	
			    }
		    }
		}
	}

	if($dc_setting['contact_phone_no'] == "1")
	{
		if($action == "Check_Duplicate_Contact_Phone" && !empty($phone_no))
		{
			$phone_no = str_replace(array('(', ')', ' ', '-', '+'), '', $phone_no);
			if($field_id == "phone_work" || $field_id == "phone_mobile" || $field_id == "phone_other")
			{
				$format_number = number_formating($phone_no);
			}
			else
			{
				$format_number = $phone_no;
			}
			$select_query="select count(*) as count from leads where 1=1 and id <> '".$record_id."' and (replace(replace(replace(replace(replace(phone_mobile,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_work,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_other,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_home,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%')";
			$query_result 	= $GLOBALS['db']->query($select_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $office_phone_count 			= $query_row['count'];
	        
	        if($office_phone_count > 0)
	        {
	            echo "This Number Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
           	 	{
            		echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
            	}
	        }
	        else
	        {
	        	if($field_id != "phone_fax")
				{
					$format_number = number_formating($phone_no);
				}
				else
				{
					$format_number = $phone_no;
				}
				$select_query="select count(*) as count from contacts where 1=1 and id <> '".$record_id."' and (replace(replace(replace(replace(replace(phone_mobile,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_work,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_other,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_home,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%' or replace(replace(replace(replace(replace(phone_fax,' ',''),'-',''),'(',''),')',''),'+','') like '%".$format_number."%')";
				$query_result 	= $GLOBALS['db']->query($select_query);
		        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
		        $office_phone_count 			= $query_row['count'];
		        //echo $select_query;
		        if($office_phone_count > 0)
		        {
		            echo "This Number Is Already Exists!";
		            include_once('popup.php');
		            if($dc_setting['duplicate_prevent'] == "1")
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
		            }
		            else
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',false);</script>";	
		            }
		        }
		        else
			    {
			    	echo "No Duplicate Found";	
			    }
        	}
		}
	}

	/*if($dc_setting['contact_email_id'] == "1")
	{
		if($action == "Check_Duplicate_Contact_Email" && !empty($email))
		{
			$email_query = "select count(*) as emails_count from email_addresses as ea, email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and	rlea.bean_module='Leads' and  rlea.email_address_id=ea.id and rlea.bean_id <> '".$record_id."'";

			$query_result 	= $GLOBALS['db']->query($email_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $emails_count 	= $query_row['emails_count'];
	        
	        if($emails_count > 0)
	        {
	            echo "This Email Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
            	{
            		echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
            	}
	        }
	        else
	        {
	        	$email_query = "select count(*) as emails_count from email_addresses as ea, email_addr_bean_rel as rlea where ea.email_address = '".$email."' and ea.deleted=0 and rlea.deleted=0 and rlea.bean_module='Contacts'and  rlea.email_address_id=ea.id and rlea.bean_id <> '".$record_id."'";

				$query_result 	= $GLOBALS['db']->query($email_query);
		        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
		        $emails_count 	= $query_row['emails_count'];
		        
		        if($emails_count > 0)
		        {
		            echo "This Email Is Already Exists!";
					include_once('popup.php');
					if($dc_setting['duplicate_prevent'] == "1")
					{
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
		            }
		            else
		            {
		            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',false);</script>";	
		            }
		        }
		        else
			    {
			    	echo "No Duplicate Found";	
			    }
	        }
		}
	}*/

	if($dc_setting['contact_document_number'] == "1")
	{
		if($action == "Check_Duplicate_Contact_Document_Number" && !empty($doc_no))
		{
			$select_query 	= "select count(*) as count from contacts_cstm as cc LEFT JOIN contacts as c ON c.id=cc.id_c where 1=1 and cc.id_c <> '".$record_id."' and cc.numero_documento_c = '".$doc_no."' and c.deleted = 0";
			$query_result 	= $GLOBALS['db']->query($select_query);
	        $query_row 		= $GLOBALS['db']->fetchByAssoc($query_result);
	        $doc_count 			= $query_row['count'];
	        
	        if($doc_count > 0)
	        {
	            echo "This Document Number Is Already Exists!";
	            include_once('popup.php');
	            if($dc_setting['duplicate_prevent'] == "1")
	            {
	            	echo "<script type=\"text/javascript\">$(\"[id=SAVE_HEADER]\").attr('disabled',true);</script>";
	            }
	        }
	        else
	        {
	        	echo "No Duplicate Found";
	        }
		}
	}
}


function number_formating($phone_no)
{
	$number = substr($phone_no, -10);			
	if($number!='')
	{			
		return trim($number);
	}
	else
	{
		return trim($phone_no);
	}
}

?>
