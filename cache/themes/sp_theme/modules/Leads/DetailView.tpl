

{assign var=preForm value="<table width='100%' border='1' cellspacing='0' cellpadding='0' class='converted_account'><tr><td><table width='100%'><tr><td>"}
{assign var=displayPreform value=false}
{if isset($bean->contact_id) && !empty($bean->contact_id)}
{assign var=displayPreform value=true}
{assign var=preForm value=$preForm|cat:$MOD.LBL_CONVERTED_CONTACT}
{assign var=preForm value=$preForm|cat:"&nbsp;<a href='index.php?module=Contacts&action=DetailView&record="}
{assign var=preForm value=$preForm|cat:$bean->contact_id}
{assign var=preForm value=$preForm|cat:"'>"}
{assign var=preForm value=$preForm|cat:$bean->contact_name}
{assign var=preForm value=$preForm|cat:"</a>"}
{/if}
{assign var=preForm value=$preForm|cat:"</td><td>"}
{if isset($bean->account_id) && !empty($bean->account_id)}
{assign var=displayPreform value=true}
{assign var=preForm value=$preForm|cat:$MOD.LBL_CONVERTED_ACCOUNT}
{assign var=preForm value=$preForm|cat:"&nbsp;<a href='index.php?module=Accounts&action=DetailView&record="}
{assign var=preForm value=$preForm|cat:$bean->account_id}
{assign var=preForm value=$preForm|cat:"'>"}
{assign var=preForm value=$preForm|cat:$bean->account_name}
{assign var=preForm value=$preForm|cat:"</a>"}
{/if}
{assign var=preForm value=$preForm|cat:"</td><td>"}
{if isset($bean->opportunity_id) && !empty($bean->opportunity_id)}
{assign var=displayPreform value=true}
{assign var=preForm value=$preForm|cat:$MOD.LBL_CONVERTED_OPP}
{assign var=preForm value=$preForm|cat:"&nbsp;<a href='index.php?module=Opportunities&action=DetailView&record="}
{assign var=preForm value=$preForm|cat:$bean->opportunity_id}
{assign var=preForm value=$preForm|cat:"'>"}
{assign var=preForm value=$preForm|cat:$bean->opportunity_name}
{assign var=preForm value=$preForm|cat:"</a>"}
{/if}
{assign var=preForm value=$preForm|cat:"</td></tr></table></td></tr></table>"}
{if $displayPreform}
{$preForm}
<br>
{/if}

<script language="javascript">
{literal}
SUGAR.util.doWhen(function(){
    return $("#contentTable").length == 0;
}, SUGAR.themes.actionMenu);
{/literal}
</script>
<div class="hpanel">
<div class="panel-heading">
<table cellpadding="0" cellspacing="0" border="0" width="100%" id="">
<tr>
<td class="buttons" align="left" NOWRAP width="80%">
<div class="actionsContainer">
<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="{$module}">
<input type="hidden" name="record" value="{$fields.id.value}">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="{$offset}">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
</form>
<ul id="detail_header_action_menu" class="clickMenu fancymenu" ><li class="sugar_action_button" >{if $bean->aclAccess("edit")}<input title="{$APP.LBL_EDIT_BUTTON_TITLE}" accessKey="{$APP.LBL_EDIT_BUTTON_KEY}" class="button primary" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Leads'; _form.return_action.value='DetailView'; _form.return_id.value='{$id}'; _form.action.value='EditView';SUGAR.ajaxUI.submitForm(_form);" type="button" name="Edit" id="edit_button" value="{$APP.LBL_EDIT_BUTTON_LABEL}">{/if} <ul id class="subnav" ><li>{if $bean->aclAccess("edit")}<input title="{$APP.LBL_DUPLICATE_BUTTON_TITLE}" accessKey="{$APP.LBL_DUPLICATE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Leads'; _form.return_action.value='DetailView'; _form.isDuplicate.value=true; _form.action.value='EditView'; _form.return_id.value='{$id}';SUGAR.ajaxUI.submitForm(_form);" type="button" name="Duplicate" value="{$APP.LBL_DUPLICATE_BUTTON_LABEL}" id="duplicate_button">{/if} </li><li>{if $bean->aclAccess("delete")}<input title="{$APP.LBL_DELETE_BUTTON_TITLE}" accessKey="{$APP.LBL_DELETE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Leads'; _form.return_action.value='ListView'; _form.action.value='Delete'; if(confirm('{$APP.NTC_DELETE_CONFIRMATION}')) SUGAR.ajaxUI.submitForm(_form); return false;" type="submit" name="Delete" value="{$APP.LBL_DELETE_BUTTON_LABEL}" id="delete_button">{/if} </li><li>{if $bean->aclAccess("edit") && $bean->aclAccess("delete")}<input title="{$APP.LBL_DUP_MERGE}" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Leads'; _form.return_action.value='DetailView'; _form.return_id.value='{$id}'; _form.action.value='Step1'; _form.module.value='MergeRecords';SUGAR.ajaxUI.submitForm(_form);" type="button" name="Merge" value="{$APP.LBL_DUP_MERGE}" id="merge_duplicate_button">{/if} </li><li><input class="button hidden" id="send_confirm_opt_in_email" title="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Leads'; _form.return_action.value='DetailView'; _form.return_id.value='{$fields.id.value}'; _form.action.value='sendConfirmOptInEmail'; _form.module.value='Leads'; _form.module_tab.value='Leads';_form.submit();" name="send_confirm_opt_in_email" disabled="1" type="button" value="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}"/></li><li>{if $bean->aclAccess("edit") && !$DISABLE_CONVERT_ACTION}<input title="{$MOD.LBL_CONVERTLEAD_TITLE}" accessKey="{$MOD.LBL_CONVERTLEAD_BUTTON_KEY}" class="button" onClick="document.location='index.php?module=Leads&action=ConvertLead&record={$fields.id.value}'" name="convert" id="convert_lead_button" type="button" value="{$MOD.LBL_CONVERTLEAD}"/>{/if}</li><li><input title="{$APP.LBL_MANAGE_SUBSCRIPTIONS}" class="button" id="manage_subscriptions_button" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Leads'; _form.return_action.value='DetailView';_form.return_id.value='{$fields.id.value}'; _form.action.value='Subscriptions'; _form.module.value='Campaigns'; _form.module_tab.value='Leads';_form.submit();" name="{$APP.LBL_MANAGE_SUBSCRIPTIONS}" type="button" value="{$APP.LBL_MANAGE_SUBSCRIPTIONS}"/></li><li><input type="button" class="button" onClick="showPopup();" value="{$APP.LBL_PRINT_AS_PDF}"/></li><li>{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Leads", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}</li></ul></li></ul>
</div>
</td>
<td align="right" width="20%">{$ADMIN_EDIT}
{$PAGINATION}
</td>
</tr>
</table> 
</div>
<div class="panel-body detailbody">
{sugar_include include=$includes}
<div class="panel-body" >
<div class="panel-body">    
{counter name="panelFieldCount" start=0 print=false assign="panelFieldCount"}
<h4>
{sugar_translate label='LBL_CONTACT_INFORMATION' module='Leads'}   
</h4>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ACCOUNT_NAME' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="account_name"  >

{if !$fields.account_name.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.account_name.value) <= 0}
{assign var="value" value=$fields.account_name.default_value }
{else}
{assign var="value" value=$fields.account_name.value }
{/if} 
<span class="sugar_field" id="{$fields.account_name.name}">{$fields.account_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_LAST_NAME' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="last_name"  >

{if !$fields.last_name.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.last_name.value) <= 0}
{assign var="value" value=$fields.last_name.default_value }
{else}
{assign var="value" value=$fields.last_name.value }
{/if} 
<span class="sugar_field" id="{$fields.last_name.name}">{$fields.last_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NUMERO_DOCUMENTO' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="numero_documento_c"  >

{if !$fields.numero_documento_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.numero_documento_c.value) <= 0}
{assign var="value" value=$fields.numero_documento_c.default_value }
{else}
{assign var="value" value=$fields.numero_documento_c.value }
{/if} 
<span class="sugar_field" id="{$fields.numero_documento_c.name}">{$fields.numero_documento_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_EXTENSION_DOCUMENTO' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="enum" field="extension_documento_c"  >

{if !$fields.extension_documento_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.extension_documento_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.extension_documento_c.name}" value="{ $fields.extension_documento_c.options }">
{ $fields.extension_documento_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.extension_documento_c.name}" value="{ $fields.extension_documento_c.value }">
{ $fields.extension_documento_c.options[$fields.extension_documento_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="text" field="description"  >

{if !$fields.description.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.description.name|escape:'html'|url2html|nl2br}">{$fields.description.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">
</div>

<div class="clear"></div>
</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_MOBILE_PHONE' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="phone" field="phone_mobile"  class="phone">

{if !$fields.phone_mobile.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_mobile.value)}
{assign var="phone_value" value=$fields.phone_mobile.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TIENE_WHATSAPP_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="bool" field="tiene_whatsapp_c"  >

{if !$fields.tiene_whatsapp_c.hidden}
{counter name="panelFieldCount" print=false}

{if strval($fields.tiene_whatsapp_c.value) == "1" || strval($fields.tiene_whatsapp_c.value) == "yes" || strval($fields.tiene_whatsapp_c.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.tiene_whatsapp_c.name}" id="{$fields.tiene_whatsapp_c.name}" value="$fields.tiene_whatsapp_c.value" disabled="true" {$checked}>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_PHONE_MOBIL_2_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="phone" field="phone_mobil_2_c"  class="phone">

{if !$fields.phone_mobil_2_c.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_mobil_2_c.value)}
{assign var="phone_value" value=$fields.phone_mobil_2_c.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_PHONE_MOBIL_3_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="phone" field="phone_mobil_3_c"  class="phone">

{if !$fields.phone_mobil_3_c.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_mobil_3_c.value)}
{assign var="phone_value" value=$fields.phone_mobil_3_c.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_EMAIL_ADDRESS' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field inlineEdit" type="varchar" field="email1" colspan='3' >

{if !$fields.email1.hidden}
{counter name="panelFieldCount" print=false}
<span id='email1_span'>
{$fields.email1.value}
</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_PAIS_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="pais_c"  >

{if !$fields.pais_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.pais_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.pais_c.name}" value="{ $fields.pais_c.options }">
{ $fields.pais_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.pais_c.name}" value="{ $fields.pais_c.value }">
{ $fields.pais_c.options[$fields.pais_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DEPARTAMENTO_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="departamento_c"  >

{if !$fields.departamento_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.departamento_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.departamento_c.name}" value="{ $fields.departamento_c.options }">
{ $fields.departamento_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.departamento_c.name}" value="{ $fields.departamento_c.value }">
{ $fields.departamento_c.options[$fields.departamento_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_CIUDAD_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="ciudad_c"  >

{if !$fields.ciudad_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.ciudad_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.ciudad_c.name}" value="{ $fields.ciudad_c.options }">
{ $fields.ciudad_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.ciudad_c.name}" value="{ $fields.ciudad_c.value }">
{ $fields.ciudad_c.options[$fields.ciudad_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_JJWG_MAPS_ADDRESS' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="jjwg_maps_address_c"  >

{if !$fields.jjwg_maps_address_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.jjwg_maps_address_c.value) <= 0}
{assign var="value" value=$fields.jjwg_maps_address_c.default_value }
{else}
{assign var="value" value=$fields.jjwg_maps_address_c.value }
{/if} 
<span class="sugar_field" id="{$fields.jjwg_maps_address_c.name}">{$fields.jjwg_maps_address_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_BIRTHDATE' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="date" field="birthdate"  >

{if !$fields.birthdate.hidden}
{counter name="panelFieldCount" print=false}


{if strlen($fields.birthdate.value) <= 0}
{assign var="value" value=$fields.birthdate.default_value }
{else}
{assign var="value" value=$fields.birthdate.value }
{/if}
<span class="sugar_field" id="{$fields.birthdate.name}">{$value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_SEXO_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="sexo_c"  >

{if !$fields.sexo_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.sexo_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.sexo_c.name}" value="{ $fields.sexo_c.options }">
{ $fields.sexo_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.sexo_c.name}" value="{ $fields.sexo_c.value }">
{ $fields.sexo_c.options[$fields.sexo_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() {ldelim} initPanel(1, 'expanded'); {rdelim}); </script>
</div>  
{if $panelFieldCount == 0}
<script>document.getElementById("LBL_CONTACT_INFORMATION").style.display='none';</script>
{/if}
<div class="panel-body">    
{counter name="panelFieldCount" start=0 print=false assign="panelFieldCount"}
<h4>
{sugar_translate label='LBL_PANEL_ADVANCED' module='Leads'}   
</h4>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="enum" field="status"  >

{if !$fields.status.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.status.options)}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.options }">
{ $fields.status.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.value }">
{ $fields.status.options[$fields.status.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS_DESCRIPTION' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="text" field="status_description"  >

{if !$fields.status_description.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.status_description.name|escape:'html'|url2html|nl2br}">{$fields.status_description.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_LEAD_SOURCE' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="enum" field="lead_source"  >

{if !$fields.lead_source.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.lead_source.options)}
<input type="hidden" class="sugar_field" id="{$fields.lead_source.name}" value="{ $fields.lead_source.options }">
{ $fields.lead_source.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.lead_source.name}" value="{ $fields.lead_source.value }">
{ $fields.lead_source.options[$fields.lead_source.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_LEAD_SOURCE_DESCRIPTION' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="text" field="lead_source_description"  >

{if !$fields.lead_source_description.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.lead_source_description.name|escape:'html'|url2html|nl2br}">{$fields.lead_source_description.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_RUBRO_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="rubro_c"  >

{if !$fields.rubro_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.rubro_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.rubro_c.name}" value="{ $fields.rubro_c.options }">
{ $fields.rubro_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.rubro_c.name}" value="{ $fields.rubro_c.value }">
{ $fields.rubro_c.options[$fields.rubro_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ACTIVIDAD_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="text" field="actividad_c"  >

{if !$fields.actividad_c.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.actividad_c.name|escape:'html'|url2html|nl2br}">{$fields.actividad_c.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TIPO_LEAD_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="tipo_lead_c"  >

{if !$fields.tipo_lead_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.tipo_lead_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.tipo_lead_c.name}" value="{ $fields.tipo_lead_c.options }">
{ $fields.tipo_lead_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.tipo_lead_c.name}" value="{ $fields.tipo_lead_c.value }">
{ $fields.tipo_lead_c.options[$fields.tipo_lead_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_FECHA_VALIDEX_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="date" field="fecha_validex_c"  >

{if !$fields.fecha_validex_c.hidden}
{counter name="panelFieldCount" print=false}


{if strlen($fields.fecha_validex_c.value) <= 0}
{assign var="value" value=$fields.fecha_validex_c.default_value }
{else}
{assign var="value" value=$fields.fecha_validex_c.value }
{/if}
<span class="sugar_field" id="{$fields.fecha_validex_c.name}">{$value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ETAPAS' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="etapas_c"  >

{if !$fields.etapas_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.etapas_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.etapas_c.name}" value="{ $fields.etapas_c.options }">
{ $fields.etapas_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.etapas_c.name}" value="{ $fields.etapas_c.value }">
{ $fields.etapas_c.options[$fields.etapas_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">
</div>

<div class="clear"></div>
</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TIPO_CLIENTE_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="dynamicenum" field="tipo_cliente_c"  >

{if !$fields.tipo_cliente_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.tipo_cliente_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.tipo_cliente_c.name}" value="{ $fields.tipo_cliente_c.options }">
{ $fields.tipo_cliente_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.tipo_cliente_c.name}" value="{ $fields.tipo_cliente_c.value }">
{ $fields.tipo_cliente_c.options[$fields.tipo_cliente_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">
</div>

<div class="clear"></div>
</div>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() {ldelim} initPanel(2, 'expanded'); {rdelim}); </script>
</div>  
{if $panelFieldCount == 0}
<script>document.getElementById("LBL_PANEL_ADVANCED").style.display='none';</script>
{/if}
<div class="panel-body">    
{counter name="panelFieldCount" start=0 print=false assign="panelFieldCount"}
<h4>
{sugar_translate label='LBL_EDITVIEW_PANEL1' module='Leads'}   
</h4>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NOMBRE_EMPRESA_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="nombre_empresa_c"  >

{if !$fields.nombre_empresa_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.nombre_empresa_c.value) <= 0}
{assign var="value" value=$fields.nombre_empresa_c.default_value }
{else}
{assign var="value" value=$fields.nombre_empresa_c.value }
{/if} 
<span class="sugar_field" id="{$fields.nombre_empresa_c.name}">{$fields.nombre_empresa_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_OFFICE_PHONE' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="phone" field="phone_work"  class="phone">

{if !$fields.phone_work.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_work.value)}
{assign var="phone_value" value=$fields.phone_work.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NIT_EMPRESA_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="nit_empresa_c"  >

{if !$fields.nit_empresa_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.nit_empresa_c.value) <= 0}
{assign var="value" value=$fields.nit_empresa_c.default_value }
{else}
{assign var="value" value=$fields.nit_empresa_c.value }
{/if} 
<span class="sugar_field" id="{$fields.nit_empresa_c.name}">{$fields.nit_empresa_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_EMAIL_EMPRESA_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="email_empresa_c"  >

{if !$fields.email_empresa_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.email_empresa_c.value) <= 0}
{assign var="value" value=$fields.email_empresa_c.default_value }
{else}
{assign var="value" value=$fields.email_empresa_c.value }
{/if} 
<span class="sugar_field" id="{$fields.email_empresa_c.name}">{$fields.email_empresa_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NOMBRE_CONTACTO_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="nombre_contacto_c"  >

{if !$fields.nombre_contacto_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.nombre_contacto_c.value) <= 0}
{assign var="value" value=$fields.nombre_contacto_c.default_value }
{else}
{assign var="value" value=$fields.nombre_contacto_c.value }
{/if} 
<span class="sugar_field" id="{$fields.nombre_contacto_c.name}">{$fields.nombre_contacto_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DIRECCION_C' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="direccion_c"  >

{if !$fields.direccion_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.direccion_c.value) <= 0}
{assign var="value" value=$fields.direccion_c.default_value }
{else}
{assign var="value" value=$fields.direccion_c.value }
{/if} 
<span class="sugar_field" id="{$fields.direccion_c.name}">{$fields.direccion_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() {ldelim} initPanel(3, 'expanded'); {rdelim}); </script>
</div>  
{if $panelFieldCount == 0}
<script>document.getElementById("LBL_EDITVIEW_PANEL1").style.display='none';</script>
{/if}
<div class="panel-body">    
{counter name="panelFieldCount" start=0 print=false assign="panelFieldCount"}
<h4>
{sugar_translate label='LBL_PANEL_ASSIGNMENT' module='Leads'}   
</h4>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_REFERED_BY' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="varchar" field="refered_by"  >

{if !$fields.refered_by.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.refered_by.value) <= 0}
{assign var="value" value=$fields.refered_by.default_value }
{else}
{assign var="value" value=$fields.refered_by.value }
{/if} 
<span class="sugar_field" id="{$fields.refered_by.name}">{$fields.refered_by.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_CAMPAIGN' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="relate" field="campaign_name"  >

{if !$fields.campaign_name.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.campaign_id.value)}
{capture assign="detail_url"}index.php?module=Campaigns&action=DetailView&record={$fields.campaign_id.value}{/capture}
<a href="{sugar_ajax_url url=$detail_url}">{/if}
<span id="campaign_id" class="sugar_field" data-id-value="{$fields.campaign_id.value}">{$fields.campaign_name.value}</span>
{if !empty($fields.campaign_id.value)}</a>{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ASSIGNED_TO' module='Leads'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field inlineEdit" type="relate" field="assigned_user_name" colspan='3' >

{if !$fields.assigned_user_name.hidden}
{counter name="panelFieldCount" print=false}

<span id="assigned_user_id" class="sugar_field" data-id-value="{$fields.assigned_user_id.value}">{$fields.assigned_user_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>

</div>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() {ldelim} initPanel(4, 'expanded'); {rdelim}); </script>
</div>  
{if $panelFieldCount == 0}
<script>document.getElementById("LBL_PANEL_ASSIGNMENT").style.display='none';</script>
{/if}

</div>
</form>
</div>
<script>SUGAR.util.doWhen("document.getElementById('form') != null",
        function(){ldelim}SUGAR.util.buildAccessKeyLabels();{rdelim});
</script>
<script type="text/javascript" src="include/InlineEditing/inlineEditing.js"></script>
<script type="text/javascript" src="modules/Favorites/favorites.js"></script>
</div>