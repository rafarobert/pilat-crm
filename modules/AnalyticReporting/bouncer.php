<?php
session_start();
if(isset($_POST["image"])){
    $random = rand(1,1e7);
    $_SESSION["its_analyticreporting_img".$random] = $_POST["image"];
    echo $random;
}elseif(isset($_GET["img"])){
    header("Content-Type:image/png");
    header("Content-Disposition: attachment; filename=chart.png");
    header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
    $img = base64_decode(str_replace("data:image/png;base64,","",$_SESSION["its_analyticreporting_img".$_GET["img"]]));
    echo $img;
    unset($_SESSION["its_analyticreporting_img".$_GET["img"]]);
}

exit();