<?php
/**
 * Created by PhpStorm.
 * User: rafaelgutierrezgaspar
 * Date: 2021-01-15
 * Time: 22:00
 */

$cookie_http_referer = "httpReferer";
$httpReferer = $_SERVER['HTTP_REFERER'];

list($root,$request) = explode('?', $httpReferer);
$cookie_http_referer_value = isset($root) ? $root : '';
if (!isset($_COOKIE[$cookie_http_referer])) {
    setcookie($cookie_http_referer, $cookie_http_referer_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}

$cookie_user_loggedin = "userLogguedIn";
$cookie_user_loggedin_value = isset($_SESSION['authenticated_user_id']) ? $_SESSION['authenticated_user_id'] : '';
setcookie($cookie_user_loggedin, $cookie_user_loggedin_value, time() + (86400 * 30), "/"); // 86400 = 1 day

if ($_REQUEST['module'] != 'ModuleBuilder') {
  //echo '<script type="text/javascript" src="frontend/index.js"></script>';
}

