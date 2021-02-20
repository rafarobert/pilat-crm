<?php /* Smarty version 2.6.31, created on 2021-02-20 06:32:58
         compiled from custom/include/SugarFields/Fields/Phone/ListView.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_fetch', 'custom/include/SugarFields/Fields/Phone/ListView.tpl', 16, false),array('function', 'sugar_phone', 'custom/include/SugarFields/Fields/Phone/ListView.tpl', 21, false),)), $this); ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_fetch(array('object' => $this->_tpl_vars['parentFieldArray'],'key' => $this->_tpl_vars['col']), $this);?>
<?php $this->_smarty_vars['capture']['getPhone'] = ob_get_contents();  $this->assign('phone', ob_get_contents());ob_end_clean(); ?>

<?php if ($this->_tpl_vars['phone'] != ''): ?>
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('<?php echo $this->_tpl_vars['phone']; ?>
','<?php echo $_REQUEST['module']; ?>
','<?php echo $this->_tpl_vars['parentFieldArray']['ID']; ?>
');">
<?php endif; ?>
<?php echo smarty_function_sugar_phone(array('value' => $this->_tpl_vars['phone'],'usa_format' => $this->_tpl_vars['usa_format']), $this);?>
