<?php /* Smarty version 2.6.31, created on 2021-02-22 19:32:43
         compiled from cache/modules/AOW_WorkFlow/CallsEditViewllamada_fecha_c.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_getimage', 'cache/modules/AOW_WorkFlow/CallsEditViewllamada_fecha_c.tpl', 8, false),array('function', 'sugar_getjspath', 'cache/modules/AOW_WorkFlow/CallsEditViewllamada_fecha_c.tpl', 16, false),array('modifier', 'default', 'cache/modules/AOW_WorkFlow/CallsEditViewllamada_fecha_c.tpl', 46, false),)), $this); ?>

    
<table border="0" cellpadding="0" cellspacing="0" class="dateTime">
<tr valign="middle">
<td nowrap>
<input autocomplete="off" type="text" id="aow_conditions_value1_date" class="datetimecombo_date" value="<?php echo $this->_tpl_vars['fields'][$this->_tpl_vars['fields']['llamada_fecha_c']['name']]['value']; ?>
" size="11" maxlength="10" title='' tabindex="1" onblur="combo_aow_conditions_value1.update();" onchange="combo_aow_conditions_value1.update(); "    >
<?php ob_start(); ?>alt="<?php echo $this->_tpl_vars['APP']['LBL_ENTER_DATE']; ?>
"  border="0" id="aow_conditions_value1_trigger"<?php $this->_smarty_vars['capture']['default'] = ob_get_contents();  $this->assign('other_attributes', ob_get_contents());ob_end_clean(); ?>
<?php echo smarty_function_sugar_getimage(array('name' => 'jscalendar','ext' => ".gif",'other_attributes' => ($this->_tpl_vars['other_attributes'])), $this);?>
&nbsp;
</td>
<td nowrap>
<div id="aow_conditions_value1_time_section" class="datetimecombo_time_section"></div>
</td>
</tr>
</table>
<input type="hidden" class="DateTimeCombo" id="aow_conditions_value1" name="aow_conditions_value1" value="<?php echo $this->_tpl_vars['fields'][$this->_tpl_vars['fields']['llamada_fecha_c']['name']]['value']; ?>
">
<script type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file' => "include/SugarFields/Fields/Datetimecombo/Datetimecombo.js"), $this);?>
"></script>
<script type="text/javascript">
var combo_aow_conditions_value1 = new Datetimecombo("<?php echo $this->_tpl_vars['fields'][$this->_tpl_vars['fields']['llamada_fecha_c']['name']]['value']; ?>
", "aow_conditions_value1", "<?php echo $this->_tpl_vars['TIME_FORMAT']; ?>
", "1", '', false, true);
//Render the remaining widget fields
text = combo_aow_conditions_value1.html('');
document.getElementById('aow_conditions_value1_time_section').innerHTML = '<span style="top:-6px;"'+text+'</span>';

//Call eval on the update function to handle updates to calendar picker object
eval(combo_aow_conditions_value1.jsscript(''));

//bug 47718: this causes too many addToValidates to be called, resulting in the error messages being displayed multiple times
//    removing it here to mirror the Datetime SugarField, where the validation is not added at this level
//addToValidate('<?php echo $this->_tpl_vars['form_name']; ?>
',"aow_conditions_value1_date",'date',false,"aow_conditions_value1");
addToValidateBinaryDependency('<?php echo $this->_tpl_vars['form_name']; ?>
',"aow_conditions_value1_hours", 'alpha', false, "<?php echo $this->_tpl_vars['APP']['ERR_MISSING_REQUIRED_FIELDS']; ?>
 <?php echo $this->_tpl_vars['APP']['LBL_HOURS']; ?>
" ,"aow_conditions_value1_date");
addToValidateBinaryDependency('<?php echo $this->_tpl_vars['form_name']; ?>
', "aow_conditions_value1_minutes", 'alpha', false, "<?php echo $this->_tpl_vars['APP']['ERR_MISSING_REQUIRED_FIELDS']; ?>
 <?php echo $this->_tpl_vars['APP']['LBL_MINUTES']; ?>
" ,"aow_conditions_value1_date");
addToValidateBinaryDependency('<?php echo $this->_tpl_vars['form_name']; ?>
', "aow_conditions_value1_meridiem", 'alpha', false, "<?php echo $this->_tpl_vars['APP']['ERR_MISSING_REQUIRED_FIELDS']; ?>
 <?php echo $this->_tpl_vars['APP']['LBL_MERIDIEM']; ?>
","aow_conditions_value1_date");

YAHOO.util.Event.onDOMReady(function()
{

	Calendar.setup ({
	onClose : update_aow_conditions_value1,
	inputField : "aow_conditions_value1_date",
    form : "",
	ifFormat : "<?php echo $this->_tpl_vars['CALENDAR_FORMAT']; ?>
",
	daFormat : "<?php echo $this->_tpl_vars['CALENDAR_FORMAT']; ?>
",
	button : "aow_conditions_value1_trigger",
	singleClick : true,
	step : 1,
	weekNumbers: false,
        startWeekday: <?php echo ((is_array($_tmp=@$this->_tpl_vars['CALENDAR_FDOW'])) ? $this->_run_mod_handler('default', true, $_tmp, '0') : smarty_modifier_default($_tmp, '0')); ?>
,
	comboObject: combo_aow_conditions_value1
	});

	//Call update for first time to round hours and minute values
	combo_aow_conditions_value1.update(false);

}); 
</script>