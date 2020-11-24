<?php
ini_set("display_errors",1);
error_reporting(E_ALL & ~E_STRICT & ~E_WARNING & ~E_NOTICE & ~E_DEPRECATED);

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}


require_once('modules/DT_Whatsapp/license/WhatsAppOutfittersLicense.php');
require_once('modules/DT_Whatsapp/DT_Whatsapp_Utils.php');
require_once("modules/Administration/Administration.php");

$dt_whatsapp_utils = new dt_whatsapp_utils();
$whatsapp_admin = new Administration();
$settings_whatsapp = $whatsapp_admin->retrieveSettings('whatsapp_config');


if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "whatsapp_history")) {

     $sl_mod = trim($_REQUEST['sl_mod']);
     $sl_mod_id = trim($_REQUEST['sl_mod_id']);

    $whatsapp_history_inner = '';

    $sql_whatsapp_history = "SELECT name,date_entered,description,status,direction  FROM calls WHERE parent_id LIKE '".$sl_mod_id."' and (name LIKE '%Inbound_Whatsapp%' or name LIKE '%Outbound_Whatsapp%') and deleted=0 ORDER BY date_entered DESC";
    $result_wh = $GLOBALS['db']->query($sql_whatsapp_history);
    $records = "not";
    while ($row_wh = $GLOBALS['db']->fetchByAssoc($result_wh)) {

        $direction = $row_wh['direction'];

        if($direction == "Inbound" && !empty($row_wh['description']))
        {

        $whatsapp_history_inner .= '<div class="shoutbox-list-left" id="list-24" style="float: left;"><span class="shoutbox-list-time">'.$row_wh['date_entered'].'</span><br><span class="shoutbox-list-nick"><span class="users-list tome extra-class-left" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">'.$row_wh['description'].'</span></div>';
        }
        if($direction == "Outbound" && !empty($row_wh['description']))
        {
            $sts_red = "";
            if($row_wh['status'] == "Failure")
            {
                $sts_red = "<img src='modules/DT_Whatsapp/images/failed.png'/>";
            }
            
        $whatsapp_history_inner .= '<div class="shoutbox-list-right" id="list-24" style="float: right;"><span class="shoutbox-list-time">'.$row_wh['date_entered'].'</span><br><span class="shoutbox-list-nick"><span class="isay extra-class-right" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">'.$row_wh['description'].$sts_red.'</span></div>';
        }
        $records = "yes";

    }

    $whatsapp_history_footer ='<div>';

    if($records == "not"){
         $whatsapp_history_header = '<div id="history-list" class="panel-body panel-collapse collapse in" style="overflow: auto; height: 20px;width: 100%; display: block;">';
         $whatsapp_history_inner .= '<div>&nbsp;&nbsp;No History Found</div>';
    }else
    {
         $whatsapp_history_header = '<div id="history-list" class="panel-body panel-collapse collapse in" style="overflow: auto; height: 200px;width: 100%; display: block;">';
    }

    echo $whatsapp_history_header.$whatsapp_history_inner.$whatsapp_history_footer;

    //echo '<div class="shoutbox-list" id="list-24" style="float: right;"><span class="shoutbox-list-time">9:27:07 PM</span><br><span class="shoutbox-list-nick"><span class="isay extra-class-right" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">sd</span></div>';

}

if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "whatsapp_history_refresh")) {

     $sl_mod = trim($_REQUEST['sl_mod']);
     $sl_mod_id = trim($_REQUEST['sl_mod_id']);

    $whatsapp_history_inner = '';

    $sql_whatsapp_history = "SELECT name,date_entered,description,status,direction  FROM calls WHERE parent_id LIKE '".$sl_mod_id."' and (name LIKE '%Inbound_Whatsapp%' or name LIKE '%Outbound_Whatsapp%') and deleted=0 ORDER BY date_entered DESC";
    $result_wh = $GLOBALS['db']->query($sql_whatsapp_history);
    $records = "not";
    while ($row_wh = $GLOBALS['db']->fetchByAssoc($result_wh)) {

        $direction = $row_wh['direction'];

        if($direction == "Inbound" && !empty($row_wh['description']))
        {

        $whatsapp_history_inner .= '<div class="shoutbox-list-left" id="list-24" style="float: left;"><span class="shoutbox-list-time">'.$row_wh['date_entered'].'</span><br><span class="shoutbox-list-nick"><span class="users-list tome extra-class-left" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">'.$row_wh['description'].'</span></div>';
        }
        if($direction == "Outbound" && !empty($row_wh['description']))
        {
            $sts_red = "";
            if($row_wh['status'] == "Failure")
            {
                $sts_red = "<img src='modules/DT_Whatsapp/images/failed.png'/>";
            }
            
        $whatsapp_history_inner .= '<div class="shoutbox-list-right" id="list-24" style="float: right;"><span class="shoutbox-list-time">'.$row_wh['date_entered'].'</span><br><span class="shoutbox-list-nick"><span class="isay extra-class-right" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">'.$row_wh['description'].$sts_red.'</span></div>';
        }
        $records = "yes";

    }

    $whatsapp_history_footer ='<div>';

    if($records == "not"){
         $whatsapp_history_header = '<div id="history-list" class="panel-body panel-collapse collapse in" style="overflow: auto; height: 20px;width: 100%; display: block;">';
         $whatsapp_history_inner .= '<div>&nbsp;&nbsp;No History Found</div>';
    }else
    {
         $whatsapp_history_header = '<div id="history-list" class="panel-body panel-collapse collapse in" style="overflow: auto; height: 200px;width: 100%; display: block;">';
    }

    echo $whatsapp_history_inner;

    //echo '<div class="shoutbox-list" id="list-24" style="float: right;"><span class="shoutbox-list-time">9:27:07 PM</span><br><span class="shoutbox-list-nick"><span class="isay extra-class-right" style="margin:-4px;" usr_id="admin"></span></span><span class="shoutbox-list-message" style="margin-left: 2px;">sd</span></div>';

}


if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "get_whatsappbulk_body")) {

    $modulefrom = trim($_REQUEST['modulefrom']);
    $recid = trim($_REQUEST['recid']);
    $gotres = $dt_whatsapp_utils->getmobilenumbers($modulefrom, $recid);
    $mobilenumbers = $gotres['whatsapp_rec_list'];

    $recid_res = serialize($gotres);

    $sql_et = "SELECT id,name FROM email_templates and type='whatsapp' and sms_module_c='$modulefrom' and deleted=0";
    $result_et = $GLOBALS['db']->query($sql_et);
    $total_recs = $result_et->num_rows;

    if (!empty($modulefrom) && $total_recs >= 1) {
        $optionlist = "<option value='NS'>--Not Selected--</option>";

        while ($row_et = $GLOBALS['db']->fetchByAssoc($result_et)) {
            //Use $row['id'] to grab the id fields value
            $id = $row_et['id'];
            $etname = $row_et['name'];
            $optionlist.="<option value='$id'>$etname</option>";
        }
    } else {
        $optionlist = "<option>No WhatsApp Template Found</option>";
    }

     // $validate = WhatsAppOutfittersLicense::isValid('DT_Whatsapp');
     //   if ($validate == 1) {

    echo "<div class='panel-body panel-collapse collapse in' id='detailpanel_-1'>"
    . "<div class='tab-content'><div class='row edit-view-row'>"
    . "<font color='red' style='text-align: center;'><span id='errr_msg' style='display:none'><b>Empty message cant be send.</b></span></font>"
    . "<div id='loading_whatsapp' style='display:none'><div style='display: flex;justify-content: center;'><image src='modules/DT_Whatsapp/images/whatsapp_loading.gif'/></div></div>"
    . "<div class='col-xs-12 col-sm-6 edit-view-row-item'>"
    . "<div class='col-xs-12 col-sm-4 label'>"
    . "Send to Numbers:</div><br>"
    . "<div class='col-xs-12 col-sm-8 edit-view-field ' type='varchar'>"
    . "<textarea id='whatsapp_bulkmobile_numbers' rows='2' cols='90'>" . $mobilenumbers . "</textarea>"
    . "</div>"
    . "</div>"
    . "<div class='col-xs-12 col-sm-6 edit-view-row-item'>"
    . "<div class='col-xs-12 col-sm-4 label'>Select Template:</div><br>"
    . "<div class='col-xs-12 col-sm-8 edit-view-field ' type='varchar'>"
    . "<select style='width:90%' name='whatsapp_bulktemplate_id' id='whatsapp_bulktemplate_id'>$optionlist</select>"
    . "</div></div>"
    . "<div class='col-xs-12 col-sm-6 edit-view-row-item'>"
    . "<div class='col-xs-12 col-sm-4 label'>"
    . "Message Description:</div><br>"
    . "<div class='col-xs-12 col-sm-8 edit-view-field ' type='varchar'>"
    . "<textarea id='whatsapp_bulk_description' rows='3' cols='90'></textarea>"
    . "</div>"
    . "<input type='hidden' name='sl_mod' id='whatsapp_bulk_sl_mod' value='$modulefrom'/>"
    . "<input type='hidden' name='sl_mod_id' id='whatsapp_bulk_sl_mod_id' value='$recid_res'/>"
    . "</div>"
    . "</div></div></div>";
    // }else
    // {
    //     echo "DT_Whatsapp addon is not active.";
    // }
}

if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "get_testwhatsapp_body")) {
    
        $result_s = "";
        $post = array(
            "From" => "whatsapp:".trim($settings_whatsapp->settings['whatsapp_config_whatsapp_from_number']),
            "To" => "whatsapp:+" . trim($settings_whatsapp->settings['whatsapp_config_whatsapp_to']),
            "Body" => 'Testing Whatsapp'
        );
        $ch = curl_init();
        $tl_url = "https://api.twilio.com/2010-04-01/Accounts/" . trim($settings_whatsapp->settings['whatsapp_config_whatsapp_sid']) . "/Messages.json";
        curl_setopt($ch, CURLOPT_URL, $tl_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_USERPWD, trim($settings_whatsapp->settings['whatsapp_config_whatsapp_sid']) . ":" . $settings_whatsapp->settings['whatsapp_config_whatsapp_auth_token']);
        $result = curl_exec($ch);
        curl_close($ch);

        $result_whats = json_decode($result, true);
        $GLOBALS['log']->fatal(print_r($result_whats,true));
        if (!empty($result_whats['sid'])) {
            $result_s = "<font color='green'>Message Successfully Sent</font>";
        } else {
            $result_s = print_r($result_whats, true);
        }

        if (empty($result_s)) {
            $result_s = "Please enter details of Whatsapp Twilio Details";
        }

        echo "<div class='panel-body panel-collapse collapse in' id='detailpanel_-1'>"
        . "<div class='tab-content'><div class='row edit-view-row'>"
        . "<div class='col-xs-12 col-sm-6 edit-view-row-item' style='float: left;overflow-y: auto;height: 100%;'>"
        . "<div class='col-xs-12 col-sm-4 label'>"
        . "Testing Whatsapp Results:- <br> <pre>"
        . $result_s
        . "</pre></div>"
        . "</div>"
        . "</div></div></div>";
}

if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "get_whatsapp_body")) {

    $mobile = trim($_REQUEST['mobile']);
    $modulefrom = trim($_REQUEST['modulefrom']);
    $recid = trim($_REQUEST['recid']);
    /*if(strlen($mobile)=8){
        $mobile = '591'.$mobile;
    }*/


    $sql_et = "SELECT id,name FROM email_templates inner join email_templates_cstm on email_templates.id = email_templates_cstm.id_c where type='whatsapp' and sms_module_c='$modulefrom' and deleted=0";
    $result_et = $GLOBALS['db']->query($sql_et);
    $total_recs = $result_et->num_rows;

    if (!empty($modulefrom) && $total_recs >= 1) {
         $optionlist = "<option value='NS'>--Not Selected--</option>";

         while ($row_et = $GLOBALS['db']->fetchByAssoc($result_et)) {
             //Use $row['id'] to grab the id fields value
             $id = $row_et['id'];
             $etname = $row_et['name'];
             $optionlist.="<option value='$id'>$etname</option>";
         }
     } else {
        $optionlist = "<option>No WhatsApp Template Found</option>";
    }

    // $history_recs = $dt_whatsapp_utils->getrec_history($modulefrom,$recid);
    //    $validate = WhatsAppOutfittersLicense::isValid('DT_Whatsapp');
    //    if ($validate == 1) {

    echo "<div class='modal-header' style='background:#225485;padding:5px'>"
."<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>"
."<h4 class='modal-title' style='color:#fff'><b>Nuevo WhatsApp</b></h4>"
."</div>"

."<div class='modal-body' id='whatsapp_dashboardDialog' style='display:block'>"
."<div class='panel-body panel-collapse collapse in' id='detailpanel_-1'>"
."<div class='tab-content'>"
."<div class='row edit-view-row modal-body' style='margin-bottom:-30px;margin-top:-10px'>"
."<font color='red' style='text-align: center;'><span id='errr_msg' style='display:none'><b>El mensaje es vacío y no se puede enviar.</b></span></font>"
."<div id='loading_whatsapp' style='display:none'><div style='display: flex;justify-content: center;'><image src='modules/DT_Whatsapp/images/whatsapp_loading.gif'/></div></div>"
. "<div class='col-xs-12 col-sm-6 edit-view-row-item'>"
. "<div class='col-xs-12 col-sm-4'>"
. "Enviar a los números:</div>"
. "<div class='col-xs-12 col-sm-8 edit-view-field ' type='varchar'>"
. "<textarea id='whatsapp_mobile_numbers' rows='1' class='form-control'>591" . $mobile . "</textarea>"
. "</div></div></div></div></div>"
. "<div style='padding:1.0em 1.4em 0.3em 2.3em'>Historial:</div>"
. "<div class='modal-body' id='whatsapp_history' style='display:block'></div>"
. "<div class='tab-content'><div class='row edit-view-row modal-body' style='margin-bottom:-25px'>"
. "<div class='col-xs-12 col-sm-6 edit-view-row-item'>"
. "<div class='col-xs-12 col-sm-4 '>Seleccione una plantilla:</div>"
. "<div class='col-xs-12 col-sm-8 edit-view-field ' type='varchar'>"
. "<select style='width:90%' name='whatsapp_template_id' id='whatsapp_template_id'>$optionlist</select>"
. "</div></div>"
. "<div class='col-xs-12 col-sm-6 edit-view-row-item'>"
. "<div class='col-xs-12 col-sm-3'>Mensaje :</div>"
. "<div class='col-xs-12 col-sm-9 edit-view-field ' type='varchar'>"
. "<textarea id='whatsapp_description' rows='1' class='form-control'></textarea>"
. "</div>"
. "<input type='hidden' name='whatsapp_sl_mod' id='whatsapp_sl_mod' value='$modulefrom'/>"
. "<input type='hidden' name='whatsapp_sl_mod_id' id='whatsapp_sl_mod_id' value='$recid'/>"
. "</div></div></div></div>"
. "<div class='modal-footer' style='background-color:#F5F5F5'>"
. "<button type='button' class='button' id='rec_history' hidden>Historial</button> &nbsp;"
. "<button type='button' class='button' id='refresh_history' hidden>Actualizar</button> &nbsp;"
. "<button type='button' class='button' id='mod_can' data-dismiss='modal'>Cerrar</button> &nbsp;"
. "<button type='submit' id='submitwhatsapp' class='button'>Enviar</button></div>";
    // }else
    // {
    //     echo "DT_Whatsapp addon is not active.";
    // }
}


if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "whatsapp_fetch")) {

    $et_id = trim($_REQUEST['et_id']);
    $sl_mod = trim($_REQUEST['sl_mod']);
    $sl_mod_id = trim($_REQUEST['sl_mod_id']);

    $template = new EmailTemplate();
    $template->retrieve_by_string_fields(array('id' => $et_id, 'type' => 'whatsapp'));

    $module_et = BeanFactory::getBean($sl_mod, $sl_mod_id);

    //Parse Body HTML
    echo $template->body = $template->parse_template_bean($template->body, $module_et->module_dir, $module_et);
}

if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "bulkwhatsapp_fetch")) {

    $et_id = trim($_REQUEST['et_id']);

    $template = new EmailTemplate();
    $template->retrieve_by_string_fields(array('id' => $et_id, 'type' => 'whatsapp'));
    echo $template->body;
}


if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "send_whatsapp")) {

    global $sugar_config;
    $mobile_numbers = $_REQUEST['mobile_numbers'];
    $template_name = trim($_REQUEST['template_name']);
    $message = $_REQUEST['body'];
    $sl_mod = trim($_REQUEST['sl_mod']);
    $sl_mod_id = trim($_REQUEST['sl_mod_id']);

    echo $dt_whatsapp_utils->send_whatsapp_message($mobile_numbers, $template_name, $message, $sl_mod, $sl_mod_id);

    // print_r(explode(",",$mobile_numbers));
}


if (isset($_REQUEST['action']) && trim($_REQUEST['action'] === "bulksend_whatsapp")) {
    global $sugar_config;
    $template_id = $_REQUEST['template_id'];
    $template_name = $_REQUEST['template_name'];
    $mobile_numbers = $_REQUEST['mobile_numbers'];
    $sl_mod = trim($_REQUEST['sl_mod']);

    $numbers_array2 = htmlspecialchars_decode(trim($_REQUEST['sl_mod_id']), ENT_QUOTES);
    $numbers_array = unserialize($numbers_array2);
    $body = trim($_REQUEST['body']);

    $mobile_numbers_arr = explode(",", $mobile_numbers);

    for ($bm = 0; $bm < count($mobile_numbers_arr); $bm++) {
        $mobile_numberss = $mobile_numbers_arr[$bm];
        $mob_record = $numbers_array[$mobile_numbers_arr[$bm]];

        //$GLOBALS['log']->fatal($template_id);

        if ($template_id == "No WhatsApp Template Found" || $template_id == "NS") {
            $template_name = "Template Not Selected";
            $message = $body;

        } else {
            $template = new EmailTemplate();
            $template->retrieve_by_string_fields(array('id' => $template_id, 'type' => 'whatsapp'));

            $module_et = BeanFactory::getBean($sl_mod, $mob_record);

            //Parse Body HTML
            $message = $template->body = $template->parse_template_bean($template->body, $module_et->module_dir, $module_et);
        }
        
        echo $dt_whatsapp_utils->send_whatsapp_message($mobile_numberss, $template_name, $message, $sl_mod, $mob_record);
    }
}


