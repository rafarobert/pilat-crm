<?php /* Smarty version 2.6.31, created on 2021-02-22 19:16:22
         compiled from cache/modules/AOW_WorkFlow/CallsEditViewdescription.tpl */ ?>

<?php if (empty ( $this->_tpl_vars['fields']['description']['value'] )): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['description']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['description']['value']); ?>
<?php endif; ?>  




<textarea  id='<?php echo $this->_tpl_vars['fields']['description']['name']; ?>
' name='<?php echo $this->_tpl_vars['fields']['description']['name']; ?>
'
rows="2" 
cols="32" 
title='' class='form-control' tabindex="1" 
 ><?php echo $this->_tpl_vars['value']; ?>
</textarea>

