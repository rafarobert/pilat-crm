<?php /* Smarty version 2.6.31, created on 2021-02-22 18:56:36
         compiled from cache/modules/AOW_WorkFlow/CallsEditViewparent_id.tpl */ ?>

<?php if (strlen ( $this->_tpl_vars['fields']['parent_id']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['parent_id']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['parent_id']['value']); ?>
<?php endif; ?>  
<input type='text' name='<?php echo $this->_tpl_vars['fields']['parent_id']['name']; ?>
' 
    id='<?php echo $this->_tpl_vars['fields']['parent_id']['name']; ?>
' size='30' 
     
    value='<?php echo $this->_tpl_vars['value']; ?>
' title=''   tabindex='1'      >