<?php /* Smarty version 2.6.31, created on 2019-08-01 10:13:41
         compiled from custom/include/SugarFields/Fields/Phone/DetailView.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugarvar', 'custom/include/SugarFields/Fields/Phone/DetailView.tpl', 16, false),array('function', 'sugarvar_connector', 'custom/include/SugarFields/Fields/Phone/DetailView.tpl', 25, false),)), $this); ?>
{*
/*********************************************************************************
 * By installing or using this file, you are confirming on behalf of the entity
 * subscribed to the SugarCRM Inc. product ("Company") that Company is bound by
 * the SugarCRM Inc. Master Subscription Agreement (“MSA”), which is viewable at:
 * http://www.sugarcrm.com/master-subscription-agreement
 *
 * If Company is not bound by the MSA, then by installing or using this file
 * you are agreeing unconditionally that Company will be bound by the MSA and
 * certifying that you have authority to bind Company accordingly.
 *
 * Copyright (C) 2004-2013 SugarCRM Inc.  All rights reserved.
 ********************************************************************************/

*}
{if !empty(<?php echo smarty_function_sugarvar(array('key' => 'value','string' => true), $this);?>
)}
{assign var="phone_value" value=<?php echo smarty_function_sugarvar(array('key' => 'value','string' => true), $this);?>
 }
 
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="<?php if (! empty ( $this->_tpl_vars['vardef']['validate_usa_format'] )): ?>1<?php else: ?>0<?php endif; ?>"}

<?php if (! empty ( $this->_tpl_vars['displayParams']['enableConnectors'] )): ?>
<?php echo smarty_function_sugarvar_connector(array('view' => 'DetailView'), $this);?>

<?php endif; ?>
{/if}
