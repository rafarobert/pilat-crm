<?php

array_push($job_strings, 'whatsapp_status');
function whatsapp_status()
{
        
require_once("modules/Administration/Administration.php");
    
$whatsapp_admin = new Administration();
$settings_whatsapp = $whatsapp_admin->retrieveSettings('whatsapp_config');    
    
$ch = curl_init();
$tl_url = "http://panel.apiwha.com/get_messages.php?apikey=".$settings_whatsapp."&type=OUT&markaspulled=1&getnotpulledonly=1";
curl_setopt($ch, CURLOPT_URL, $tl_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
$result = curl_exec($ch);
curl_close($ch);

$json_data = json_decode($result,true);

    foreach ($json_data as $key => $value) {
    
    	$process_date = $value['process_date'];
    	$failed_date = $value['failed_date'];
    	$custom_data = $value['custom_data'];
    
    	if(!empty($custom_data)){
    
    		if(empty($process_date))
    		{
    			$msg_Query = "SELECT id_c  FROM calls_cstm WHERE message_id_c LIKE '".$custom_data."'";
    			$Result_msg = $GLOBALS['db']->query($msg_Query);
                $Row_Res = $GLOBALS['db']->fetchByAssoc($Result_msg);
                $MSGID = $Row_Res['id_c'];
    
                if(!empty($MSGID))
                {
                	$WMB = BeanFactory::getBean("Calls",$MSGID);
                	$WMB->status = "Pending";
                	$WMB->save();
                	
                }
    
    		}
    
    		if(!empty($failed_date))
    		{
    
    			$msg_Query = "SELECT id_c  FROM calls_cstm WHERE message_id_c LIKE '".$custom_data."'";
    			$Result_msg = $GLOBALS['db']->query($msg_Query);
                $Row_Res = $GLOBALS['db']->fetchByAssoc($Result_msg);
                $MSGID = $Row_Res['id_c'];
    
                if(!empty($MSGID))
                {
                	$WMB = BeanFactory::getBean("Calls",$MSGID);
                	$WMB->status = "Failure";
                	$WMB->save();
                	
                }
    
    
    		}
    	}
    }
    return true;
}