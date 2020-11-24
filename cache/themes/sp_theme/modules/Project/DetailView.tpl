

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
<ul id="detail_header_action_menu" class="clickMenu fancymenu" ><li class="sugar_action_button" ><input id="edit_button" class="button" accessKey="{$APP.LBL_EDIT_BUTTON_KEY}" name="Edit" onclick="var _form = document.getElementById('formDetailView');{if $IS_TEMPLATE}_form.return_module.value='Project'; _form.return_action.value='ProjectTemplatesDetailView'; _form.return_id.value='{$id}'; _form.action.value='ProjectTemplatesEditView';{else}_form.return_module.value='Project'; _form.return_action.value='DetailView'; _form.return_id.value='{$id}'; _form.action.value='EditView'; {/if};_form.submit();" type="button" value=" {$APP.LBL_EDIT_BUTTON_LABEL} "/><ul id class="subnav" ><li><input title="{$APP.LBL_DELETE_BUTTON_TITLE}" accessKey="{$APP.LBL_DELETE_BUTTON_KEY}" id="delete_button" class="button" onclick="project_delete(this);" type="button" value="{$APP.LBL_DELETE_BUTTON_LABEL}"/></li><li><input title="{$APP.LBL_DUPLICATE_BUTTON_TITLE}" accessKey="{$APP.LBL_DUPLICATE_BUTTON_KEY}" class="button" name="Duplicate" id="duplicate_button" onclick="var _form = document.getElementById('formDetailView');{if $IS_TEMPLATE}_form.return_module.value='Project'; _form.return_action.value='ProjectTemplatesDetailView'; _form.isDuplicate.value=true; _form.action.value='projecttemplateseditview'; _form.return_id.value='{$id}';{else}_form.return_module.value='Project'; _form.return_action.value='DetailView'; _form.isDuplicate.value=true; _form.action.value='EditView'; _form.return_id.value='{$id}';{/if};_form.submit();" type="button" value="{$APP.LBL_DUPLICATE_BUTTON_LABEL}"/></li><li><input title="{$APP.LBL_VIEW_GANTT_TITLE}" class="button" type="button" name="view_gantt" id="view_gantt" value="{$APP.LBL_GANTT_BUTTON_LABEL}" onclick="javascript:window.location.href='index.php?module=Project&action=view_GanttChart&record={$id}'" //></li><li><input title="{$APP.LBL_VIEW_DETAIL}" class="button" type="button" name="view_detail" id="view_detail" value="{$APP.LBL_DETAIL_BUTTON_LABEL}" onclick="javascript:window.location.href='index.php?module=Project&action=DetailView&record={$id}'" //></li><li>{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Project", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}</li></ul></li></ul>
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
{sugar_translate label='LBL_PROJECT_INFORMATION' module='Project'}   
</h4>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NAME' module='Project'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="name" field="name"  >

{if !$fields.name.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.name.value) <= 0}
{assign var="value" value=$fields.name.default_value }
{else}
{assign var="value" value=$fields.name.value }
{/if} 
<span class="sugar_field" id="{$fields.name.name}">{$fields.name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS' module='Project'}{/capture}
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

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DATE_START' module='Project'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="date" field="estimated_start_date"  >

{if !$fields.estimated_start_date.hidden}
{counter name="panelFieldCount" print=false}


{if strlen($fields.estimated_start_date.value) <= 0}
{assign var="value" value=$fields.estimated_start_date.default_value }
{else}
{assign var="value" value=$fields.estimated_start_date.value }
{/if}
<span class="sugar_field" id="{$fields.estimated_start_date.name}">{$value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_PRIORITY' module='Project'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="enum" field="priority"  >

{if !$fields.priority.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.priority.options)}
<input type="hidden" class="sugar_field" id="{$fields.priority.name}" value="{ $fields.priority.options }">
{ $fields.priority.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.priority.name}" value="{ $fields.priority.value }">
{ $fields.priority.options[$fields.priority.value]}
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


{capture name="label" assign="label"}{sugar_translate label='LBL_DATE_END' module='Project'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="date" field="estimated_end_date"  >

{if !$fields.estimated_end_date.hidden}
{counter name="panelFieldCount" print=false}


{if strlen($fields.estimated_end_date.value) <= 0}
{assign var="value" value=$fields.estimated_end_date.default_value }
{else}
{assign var="value" value=$fields.estimated_end_date.value }
{/if}
<span class="sugar_field" id="{$fields.estimated_end_date.name}">{$value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_OVERRIDE_BUSINESS_HOURS' module='Project'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="bool" field="override_business_hours"  >

{if !$fields.override_business_hours.hidden}
{counter name="panelFieldCount" print=false}

{if strval($fields.override_business_hours.value) == "1" || strval($fields.override_business_hours.value) == "yes" || strval($fields.override_business_hours.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.override_business_hours.name}" id="{$fields.override_business_hours.name}" value="$fields.override_business_hours.value" disabled="true" {$checked}>
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


{capture name="label" assign="label"}{sugar_translate label='LBL_ASSIGNED_TO' module='Project'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="relate" field="assigned_user_name"  >

{if !$fields.assigned_user_name.hidden}
{counter name="panelFieldCount" print=false}

<span id="assigned_user_id" class="sugar_field" data-id-value="{$fields.assigned_user_id.value}">{$fields.assigned_user_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
<span class="suitepicon suitepicon-action-edit"></span>
</div>
</div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_AM_PROJECTTEMPLATES_PROJECT_1_FROM_AM_PROJECTTEMPLATES_TITLE' module='Project'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field inlineEdit" type="relate" field="am_projecttemplates_project_1_name"  >

{if !$fields.am_projecttemplates_project_1_name.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.am_projecttemplates_project_1am_projecttemplates_ida.value)}
{capture assign="detail_url"}index.php?module=AM_ProjectTemplates&action=DetailView&record={$fields.am_projecttemplates_project_1am_projecttemplates_ida.value}{/capture}
<a href="{sugar_ajax_url url=$detail_url}">{/if}
<span id="am_projecttemplates_project_1am_projecttemplates_ida" class="sugar_field" data-id-value="{$fields.am_projecttemplates_project_1am_projecttemplates_ida.value}">{$fields.am_projecttemplates_project_1_name.value}</span>
{if !empty($fields.am_projecttemplates_project_1am_projecttemplates_ida.value)}</a>{/if}
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
<script>document.getElementById("LBL_PROJECT_INFORMATION").style.display='none';</script>
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