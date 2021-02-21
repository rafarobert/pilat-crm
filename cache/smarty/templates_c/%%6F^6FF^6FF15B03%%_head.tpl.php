<?php /* Smarty version 2.6.31, created on 2021-02-21 14:57:40
         compiled from themes/sp_theme/tpls/_head.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_getimagepath', 'themes/sp_theme/tpls/_head.tpl', 67, false),)), $this); ?>
<!DOCTYPE html>
<html <?php echo $this->_tpl_vars['langHeader']; ?>
>
<head>
    <link rel="SHORTCUT ICON" href="<?php echo $this->_tpl_vars['FAVICON_URL']; ?>
">
    <meta http-equiv="Content-Type" content="text/html; charset=<?php echo $this->_tpl_vars['APP']['LBL_CHARSET']; ?>
">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <!-- Bootstrap -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <![endif]-->
    <title><?php echo $this->_tpl_vars['APP']['LBL_BROWSER_TITLE']; ?>
</title>

    <script src="themes/sp_theme/vendor/jquery/dist/jquery.min.js"></script>
    <script src="themes/sp_theme/vendor/jquery-ui/jquery-ui.min.js"></script>
  
    <?php echo $this->_tpl_vars['SUGAR_JS']; ?>
                                                     
     <script src="cache/include/javascript/sugar-project.js"></script>
     <script src="themes/sp_theme/scripts/sugar-project_theme.js"></script>   
    <?php echo '
    <script type="text/javascript">
        <!--
        SUGAR.themes.theme_name      = \''; ?>
<?php echo $this->_tpl_vars['THEME']; ?>
<?php echo '\';
        SUGAR.themes.theme_ie6compat = \''; ?>
<?php echo $this->_tpl_vars['THEME_IE6COMPAT']; ?>
<?php echo '\';
        SUGAR.themes.hide_image      = \''; ?>
<?php echo smarty_function_sugar_getimagepath(array('file' => "hide.gif"), $this);?>
<?php echo '\';
        SUGAR.themes.show_image      = \''; ?>
<?php echo smarty_function_sugar_getimagepath(array('file' => "show.gif"), $this);?>
<?php echo '\';
        SUGAR.themes.loading_image   = \''; ?>
<?php echo smarty_function_sugar_getimagepath(array('file' => "img_loading.gif"), $this);?>
<?php echo '\';
        SUGAR.themes.allThemes       = eval('; ?>
<?php echo $this->_tpl_vars['allThemes']; ?>
<?php echo ');
        if ( YAHOO.env.ua )
            UA = YAHOO.env.ua;
        -->
    </script>
    '; ?>


<!-- SUGAR END -->  


<!-- SUGAR PROJECT-->  

<link rel="stylesheet" href="include/javascript/qtip/jquery.qtip.min.css" />
<link rel="stylesheet" href="themes/sp_theme/vendor/fontawesome/css/font-awesome.css" />
<link rel="stylesheet" href="themes/sp_theme/vendor/metisMenu/dist/metisMenu.css" />
<link rel="stylesheet" href="themes/sp_theme/vendor/animate.css/animate.css" />
<link rel="stylesheet" href="themes/sp_theme/vendor/bootstrap/dist/css/bootstrap.css" />
<link rel="stylesheet" href="themes/sp_theme/vendor/fooTable/css/footable.core.min.css" />
<link rel="stylesheet" href="themes/sp_theme/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css" />
<link rel="stylesheet" href="themes/sp_theme/fonts/pe-icon-7-stroke/css/helper.css" />

<link rel="stylesheet" type="text/css" href="themes/sp_theme/style/style.css">
<link rel="stylesheet" type="text/css" href="themes/sp_theme/style/static_custom.css">
<link rel="stylesheet" type="text/css" href="themes/sp_theme/style/custom_colors.css">
<link rel="stylesheet" type="text/css" href="themes/sp_theme/style/yui/yui.css">
    <link rel="stylesheet" type="text/css" href="themes/sp_theme/style/custom.css">      
</head>