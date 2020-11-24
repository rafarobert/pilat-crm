<?php

class Config{
    static private $configRootFolder = 'modules/AnalyticReporting/config';
    static private $allowedTypes = array(
        'reportBuilder' => array(
            'common' => 'common',
            'manyToMany' => 'manyToMany',
        ),
        'common' => array(
            'common' => 'common'
        )
    );
    static public function load($type, $name){
        if(isset(Config::$allowedTypes[$type][$name])){
            $pathToConfig = Config::$configRootFolder."/".$type."/".$name;
            $pathToConfigCustom = $pathToConfig."Custom.php";
            $pathToConfigDefault = $pathToConfig."Default.php";
            if (file_exists($pathToConfigCustom)){
                return include $pathToConfigCustom;
            }elseif(file_exists($pathToConfigDefault)){
                return include $pathToConfigDefault;
            }
        }
        return false;
    }
    static public function save($type, $name, $config){
        if(isset($allowedTypes[$type][$name])){
            $pathToConfig = Config::$configRootFolder."/".$type."/".$name;
            $pathToConfigCustom = $pathToConfig."Custom.php";
            file_put_contents($pathToConfigCustom, "<?"."php return " . var_export($config, true) . ";");
            return true;
        }
        return false;
    }
}