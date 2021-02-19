<?php /* Smarty version 2.6.31, created on 2019-08-01 10:16:26
         compiled from cache/include/InlineEditing/LeadsEditViewnumero_documento_c.tpl */ ?>

<?php if (strlen ( $this->_tpl_vars['fields']['numero_documento_c']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['numero_documento_c']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['numero_documento_c']['value']); ?>
<?php endif; ?>  
<input type='text' name='<?php echo $this->_tpl_vars['fields']['numero_documento_c']['name']; ?>
' 
    id='<?php echo $this->_tpl_vars['fields']['numero_documento_c']['name']; ?>
' size='30' 
    maxlength='15' 
    value='<?php echo $this->_tpl_vars['value']; ?>
' title=''   tabindex='1'      >