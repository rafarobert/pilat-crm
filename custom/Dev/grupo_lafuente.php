<?php

$id     = $_REQUEST['id'];
$method = strtolower($_SERVER['REQUEST_METHOD']);
$action = $_REQUEST['action'] . "_" . $method;

if (!function_exists('remove_invisible_characters')) {
    function remove_invisible_characters($str, $url_encoded = TRUE) {
        $non_displayables = array();
        if ($url_encoded) {
            $non_displayables[] = '/%0[0-8bcef]/i'; // url encoded 00-08, 11, 12, 14, 15
            $non_displayables[] = '/%1[0-9a-f]/i'; // url encoded 16-31
            $non_displayables[] = '/%7f/i'; // url encoded 127
        }
        $non_displayables[] = '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/S'; // 00-08, 11, 12, 14-31, 127
        do {
            $str = preg_replace($non_displayables, '', $str, -1, $count);
        } while ($count);

        return $str;
    }
}

if (!function_exists("_escape_str")) {
    function _escape_str($str) {
        return str_replace("'", "''", remove_invisible_characters($str, FALSE));
    }
}
if (!function_exists("escape_str")) {
    function escape_str($str, $like = FALSE) {
        $_like_escape_chr = '!';
        if (is_array($str)) {
            foreach ($str as $key => $val) {
                $str[$key] = escape_str($val, $like);
            }
            return $str;
        }

        $str = _escape_str($str);
        if ($like === TRUE) {
            return str_replace(
                array($_like_escape_chr, '%', '_'),
                array($_like_escape_chr . $_like_escape_chr, $_like_escape_chr . '%', $_like_escape_chr . '_'),
                $str
            );
        }

        return $str;
    }
}
if (!function_exists("query_scape")) {
    function query_scape($str) {
        if (is_array($str)) {
            $str = array_map(array(&$this, 'escape'), $str);
            return $str;
        } elseif (is_string($str) OR (is_object($str) && method_exists($str, '__toString'))) {
            if (preg_match("/:NO_SCAPE/i", $str)) {
                return str_replace(":NO_SCAPE", "", $str);
            }
            return "'" . escape_str($str) . "'";
        } elseif (is_bool($str)) {
            return ($str === FALSE) ? 0 : 1;
        } elseif ($str === NULL) {
            return 'NULL';
        }
        return $str;
    }
}
if (!function_exists("compile_binds")) {
    function compile_binds($sql, $binds = array()) {
        $bind_marker = "?";
        if (empty($bind_marker) OR strpos($sql, $bind_marker) === FALSE) {
            return $sql;
        } elseif (!is_array($binds)) {
            $binds      = array($binds);
            $bind_count = 1;
        } else {
            $binds      = array_values($binds);
            $bind_count = count($binds);
        }
        $ml = strlen($bind_marker);
        if ($c = preg_match_all("/'[^']*'|\"[^\"]*\"/i", $sql, $matches)) {
            $c = preg_match_all('/' . preg_quote($bind_marker, '/') . '/i',
                str_replace($matches[0],
                    str_replace($bind_marker, str_repeat(' ', $ml), $matches[0]),
                    $sql, $c),
                $matches, PREG_OFFSET_CAPTURE);
            if ($bind_count !== $c) {
                return $sql;
            }
        } elseif (($c = preg_match_all('/' . preg_quote($bind_marker, '/') . '/i', $sql, $matches, PREG_OFFSET_CAPTURE)) !== $bind_count) {
            return $sql;
        }
        do {
            $c--;
            $escaped_value = query_scape($binds[$c]);
            if (is_array($escaped_value)) {
                $escaped_value = '(' . implode(',', $escaped_value) . ')';
            }
            $sql = substr_replace($sql, $escaped_value, $matches[0][$c][1], $ml);
        } while ($c !== 0);
        return $sql;
    }
}

if (!function_exists("number_formating")) {
    function number_formating($phone_no) {
        $number = substr($phone_no, -10);
        if ($number != '') {
            return trim($number);
        } else {
            return trim($phone_no);
        }
    }
}

class My_Gel_EntryPoint {
    private $data     = NULL;
    private $last_log = NULL;
    private $error    = FALSE;

    public function is_error() {
        return $this->error;
    }

    public function get_last_log() {
        return $this->last_log;
    }

    public function set_data($data = NULL) {
        $this->data = $data;
    }

    public function log($input = NULL) {
        $print          = "Mensaje custom: " . $input;
        $this->last_log = $print;
        if (isset($GLOBALS['log'])) {
            $GLOBALS['log']->debug($print);
        }
    }
    public function validate_lead_post($id = NULL) {
        if (!isset($this->data->{"phone_mobile"})) {
            $this->error = TRUE;
            $this->log("Parametro 'phone_mobile' no encontrado");
            return;
        }
        $phone_mobile = $this->data->{"phone_mobile"};
        if(!$phone_mobile) {
            $this->error = TRUE;
            $this->log("Parametro 'phone_mobile' es requerido");
            return;
        }

        $re = "/^\+(?:[0-9] ?){6,22}[0-9]$/";    
        preg_match_all($re, $phone_mobile, $is_phone);

        if(count($is_phone[0]) <= 0){
            $this->error = TRUE;
            $this->log("Formato o Código de pais incorrecto.");
            return;
        }

        $count_part = explode(" ", $phone_mobile);

        if(count($count_part) <> 2){
            $this->error = TRUE;
            $this->log("Código de pais requerido.");
            return;
        }

        $phone_no = str_replace(array('(', ')', ' ', '-', '+'), '', $phone_mobile);
        $format_number = number_formating($phone_no);

        $add_sql = "";
        $binds   = array();
        if($id != NULL){
            $add_sql = @compile_binds("AND c.id NOT IN (?)", $id);
        }
        $binds[] = "%" . $format_number . "%";
        $sql     = @compile_binds("SELECT COUNT(*) AS crow FROM leads c WHERE c.deleted = 0 {$add_sql} AND (c.phone_mobile IS NOT NULL AND TRIM(c.phone_mobile) NOT IN ('NULL','null', '')) AND REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.phone_mobile,' ',''),'-',''),'(',''),')',''),'+','') like ? ", $binds);

        $query = $GLOBALS['db']->query($sql);
        if (!$query) {
            $this->error = TRUE;
            $this->log("Error query");
            return;
        }
        $row = $GLOBALS['db']->fetchByAssoc($query);
        if (!$row) {
            $this->error = TRUE;
            $this->log("Resultado no encontrado en: " . $sql);
            return;
        }
        $res = (float) $row["crow"];
        return $res > 0 ? "INVALID" : "VALID";
    }
}

$class = new My_Gel_EntryPoint();
if (method_exists($class, $action)) {
    $response = NULL;
    if (in_array($method, array("post", "put", "patch"))) {
        $class->log("Accediendo a metodo " . $action);
        $class->set_data(json_decode(file_get_contents("php://input")));
        $response = $class->$action($id);
    } elseif (in_array($method, array("get", "delete"))) {
        $response = $class->$action($id);
    }
    if ($class->is_error()) {
        header('HTTP/1.1 400 Bad Request');
        $response = $class->get_last_log() ? $class->get_last_log() : "Error in action '{$action}'";
    }
    if (!$response || !is_object($response) || !is_array($response)) {
        $response = array(
            "status" => "success",
            "data"   => $response,
        );
    }
    $json = getJSONobj();
    $class->log("Response action " . $action);
    header('Content-Type: application/json');
    echo $json->encode($response);
} else {
    header('HTTP/1.1 400 Bad Request');
    $response = "method is required.";
    $json     = getJSONobj();
    header('Content-Type: application/json');
    echo $json->encode(
        array(
            "status"  => "fail",
            "message" => $response,
        )
    );
}