<?php /* Smarty version 2.6.31, created on 2020-11-17 16:05:12
         compiled from cache/modules/AOW_WorkFlow/ContactsEditViewlast_name.tpl */ ?>

<?php if (strlen ( $this->_tpl_vars['fields']['last_name']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['last_name']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['last_name']['value']); ?>
<?php endif; ?>  
<input type='text' name='<?php echo $this->_tpl_vars['fields']['last_name']['name']; ?>
' 
    id='<?php echo $this->_tpl_vars['fields']['last_name']['name']; ?>
' size='30' 
    maxlength='100' 
    value='<?php echo $this->_tpl_vars['value']; ?>
' title=''   tabindex='1'      >