

<script language="javascript">
{literal}
SUGAR.util.doWhen(function(){
    return $("#contentTable").length == 0;
}, SUGAR.themes.actionMenu);
{/literal}
</script>
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
<ul id="detail_header_action_menu" class="clickMenu fancymenu" ><li class="sugar_action_button" ><input title="Editar" accessKey="E" name="Edit" id="edit_button" value="Editar" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Users'; _form.return_action.value='DetailView'; _form.return_id.value='{$fields.id.value}'; _form.action.value='EditView';_form.submit();" type="button"/><ul id class="subnav" ><li><input id="duplicate_button" title="Duplicar" accessKey="U" class="button" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Users'; _form.return_action.value='DetailView'; _form.isDuplicate.value=true; _form.action.value='EditView';_form.submit();" type="button" name="Duplicate" value="Duplicar"/></li><li><input id="delete_button" type="button" class="button" onclick="confirmDelete();" value="Eliminar" //></li><li><input title="Restablecer Preferencias de Usuario" class="button" LANGUAGE="javascript" onclick="if(confirm('¿Está seguro de que desea restablecer todas las preferencias de este usuario?')) window.location='index.php?module=Users&action=resetPreferences&reset_preferences=true&record={$fields.id.value}';" type="button" name="password" value="Restablecer Preferencias de Usuario"/></li><li><input title="Restablecer Página de Inicio" class="button" LANGUAGE="javascript" onclick="if(confirm('¿Está seguro de que desea reiniciar su Página de Inicio?')) window.location='index.php?module=Users&action=DetailView&reset_homepage=true&record={$fields.id.value}';" type="button" name="password" value="Restablecer Página de Inicio"/></li><li>{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Users", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}</li></ul></li></ul>
</div>
</td>
<td align="right" width="20%">{$ADMIN_EDIT}
{$PAGINATION}
</td>
</tr>
</table>{sugar_include include=$includes}
<div id="Users_detailview_tabs"
>
<div >
<div id='detailpanel_1' class='detail view  detail508 expanded'>
{counter name="panelFieldCount" start=0 print=false assign="panelFieldCount"}
<h4>
<a href="javascript:void(0)" class="collapseLink" onclick="collapsePanel(1);">
<img border="0" id="detailpanel_1_img_hide" src="{sugar_getimagepath file="basic_search.gif"}"></a>
<a href="javascript:void(0)" class="expandLink" onclick="expandPanel(1);">
<img border="0" id="detailpanel_1_img_show" src="{sugar_getimagepath file="advanced_search.gif"}"></a>
{sugar_translate label='LBL_USER_INFORMATION' module='Users'}
<script>
      document.getElementById('detailpanel_1').className += ' expanded';
    </script>
</h4>
<!-- PANEL CONTAINER HERE.. -->
<table id='LBL_USER_INFORMATION' class="panelContainer" cellspacing='{$gridline}'>
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.user_name.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_USER_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="user_name" field="user_name" width='37.5%'  >
{if !$fields.user_name.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.user_name.value) <= 0}
{assign var="value" value=$fields.user_name.default_value }
{else}
{assign var="value" value=$fields.user_name.value }
{/if} 
<span class="sugar_field" id="{$fields.user_name.name}">{$fields.user_name.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.first_name.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_FIRST_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="name" field="first_name" width='37.5%'  >
{if !$fields.first_name.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.first_name.value) <= 0}
{assign var="value" value=$fields.first_name.default_value }
{else}
{assign var="value" value=$fields.first_name.value }
{/if} 
<span class="sugar_field" id="{$fields.first_name.name}">{$fields.first_name.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.status.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="enum" field="status" width='37.5%'  >
{if !$fields.status.hidden}
{counter name="panelFieldCount"}


{if is_string($fields.status.options)}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.options }">
{ $fields.status.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.value }">
{ $fields.status.options[$fields.status.value]}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.last_name.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_LAST_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="name" field="last_name" width='37.5%'  >
{if !$fields.last_name.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.last_name.value) <= 0}
{assign var="value" value=$fields.last_name.default_value }
{else}
{assign var="value" value=$fields.last_name.value }
{/if} 
<span class="sugar_field" id="{$fields.last_name.name}">{$fields.last_name.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.codigo_agenda_c.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_CODIGO_AGENDA' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="int" field="codigo_agenda_c" width='37.5%'  >
{if !$fields.codigo_agenda_c.hidden}
{counter name="panelFieldCount"}

<span class="sugar_field" id="{$fields.codigo_agenda_c.name}">
{sugar_number_format precision=0 var=$fields.codigo_agenda_c.value}
</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.UserType.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_USER_TYPE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="enum" field="UserType" width='37.5%' colspan='3' >
{if !$fields.UserType.hidden}
{counter name="panelFieldCount"}
<span id="UserType" class="sugar_field">{$USER_TYPE_READONLY}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.photo.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_PHOTO' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="image" field="photo" width='37.5%' colspan='3' >
{if !$fields.photo.hidden}
{counter name="panelFieldCount"}

<span class="sugar_field" id="{$fields.photo.name}">
{if strlen($fields.photo.value) <= 0}
<img src="" style="max-width: {if !$vardef.width}160{else}200{/if}px;" height="{if !$vardef.height}160{else}50{/if}">
{else}
<img src="index.php?entryPoint=download&id={$fields.id.value}_{$fields.photo.name}{$fields.width.value}&type={$module}" style="max-width: {if !$vardef.width}160{else}200{/if}px;" height="{if !$vardef.height}160{else}50{/if}">
{/if}
</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.factor_auth.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_FACTOR_AUTH' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="bool" field="factor_auth" width='37.5%' colspan='3' >
{if !$fields.factor_auth.hidden}
{counter name="panelFieldCount"}

{if strval($fields.factor_auth.value) == "1" || strval($fields.factor_auth.value) == "yes" || strval($fields.factor_auth.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.factor_auth.name}" id="{$fields.factor_auth.name}" value="$fields.factor_auth.value" disabled="true" {$checked}>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
</table>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() {ldelim} initPanel(1, 'expanded'); {rdelim}); </script>
</div>
{if $panelFieldCount == 0}
<script>document.getElementById("LBL_USER_INFORMATION").style.display='none';</script>
{/if}
<div id='detailpanel_2' class='detail view  detail508 expanded'>
{counter name="panelFieldCount" start=0 print=false assign="panelFieldCount"}
<h4>
<a href="javascript:void(0)" class="collapseLink" onclick="collapsePanel(2);">
<img border="0" id="detailpanel_2_img_hide" src="{sugar_getimagepath file="basic_search.gif"}"></a>
<a href="javascript:void(0)" class="expandLink" onclick="expandPanel(2);">
<img border="0" id="detailpanel_2_img_show" src="{sugar_getimagepath file="advanced_search.gif"}"></a>
{sugar_translate label='LBL_EMPLOYEE_INFORMATION' module='Users'}
<script>
      document.getElementById('detailpanel_2').className += ' expanded';
    </script>
</h4>
<!-- PANEL CONTAINER HERE.. -->
<table id='LBL_EMPLOYEE_INFORMATION' class="panelContainer" cellspacing='{$gridline}'>
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.numero_documento_c.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_NUMERO_DOCUMENTO' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="numero_documento_c" width='37.5%'  >
{if !$fields.numero_documento_c.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.numero_documento_c.value) <= 0}
{assign var="value" value=$fields.numero_documento_c.default_value }
{else}
{assign var="value" value=$fields.numero_documento_c.value }
{/if} 
<span class="sugar_field" id="{$fields.numero_documento_c.name}">{$fields.numero_documento_c.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.extension_documento_c.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_EXTENSION_DOCUMENTO' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="enum" field="extension_documento_c" width='37.5%'  >
{if !$fields.extension_documento_c.hidden}
{counter name="panelFieldCount"}


{if is_string($fields.extension_documento_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.extension_documento_c.name}" value="{ $fields.extension_documento_c.options }">
{ $fields.extension_documento_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.extension_documento_c.name}" value="{ $fields.extension_documento_c.value }">
{ $fields.extension_documento_c.options[$fields.extension_documento_c.value]}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.employee_status.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_EMPLOYEE_STATUS' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="employee_status" width='37.5%'  >
{if !$fields.employee_status.hidden}
{counter name="panelFieldCount"}
<span id='employee_status_span'>
{$fields.employee_status.value}
</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.show_on_employees.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_SHOW_ON_EMPLOYEES' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="bool" field="show_on_employees" width='37.5%'  >
{if !$fields.show_on_employees.hidden}
{counter name="panelFieldCount"}

{if strval($fields.show_on_employees.value) == "1" || strval($fields.show_on_employees.value) == "yes" || strval($fields.show_on_employees.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.show_on_employees.name}" id="{$fields.show_on_employees.name}" value="$fields.show_on_employees.value" disabled="true" {$checked}>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.title.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_TITLE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="title" width='37.5%'  >
{if !$fields.title.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.title.value) <= 0}
{assign var="value" value=$fields.title.default_value }
{else}
{assign var="value" value=$fields.title.value }
{/if} 
<span class="sugar_field" id="{$fields.title.name}">{$fields.title.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.phone_work.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_WORK_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="phone" field="phone_work" width='37.5%'  class="phone">
{if !$fields.phone_work.hidden}
{counter name="panelFieldCount"}

{if !empty($fields.phone_work.value)}
{assign var="phone_value" value=$fields.phone_work.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.department.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_DEPARTMENT' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="department" width='37.5%'  >
{if !$fields.department.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.department.value) <= 0}
{assign var="value" value=$fields.department.default_value }
{else}
{assign var="value" value=$fields.department.value }
{/if} 
<span class="sugar_field" id="{$fields.department.name}">{$fields.department.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.phone_mobile.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_MOBILE_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="phone" field="phone_mobile" width='37.5%'  class="phone">
{if !$fields.phone_mobile.hidden}
{counter name="panelFieldCount"}

{if !empty($fields.phone_mobile.value)}
{assign var="phone_value" value=$fields.phone_mobile.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.reports_to_name.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_REPORTS_TO_NAME' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="relate" field="reports_to_name" width='37.5%'  >
{if !$fields.reports_to_name.hidden}
{counter name="panelFieldCount"}

<span id="reports_to_id" class="sugar_field" data-id-value="{$fields.reports_to_id.value}">{$fields.reports_to_name.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.phone_other.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_OTHER_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="phone" field="phone_other" width='37.5%'  class="phone">
{if !$fields.phone_other.hidden}
{counter name="panelFieldCount"}

{if !empty($fields.phone_other.value)}
{assign var="phone_value" value=$fields.phone_other.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.phone_fax.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_FAX_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="phone" field="phone_fax" width='37.5%'  class="phone">
{if !$fields.phone_fax.hidden}
{counter name="panelFieldCount"}

{if !empty($fields.phone_fax.value)}
{assign var="phone_value" value=$fields.phone_fax.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.phone_home.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_HOME_PHONE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="phone" field="phone_home" width='37.5%'  class="phone">
{if !$fields.phone_home.hidden}
{counter name="panelFieldCount"}

{if !empty($fields.phone_home.value)}
{assign var="phone_value" value=$fields.phone_home.value }
{if $phone_value neq ''}
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('{$phone_value}','{$module}','{$id}');">
{/if}
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.messenger_type.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_MESSENGER_TYPE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="enum" field="messenger_type" width='37.5%'  >
{if !$fields.messenger_type.hidden}
{counter name="panelFieldCount"}


{if is_string($fields.messenger_type.options)}
<input type="hidden" class="sugar_field" id="{$fields.messenger_type.name}" value="{ $fields.messenger_type.options }">
{ $fields.messenger_type.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.messenger_type.name}" value="{ $fields.messenger_type.value }">
{ $fields.messenger_type.options[$fields.messenger_type.value]}
{/if}
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.messenger_id.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_MESSENGER_ID' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="messenger_id" width='37.5%'  >
{if !$fields.messenger_id.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.messenger_id.value) <= 0}
{assign var="value" value=$fields.messenger_id.default_value }
{else}
{assign var="value" value=$fields.messenger_id.value }
{/if} 
<span class="sugar_field" id="{$fields.messenger_id.name}">{$fields.messenger_id.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.address_street.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_STREET' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="address_street" width='37.5%'  >
{if !$fields.address_street.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.address_street.value) <= 0}
{assign var="value" value=$fields.address_street.default_value }
{else}
{assign var="value" value=$fields.address_street.value }
{/if} 
<span class="sugar_field" id="{$fields.address_street.name}">{$fields.address_street.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.address_city.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_CITY' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="address_city" width='37.5%'  >
{if !$fields.address_city.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.address_city.value) <= 0}
{assign var="value" value=$fields.address_city.default_value }
{else}
{assign var="value" value=$fields.address_city.value }
{/if} 
<span class="sugar_field" id="{$fields.address_city.name}">{$fields.address_city.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.address_state.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_STATE' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="address_state" width='37.5%'  >
{if !$fields.address_state.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.address_state.value) <= 0}
{assign var="value" value=$fields.address_state.default_value }
{else}
{assign var="value" value=$fields.address_state.value }
{/if} 
<span class="sugar_field" id="{$fields.address_state.name}">{$fields.address_state.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.address_country.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_ADDRESS_COUNTRY' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="varchar" field="address_country" width='37.5%' colspan='3' >
{if !$fields.address_country.hidden}
{counter name="panelFieldCount"}

{if strlen($fields.address_country.value) <= 0}
{assign var="value" value=$fields.address_country.default_value }
{else}
{assign var="value" value=$fields.address_country.value }
{/if} 
<span class="sugar_field" id="{$fields.address_country.name}">{$fields.address_country.value}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
{counter name="fieldsUsed" start=0 print=false assign="fieldsUsed"}
{counter name="fieldsHidden" start=0 print=false assign="fieldsHidden"}
{capture name="tr" assign="tableRow"}
<tr>
{counter name="fieldsUsed"}
<td width='12.5%' scope="col">
{if !$fields.description.hidden}
{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Users'}{/capture}
{$label|strip_semicolon}:
{/if}
</td>
<td class="inlineEdit" type="text" field="description" width='37.5%' colspan='3' >
{if !$fields.description.hidden}
{counter name="panelFieldCount"}

<span class="sugar_field" id="{$fields.description.name|escape:'html'|url2html|nl2br}">{$fields.description.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}
<div class="inlineEditIcon"> {sugar_getimage name="inline_edit_icon.svg" attr='border="0" ' alt="$alt_edit"}</div>			</td>
</tr>
{/capture}
{if $fieldsUsed > 0 && $fieldsUsed != $fieldsHidden}
{$tableRow}
{/if}
</table>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() {ldelim} initPanel(2, 'expanded'); {rdelim}); </script>
</div>
{if $panelFieldCount == 0}
<script>document.getElementById("LBL_EMPLOYEE_INFORMATION").style.display='none';</script>
{/if}
<div id='tabcontent0'>
<div id="detailpanel_1" class="detail view  detail508 expanded">
<div id="settings">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span>{$MOD.LBL_USER_SETTINGS}</span>
</h4>
</th>
</tr>
<tr>
<td scope="row">
<span>{$MOD.LBL_RECEIVE_NOTIFICATIONS|strip_semicolon}:</span>
</td>
<td>
<span><input class="checkbox" type="checkbox" disabled {$RECEIVE_NOTIFICATIONS}></span>
</td>
<td>
<span>{$MOD.LBL_RECEIVE_NOTIFICATIONS_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span>{$MOD.LBL_REMINDER|strip_semicolon}:
</td>
<!--
<td valign="top" nowrap><span>{include file="modules/Meetings/tpls/reminders.tpl"}</span></td>
-->
<td valign="top" nowrap>
<span>{include file="modules/Reminders/tpls/remindersDefaults.tpl"}</span>
</td>
<td>
<span>{$MOD.LBL_REMINDER_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td valign="top" scope="row">
<span>{$MOD.LBL_MAILMERGE|strip_semicolon}:</span>
</td>
<td valign="top" nowrap>
<span><input tabindex='3' name='mailmerge_on' disabled class="checkbox"
type="checkbox" {$MAILMERGE_ON}></span>
</td>
<td>
<span>{$MOD.LBL_MAILMERGE_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td valign="top" scope="row">
<span>{$MOD.LBL_SETTINGS_URL|strip_semicolon}:</span>
</td>
<td valign="top" nowrap>
<span>{$SETTINGS_URL}</span>
</td>
<td>
<span>{$MOD.LBL_SETTINGS_URL_DESC}&nbsp;</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span>{$MOD.LBL_EXPORT_DELIMITER|strip_semicolon}:</span>
</td>
<td>
<span>{$EXPORT_DELIMITER}</span>
</td>
<td>
<span>{$MOD.LBL_EXPORT_DELIMITER_DESC}</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span>{$MOD.LBL_EXPORT_CHARSET|strip_semicolon}:</span>
</td>
<td>
<span>{$EXPORT_CHARSET_DISPLAY}</span>
</td>
<td>
<span>{$MOD.LBL_EXPORT_CHARSET_DESC}</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span>{$MOD.LBL_USE_REAL_NAMES|strip_semicolon}:</span>
</td>
<td>
<span><input tabindex='3' name='use_real_names' disabled class="checkbox"
type="checkbox" {$USE_REAL_NAMES}></span>
</td>
<td>
<span>{$MOD.LBL_USE_REAL_NAMES_DESC}</span>
</td>
</tr>
{if $DISPLAY_EXTERNAL_AUTH}
<tr>
<td scope="row" valign="top">
<span>{$EXTERNAL_AUTH_CLASS|strip_semicolon}:</span>
</td>
<td valign="top" nowrap>
<span><input id="external_auth_only" name="external_auth_only" type="checkbox"
class="checkbox" {$EXTERNAL_AUTH_ONLY_CHECKED}></span>
</td>
<td>
<span>{$MOD.LBL_EXTERNAL_AUTH_ONLY} {$EXTERNAL_AUTH_CLASS}</span>
</td>
</tr>
{/if}
</table>
</div>
<div id='locale'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span>{$MOD.LBL_USER_LOCALE}</span>
</h4>
</th>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_DATE_FORMAT|strip_semicolon}:</span>
</td>
<td>
<span>{$DATEFORMAT}&nbsp;</span>
</td>
<td>
<span>{$MOD.LBL_DATE_FORMAT_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_TIME_FORMAT|strip_semicolon}:</span>
</td>
<td>
<span>{$TIMEFORMAT}&nbsp;</span>
</td>
<td>
<span>{$MOD.LBL_TIME_FORMAT_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_TIMEZONE|strip_semicolon}:</span>
</td>
<td nowrap>
<span>{$TIMEZONE}&nbsp;</span>
</td>
<td>
<span>{$MOD.LBL_ZONE_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_CURRENCY|strip_semicolon}:</span>
</td>
<td>
<span>{$CURRENCY_DISPLAY}&nbsp;</span>
</td>
<td>
<span>{$MOD.LBL_CURRENCY_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_CURRENCY_SIG_DIGITS|strip_semicolon}:</span>
</td>
<td>
<span>{$CURRENCY_SIG_DIGITS}&nbsp;</span>
</td>
<td>
<span>{$MOD.LBL_CURRENCY_SIG_DIGITS_DESC}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_NUMBER_GROUPING_SEP|strip_semicolon}:</span>
</td>
<td>
<span>{$NUM_GRP_SEP}&nbsp;</span>
</td>
<td>
<span>{$MOD.LBL_NUMBER_GROUPING_SEP_TEXT}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_DECIMAL_SEP|strip_semicolon}:</span>
</td>
<td>
<span>{$DEC_SEP}&nbsp;</span>
</td>
<td>
<span></span>{$MOD.LBL_DECIMAL_SEP_TEXT}&nbsp;</td>
</tr>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_LOCALE_DEFAULT_NAME_FORMAT|strip_semicolon}:</span>
</td>
<td>
<span>{$NAME_FORMAT}&nbsp;</span>
</td>
<td>
<span></span>{$MOD.LBL_LOCALE_NAME_FORMAT_DESC}&nbsp;</td>
</tr>
</table>
</div>
<div id='calendar_options'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span>{$MOD.LBL_CALENDAR_OPTIONS}</span>
</h4>
</th>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_PUBLISH_KEY|strip_semicolon}:</span>
</td>
<td width="20%">
<span>{$CALENDAR_PUBLISH_KEY}&nbsp;</span>
</td>
<td width="65%">
<span>{$MOD.LBL_CHOOSE_A_KEY}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>
<nobr>{$MOD.LBL_YOUR_PUBLISH_URL|strip_semicolon}:</nobr>
</span>
</td>
<td colspan=2>{if $CALENDAR_PUBLISH_KEY}{$CALENDAR_PUBLISH_URL}{else}{$MOD.LBL_NO_KEY}{/if}</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_SEARCH_URL|strip_semicolon}:</span>
</td>
<td colspan=2>
<span>{if $CALENDAR_PUBLISH_KEY}{$CALENDAR_SEARCH_URL}{else}{$MOD.LBL_NO_KEY}{/if}</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_ICAL_PUB_URL|strip_semicolon}: {sugar_help text=$MOD.LBL_ICAL_PUB_URL_HELP}</span>
</td>
<td colspan=2>
<span>{if $CALENDAR_PUBLISH_KEY}{$CALENDAR_ICAL_URL}{else}{$MOD.LBL_NO_KEY}{/if}</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_FDOW|strip_semicolon}:</span>
</td>
<td>
<span>{$FDOWDISPLAY}&nbsp;</span>
</td>
<td>
<span></span>{$MOD.LBL_FDOW_TEXT}&nbsp;</td>
</tr>
</table>
</div>
<div id='google_options'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th align="left" scope="row" colspan="4"><h4>{$MOD.LBL_GOOGLE_API_SETTINGS}</h4></th>
</tr>
<tr>
<td width="17%" scope="row">
<slot>{$MOD.LBL_GOOGLE_API_TOKEN}:</slot>&nbsp;{sugar_help text=$MOD.LBL_GOOGLE_API_TOKEN_HELP}
</td>
<td width="20%">
Current API Token is: <span style="color:{$GOOGLE_API_TOKEN_COLOR}">{$GOOGLE_API_TOKEN}</span>
</td>
<td width="63%">
<slot>&nbsp;</slot>
</td>
</tr>
<tr>
<td width="17%" scope="row">
<slot>{$MOD.LBL_GSYNC_CAL}:</slot>
</td>
<td>
<slot><input class="checkbox" type="checkbox" disabled {$GSYNC_CAL}></slot>
</td>
</tr>
</table>
</div>
<div id='edit_tabs'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span>{$MOD.LBL_LAYOUT_OPTIONS}</span>
</h4>
</th>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_USE_GROUP_TABS|strip_semicolon}:</span>
</td>
<td>
<span><input class="checkbox" type="checkbox" disabled {$USE_GROUP_TABS}></span>
</td>
<td>
<span>{$MOD.LBL_NAVIGATION_PARADIGM_DESCRIPTION}&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>{$MOD.LBL_SUBPANEL_TABS|strip_semicolon}:</span>
</td>
<td>
<span><input class="checkbox" type="checkbox" disabled {$SUBPANEL_TABS}></span>
</td>
<td>
<span>{$MOD.LBL_SUBPANEL_TABS_DESCRIPTION}&nbsp;</span>
</td>
</tr>
</table>
</div>
</div>
</div>
<div id='tabcontent1'>
<div id="detailpanel_2" class="detail view  detail508 expanded">
<div id="advanced">
</div>
</div>
</div>
</div>

</form>
<script>SUGAR.util.doWhen("document.getElementById('form') != null",
        function(){ldelim}SUGAR.util.buildAccessKeyLabels();{rdelim});
</script><script type="text/javascript" src="include/InlineEditing/inlineEditing.js"></script>
<script type="text/javascript" src="modules/Favorites/favorites.js"></script>
<script type='text/javascript' src='{sugar_getjspath file='modules/Users/DetailView.js'}'></script>