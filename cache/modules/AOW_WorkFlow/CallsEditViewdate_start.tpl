
    
<table border="0" cellpadding="0" cellspacing="0" class="dateTime">
<tr valign="middle">
<td nowrap>
<input autocomplete="off" type="text" id="aow_actions_param0value7_date" class="datetimecombo_date" value="{$fields[$fields.date_start.name].value}" size="11" maxlength="10" title='' tabindex="1" onblur="combo_aow_actions_param0value7.update();" onchange="combo_aow_actions_param0value7.update(); "    >
{capture assign="other_attributes"}alt="{$APP.LBL_ENTER_DATE}"  border="0" id="aow_actions_param0value7_trigger"{/capture}
{sugar_getimage name="jscalendar" ext=".gif" other_attributes="$other_attributes"}&nbsp;
</td>
<td nowrap>
<div id="aow_actions_param0value7_time_section" class="datetimecombo_time_section"></div>
</td>
</tr>
</table>
<input type="hidden" class="DateTimeCombo" id="aow_actions_param0value7" name="aow_actions_param0value7" value="{$fields[$fields.date_start.name].value}">
<script type="text/javascript" src="{sugar_getjspath file="include/SugarFields/Fields/Datetimecombo/Datetimecombo.js"}"></script>
<script type="text/javascript">
var combo_aow_actions_param0value7 = new Datetimecombo("{$fields[$fields.date_start.name].value}", "aow_actions_param0value7", "{$TIME_FORMAT}", "1", '', false, true);
//Render the remaining widget fields
text = combo_aow_actions_param0value7.html('');
document.getElementById('aow_actions_param0value7_time_section').innerHTML = '<span style="top:-6px;"'+text+'</span>';

//Call eval on the update function to handle updates to calendar picker object
eval(combo_aow_actions_param0value7.jsscript(''));

//bug 47718: this causes too many addToValidates to be called, resulting in the error messages being displayed multiple times
//    removing it here to mirror the Datetime SugarField, where the validation is not added at this level
//addToValidate('{$form_name}',"aow_actions_param0value7_date",'date',false,"aow_actions_param0value7");
addToValidateBinaryDependency('{$form_name}',"aow_actions_param0value7_hours", 'alpha', false, "{$APP.ERR_MISSING_REQUIRED_FIELDS} {$APP.LBL_HOURS}" ,"aow_actions_param0value7_date");
addToValidateBinaryDependency('{$form_name}', "aow_actions_param0value7_minutes", 'alpha', false, "{$APP.ERR_MISSING_REQUIRED_FIELDS} {$APP.LBL_MINUTES}" ,"aow_actions_param0value7_date");
addToValidateBinaryDependency('{$form_name}', "aow_actions_param0value7_meridiem", 'alpha', false, "{$APP.ERR_MISSING_REQUIRED_FIELDS} {$APP.LBL_MERIDIEM}","aow_actions_param0value7_date");

YAHOO.util.Event.onDOMReady(function()
{ldelim}

	Calendar.setup ({ldelim}
	onClose : update_aow_actions_param0value7,
	inputField : "aow_actions_param0value7_date",
    form : "",
	ifFormat : "{$CALENDAR_FORMAT}",
	daFormat : "{$CALENDAR_FORMAT}",
	button : "aow_actions_param0value7_trigger",
	singleClick : true,
	step : 1,
	weekNumbers: false,
        startWeekday: {$CALENDAR_FDOW|default:'0'},
	comboObject: combo_aow_actions_param0value7
	{rdelim});

	//Call update for first time to round hours and minute values
	combo_aow_actions_param0value7.update(false);

{rdelim}); 
</script>