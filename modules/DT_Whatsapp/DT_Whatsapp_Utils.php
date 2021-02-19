<?php

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

require_once("modules/Administration/Administration.php");

class dt_whatsapp_utils {

    function getrec_history($sl_mod,$sl_mod_id)
    {
     
    $whatsapp_history_header = '<div id="history-list" class="panel-body panel-collapse collapse in" style="overflow: auto; height: 200px;width: 100%; display: block;">';

    $whatsapp_history_inner = '';

    $sql_whatsapp_history = "SELECT name,date_entered,description,status,direction  FROM calls WHERE parent_id LIKE '".$sl_mod_id."' and (name LIKE '%Inbound_Whatsapp%' or name LIKE '%Outbound_Whatsapp%') and deleted=0 ORDER BY date_entered ASC";
    $result_wh = $GLOBALS['db']->query($sql_whatsapp_history);
    while ($row_wh = $GLOBALS['db']->fetchByAssoc($result_wh)) {

        $direction = $row_wh['direction'];

        if($direction == "Inbound" && !empty($row_wh['description']))
        {

        $whatsapp_history_inner .= '<div class="shoutbox-list-left" id="list-24" style="float: left;"><span class="shoutbox-list-time">'.$row_wh['date_entered'].'</span><br><span class="shoutbox-list-nick"><span class="users-list tome extra-class-left" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">'.$row_wh['description'].'</span></div>';
        }
        if($direction == "Outbound" && !empty($row_wh['description']))
        {
        $whatsapp_history_inner .= '<div class="shoutbox-list-right" id="list-24" style="float: right;"><span class="shoutbox-list-time">'.$row_wh['date_entered'].'</span><br><span class="shoutbox-list-nick"><span class="isay extra-class-right" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">'.$row_wh['description'].'</span></div>';
        }

    }

    $whatsapp_history_footer ='<div>';

    return $whatsapp_history_header.$whatsapp_history_inner.$whatsapp_history_footer;

    }


    function getmobilenumbers($modulefrom, $records) {

        $sending_rec_id = explode(",", $records);

        $listwithnumber = array();
        $mobile_list = "";
        for ($iwhatsappc = 0; $iwhatsappc < count($sending_rec_id); $iwhatsappc++) {
            $phone_mobile = $this->getnumberfromid($modulefrom, $sending_rec_id[$iwhatsappc]);
            $listwithnumber[$phone_mobile] = $sending_rec_id[$iwhatsappc];
            if((count($sending_rec_id) -1 ) == $iwhatsappc)
            {
            $mobile_list.=$phone_mobile;    
            }else
            {
            $mobile_list.=$phone_mobile . ",";
            }
        }
        $listwithnumber['whatsapp_rec_list'] = $mobile_list;
        return $listwithnumber;
    }


    public function getnumberfromid($module, $rec_id) {

        $Bean = BeanFactory::newBean($module);
        $SearchSMS = $Bean->retrieve_by_string_fields(array('id' => $rec_id));
        $foundmobilenumb = "";
        if ($module == "Accounts") {
            $acc_val = array("phone_office", "phone_alternate", "phone_fax");
            foreach ($acc_val as $fieldssearch_id) {
                $fieldssearch = trim($fieldssearch_id);
                $foundmob = $SearchSMS->$fieldssearch;
                if (!empty($foundmob)) {
                    $foundmobilenumb = $foundmob;
                    break;
                }
            }
        }

        if ($module == "Contacts") {
            $getarr_val = array("phone_mobile", "phone_other", "phone_work", "phone_fax", "phone_home");
            foreach ($getarr_val as $fieldssearch_id) {
                $fieldssearch = trim($fieldssearch_id);
                $foundmob = $SearchSMS->$fieldssearch;
                if (!empty($foundmob)) {
                    $foundmobilenumb = $foundmob;
                    break;
                }
            }
        }

        if ($module == "Leads") {
            $getarr_val = array("phone_mobile", "phone_other", "phone_work", "phone_fax", "phone_home");
            foreach ($getarr_val as $fieldssearch_id) {
                $fieldssearch = trim($fieldssearch_id);
                $foundmob = $SearchSMS->$fieldssearch;
                if (!empty($foundmob)) {
                    $foundmobilenumb = $foundmob;
                    break;
                }
            }
        }

        return $foundmobilenumb;
    }

    function send_whatsapp_message($mobile_numbers, $template_name, $message, $sl_mod, $sl_mod_id) {

        $whatsapp_admin = new Administration();
        $settings_whatsapp = $whatsapp_admin->retrieveSettings('whatsapp_config');
        $sitio = $_SERVER['SERVER_NAME'];        
        $json = base64_decode($settings_whatsapp->settings['whatsapp_config_waboxapp_mobile_number']);
        $data = json_decode(stripslashes($json),true);
        $whatsapp_config_waboxapp_mobile_number = '';       
        for ($i = 0;$i < count($data); $i++){          
            if($data[$i]['sitio'] == $sitio){
                $whatsapp_config_waboxapp_mobile_number = $data[$i]['numero'];
            }
        }

        $mobile_numbers_array = explode(",", $mobile_numbers);
        for ($ce = 0; $ce < count($mobile_numbers_array); $ce++) {

            $message_id = create_guid();
            $message = htmlspecialchars_decode($message, ENT_QUOTES);
            $message_p = rawurlencode($message);
            $whatsapp_config_waboxapp_token = $settings_whatsapp->settings['whatsapp_config_waboxapp_token'];
            $final_url = "https://www.waboxapp.com/api/send/chat?token=".$whatsapp_config_waboxapp_token."&uid=".$whatsapp_config_waboxapp_mobile_number."&to=".trim($mobile_numbers_array[$ce])."&custom_uid=".$message_id."&text=".$message_p;
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $final_url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $result = curl_exec($ch);
            curl_close($ch);
            $result_whatsapp = json_decode($result, true);            
            if ($result_whatsapp['success'] == "true") {
                $call_status = "Sent";
            } else {
                $call_status = "Failure";
            }
            //Create the whatsapp record
            return $this->create_whatsapp($template_name, $message, $call_status, $sl_mod, $sl_mod_id,$message_id);
        }
    }


    function create_whatsapp($template_name, $message, $call_status, $sl_mod, $sl_mod_id,$message_id="") {
        global $timedate;
        global $current_user;
        $create_bean = BeanFactory::newBean("Calls");
        $create_bean->date_start = $timedate->getInstance()->nowDb();
        $create_bean->date_end = $timedate->getInstance()->nowDb();
        if (trim($template_name) == "No WhatsApp Template Found" || trim($template_name) == "--Not Selected--" || trim($template_name) == "Template Not Selected") {
            $create_bean->name = "Outbound_Whatsapp"; 
        } else {
            $create_bean->name = "Outbound_Whatsapp-" . $template_name;
        }
        $create_bean->description = $message;
        $create_bean->status = $call_status;
        $create_bean->direction = "Outbound";
        $create_bean->message_id_c = $message_id;

        $create_bean->set_created_by = false;
        $create_bean->update_date_entered = false;
        $create_bean->update_date_modified = false;
        $create_bean->update_modified_by = false;

        $create_bean->assigned_user_id = $current_user->id;
        $create_bean->modified_user_id = $current_user->id;
        $create_bean->created_by = $current_user->id;

        $create_bean->parent_type = $sl_mod;
        $create_bean->parent_id = $sl_mod_id;
        $create_id = $create_bean->save();

        $RelCall = BeanFactory::getBean('Calls', $create_id);
        if ($sl_mod == "Contacts") {
            $RelCall->load_relationship('contacts');
            $RelCall->contacts->add($sl_mod_id);
        }
        if ($sl_mod == "Leads") {
            $RelCall->load_relationship('leads');
            $RelCall->leads->add($sl_mod_id);
        }

        //Creating Relationships
        return $create_id;
    }

    

}
