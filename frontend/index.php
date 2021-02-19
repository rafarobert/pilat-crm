<?php
/**
 * Created by PhpStorm.
 * User: rafaelgutierrezgaspar
 * Date: 2021-01-15
 * Time: 22:00
 */

$cookie_name = "userLogguedIn";
$cookie_value = isset($_SESSION['authenticated_user_id']) ? $_SESSION['authenticated_user_id'] : '';
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
if ($_REQUEST['module'] == 'Opportunities' || $_REQUEST['module'] == 'Leads' || $_REQUEST['module'] == 'Accounts' || $_REQUEST['module'] == 'Contacts') {
  echo '<script type="text/javascript" src="frontend/index.js"></script>';
}

