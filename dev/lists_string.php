<?php

include "../custom/include/language/es_ES.lang.php";
$list_string = $GLOBALS['app_list_strings'];

//echo "<pre>";var_dump($list_string); die();

$key = isset($_GET["name_list"]) ? $_GET["name_list"] : "NONE";

$response = array(
	"data" => array(
		"attributes" => array_key_exists($key, $list_string) ? $list_string[$key] : NULL,
		"type" => $key,
		"relations" => array_keys($list_string)
	)
);


header('Content-Type: application/json');
echo json_encode($response, JSON_PRETTY_PRINT);

?>