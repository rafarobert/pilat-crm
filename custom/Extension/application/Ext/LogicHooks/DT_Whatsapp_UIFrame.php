<?php

if (!isset($hook_array) || !is_array($hook_array))
{
    $hook_array = array();
}
if (!isset($hook_array['after_ui_frame']) || !is_array($hook_array['after_ui_frame']))
{
    $hook_array['after_ui_frame'] = array();
}

$hook_array['after_ui_frame'][] = Array(100, 'DT Whatsapp Connector', 'modules/DT_Whatsapp/DT_Whatsapp_UIFrame.php', 'DT_Whatsapp_Class', 'DT_Whatsapp_Func');