<?php /* Smarty version 2.6.31, created on 2021-02-22 19:18:00
         compiled from cache/modules/AOW_WorkFlow/CallsEditViewduration_hours.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_number_format', 'cache/modules/AOW_WorkFlow/CallsEditViewduration_hours.tpl', 8, false),)), $this); ?>

<?php if (strlen ( $this->_tpl_vars['fields']['duration_hours']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['duration_hours']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['duration_hours']['value']); ?>
<?php endif; ?>  
<input type='text' name='<?php echo $this->_tpl_vars['fields']['duration_hours']['name']; ?>
' 
id='<?php echo $this->_tpl_vars['fields']['duration_hours']['name']; ?>
' style="max-width:170px;" size='30' maxlength='2' value='<?php echo smarty_function_sugar_number_format(array('precision' => 0,'var' => $this->_tpl_vars['value']), $this);?>
' title='' tabindex='1'    >