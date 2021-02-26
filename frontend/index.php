<?php
/**
 * Created by PhpStorm.
 * User: rafaelgutierrezgaspar
 * Date: 2021-01-15
 * Time: 22:00
 */

$cookie_http_referer = "httpReferer";
$httpReferer = $_SERVER['HTTP_REFERER'];

if (strstr($httpReferer,'?')) {
    list($root,$request) = explode('?', $httpReferer);
} else {
    $root = $httpReferer;
    $request = '';
}

$cookie_http_referer_value = isset($root) ? $root : '';

if (!isset($_COOKIE[$cookie_http_referer])) {
    setcookie($cookie_http_referer, $cookie_http_referer_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}

$cookie_user_loggedin = "userLogguedIn";
$cookie_user_loggedin_value = isset($_SESSION['authenticated_user_id']) ? $_SESSION['authenticated_user_id'] : '';
setcookie($cookie_user_loggedin, $cookie_user_loggedin_value, time() + (86400 * 30), "/"); // 86400 = 1 day

if (
    $_REQUEST['module'] == 'Home' ||
    $_REQUEST['module'] == 'Opportunities' ||
    $_REQUEST['module'] == 'Accounts' ||
    $_REQUEST['module'] == 'Contacts' ||
    $_REQUEST['module'] == 'AOS_Quotes' ||
    $_REQUEST['module'] == 'Leads'
) {
  echo '<script type="text/javascript" src="frontend/index.js"></script>';
}
