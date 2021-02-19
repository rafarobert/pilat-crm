<?php

class DT_Whatsapp_Class {

    function DT_Whatsapp_Func($event, $arguments) {

        //echo $_REQUEST['module'];
        $mapping = array(
            'modules' =>
            array("Calendar", "AOR_Reports", "ModuleBuilder", "Home", "MergeRecords", "Emails", "Timesheets", "AOW_WorkFlow"),
            'actions' =>
            array("view_GanttChart", "EmailUIAjax", "getEditFieldHTML", "getValidationRules", "QuickEdit", "DynamicAction", "modulelistmenu", "favorites", "wizard", "SaveActivity"),
        );

        if ((!in_array($_REQUEST['action'], $mapping['actions'])) && (!in_array($_REQUEST['module'], $mapping['modules'])) && empty($_REQUEST['to_pdf']) && empty($_REQUEST['to_csv'])) {
            $ce_load_js = <<<MAKE
<script type="text/javascript" language="javascript" src="modules/DT_Whatsapp/DT_Whatsapp.js">
</script>
<link rel="stylesheet" href="modules/DT_Whatsapp/whatsapp.css">
MAKE;
            echo $ce_load_js;
        }

        if ($_REQUEST['module'] == "Contacts" && $_REQUEST['action'] == "index") {
            $lv_load_js = <<<MAKELV
                    <script type="text/javascript">
             $("#actionLinkTop ul").append('<li><a href="javascript:void(0);" onclick="sendbulkwhatsapp(\'Contacts\');">Send Bulk WhatsApp</a></li>');
                </script>
MAKELV;
            echo $lv_load_js;
        }

        if ($_REQUEST['module'] == "Accounts" && $_REQUEST['action'] == "index") {
            $lv_load_js = <<<MAKELV
                    <script type="text/javascript">
             $("#actionLinkTop ul").append('<li><a href="javascript:void(0);" onclick="sendbulkwhatsapp(\'Accounts\');">Send Bulk WhatsApp</a></li>');
                </script>
MAKELV;
            echo $lv_load_js;
        }

        if ($_REQUEST['module'] == "Leads" && $_REQUEST['action'] == "index") {
            $lv_load_js = <<<MAKELV
                    <script type="text/javascript">
             $("#actionLinkTop ul").append('<li><a href="javascript:void(0);" onclick="sendbulkwhatsapp(\'Leads\');">Send Bulk WhatsApp</a></li>');
                </script>
MAKELV;
            echo $lv_load_js;
        }
    }

}
