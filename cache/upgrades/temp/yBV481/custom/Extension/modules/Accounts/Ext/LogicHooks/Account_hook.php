<?php

if (!isset($hook_array) || !is_array($hook_array))
{
    $hook_array = array();
}
if (!isset($hook_array['after_ui_frame']) || !is_array($hook_array['after_ui_frame']))
{
    $hook_array['after_ui_frame'] = array();
}
$hook_array['after_ui_frame'][] = Array(10, 'Loading JS','custom/modules/Accounts/LogicHook/Prevent_Account.php', 'Prevent_AccountClass', 'PreventAccountJSFunction');