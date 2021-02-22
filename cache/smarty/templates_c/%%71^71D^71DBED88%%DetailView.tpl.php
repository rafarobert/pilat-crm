<?php /* Smarty version 2.6.31, created on 2021-02-22 21:17:11
         compiled from cache/themes/sp_theme/modules/Users/DetailView.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_include', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 33, false),array('function', 'counter', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 38, false),array('function', 'sugar_getimagepath', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 41, false),array('function', 'sugar_translate', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 44, false),array('function', 'sugar_getimage', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 73, false),array('function', 'sugar_number_format', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 163, false),array('function', 'sugar_phone', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 408, false),array('function', 'sugar_help', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 1010, false),array('function', 'sugar_getjspath', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 1103, false),array('modifier', 'strip_semicolon', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 59, false),array('modifier', 'escape', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 751, false),array('modifier', 'url2html', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 751, false),array('modifier', 'nl2br', 'cache/themes/sp_theme/modules/Users/DetailView.tpl', 751, false),)), $this); ?>


<script language="javascript">
<?php echo '
SUGAR.util.doWhen(function(){
    return $("#contentTable").length == 0;
}, SUGAR.themes.actionMenu);
'; ?>

</script>
<table cellpadding="0" cellspacing="0" border="0" width="100%" id="">
<tr>
<td class="buttons" align="left" NOWRAP width="80%">
<div class="actionsContainer">
<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="<?php echo $this->_tpl_vars['module']; ?>
">
<input type="hidden" name="record" value="<?php echo $this->_tpl_vars['fields']['id']['value']; ?>
">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="<?php echo $this->_tpl_vars['offset']; ?>
">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
</form>
<ul id="detail_header_action_menu" class="clickMenu fancymenu" ><li class="sugar_action_button" ><input title="Editar" accessKey="E" name="Edit" id="edit_button" value="Editar" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Users'; _form.return_action.value='DetailView'; _form.return_id.value='<?php echo $this->_tpl_vars['fields']['id']['value']; ?>
'; _form.action.value='EditView';_form.submit();" type="button"/><ul id class="subnav" ><li><input title="Restablecer Preferencias de Usuario" class="button" LANGUAGE="javascript" onclick="if(confirm('¿Está seguro de que desea restablecer todas las preferencias de este usuario?')) window.location='index.php?module=Users&action=resetPreferences&reset_preferences=true&record=<?php echo $this->_tpl_vars['fields']['id']['value']; ?>
';" type="button" name="password" value="Restablecer Preferencias de Usuario"/></li><li><input title="Restablecer Página de Inicio" class="button" LANGUAGE="javascript" onclick="if(confirm('¿Está seguro de que desea reiniciar su Página de Inicio?')) window.location='index.php?module=Users&action=DetailView&reset_homepage=true&record=<?php echo $this->_tpl_vars['fields']['id']['value']; ?>
';" type="button" name="password" value="Restablecer Página de Inicio"/></li><li><?php if ($this->_tpl_vars['bean']->aclAccess('detail')): ?><?php if (! empty ( $this->_tpl_vars['fields']['id']['value'] ) && $this->_tpl_vars['isAuditEnabled']): ?><input id="btn_view_change_log" title="<?php echo $this->_tpl_vars['APP']['LNK_VIEW_CHANGE_LOG']; ?>
" class="button" onclick='open_popup("Audit", "600", "400", "&record=<?php echo $this->_tpl_vars['fields']['id']['value']; ?>
&module_name=Users", true, false,  { "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] } ); return false;' type="button" value="<?php echo $this->_tpl_vars['APP']['LNK_VIEW_CHANGE_LOG']; ?>
"><?php endif; ?><?php endif; ?></li></ul></li></ul>
</div>
</td>
<td align="right" width="20%"><?php echo $this->_tpl_vars['ADMIN_EDIT']; ?>

<?php echo $this->_tpl_vars['PAGINATION']; ?>

</td>
</tr>
</table><?php echo smarty_function_sugar_include(array('include' => $this->_tpl_vars['includes']), $this);?>

<div id="Users_detailview_tabs"
>
<div >
<div id='detailpanel_1' class='detail view  detail508 expanded'>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount','start' => 0,'print' => false,'assign' => 'panelFieldCount'), $this);?>

<h4>
<a href="javascript:void(0)" class="collapseLink" onclick="collapsePanel(1);">
<img border="0" id="detailpanel_1_img_hide" src="<?php echo smarty_function_sugar_getimagepath(array('file' => "basic_search.gif"), $this);?>
"></a>
<a href="javascript:void(0)" class="expandLink" onclick="expandPanel(1);">
<img border="0" id="detailpanel_1_img_show" src="<?php echo smarty_function_sugar_getimagepath(array('file' => "advanced_search.gif"), $this);?>
"></a>
<?php echo smarty_function_sugar_translate(array('label' => 'LBL_USER_INFORMATION','module' => 'Users'), $this);?>

<script>
      document.getElementById('detailpanel_1').className += ' expanded';
    </script>
</h4>
<!-- PANEL CONTAINER HERE.. -->
<table id='LBL_USER_INFORMATION' class="panelContainer" cellspacing='<?php echo $this->_tpl_vars['gridline']; ?>
'>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['user_name']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_USER_NAME','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="user_name" field="user_name" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['user_name']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['user_name']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['user_name']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['user_name']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['user_name']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['user_name']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['first_name']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_FIRST_NAME','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="name" field="first_name" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['first_name']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['first_name']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['first_name']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['first_name']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['first_name']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['first_name']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['status']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_STATUS','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="enum" field="status" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['status']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>



<?php if (is_string ( $this->_tpl_vars['fields']['status']['options'] )): ?>
<input type="hidden" class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['status']['name']; ?>
" value="<?php echo $this->_tpl_vars['fields']['status']['options']; ?>
">
<?php echo $this->_tpl_vars['fields']['status']['options']; ?>

<?php else: ?>
<input type="hidden" class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['status']['name']; ?>
" value="<?php echo $this->_tpl_vars['fields']['status']['value']; ?>
">
<?php echo $this->_tpl_vars['fields']['status']['options'][$this->_tpl_vars['fields']['status']['value']]; ?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['last_name']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_LAST_NAME','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="name" field="last_name" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['last_name']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['last_name']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['last_name']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['last_name']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['last_name']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['last_name']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['codigo_agenda_c']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_CODIGO_AGENDA','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="int" field="codigo_agenda_c" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['codigo_agenda_c']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['codigo_agenda_c']['name']; ?>
">
<?php echo smarty_function_sugar_number_format(array('precision' => 0,'var' => $this->_tpl_vars['fields']['codigo_agenda_c']['value']), $this);?>

</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['UserType']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_USER_TYPE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="enum" field="UserType" width='37.5%' colspan='3' >
<?php if (! $this->_tpl_vars['fields']['UserType']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>

<span id="UserType" class="sugar_field"><?php echo $this->_tpl_vars['USER_TYPE_READONLY']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['photo']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_PHOTO','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="image" field="photo" width='37.5%' colspan='3' >
<?php if (! $this->_tpl_vars['fields']['photo']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['photo']['name']; ?>
">
<?php if (strlen ( $this->_tpl_vars['fields']['photo']['value'] ) <= 0): ?>
<img src="" style="max-width: <?php if (! $this->_tpl_vars['vardef']['width']): ?>160<?php else: ?>200<?php endif; ?>px;" height="<?php if (! $this->_tpl_vars['vardef']['height']): ?>160<?php else: ?>50<?php endif; ?>">
<?php else: ?>
<img src="index.php?entryPoint=download&id=<?php echo $this->_tpl_vars['fields']['id']['value']; ?>
_<?php echo $this->_tpl_vars['fields']['photo']['name']; ?>
<?php echo $this->_tpl_vars['fields']['width']['value']; ?>
&type=<?php echo $this->_tpl_vars['module']; ?>
" style="max-width: <?php if (! $this->_tpl_vars['vardef']['width']): ?>160<?php else: ?>200<?php endif; ?>px;" height="<?php if (! $this->_tpl_vars['vardef']['height']): ?>160<?php else: ?>50<?php endif; ?>">
<?php endif; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['factor_auth']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_FACTOR_AUTH','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="bool" field="factor_auth" width='37.5%' colspan='3' >
<?php if (! $this->_tpl_vars['fields']['factor_auth']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strval ( $this->_tpl_vars['fields']['factor_auth']['value'] ) == '1' || strval ( $this->_tpl_vars['fields']['factor_auth']['value'] ) == 'yes' || strval ( $this->_tpl_vars['fields']['factor_auth']['value'] ) == 'on'): ?> 
<?php $this->assign('checked', 'checked="checked"'); ?>
<?php else: ?>
<?php $this->assign('checked', ""); ?>
<?php endif; ?>
<input type="checkbox" class="checkbox" name="<?php echo $this->_tpl_vars['fields']['factor_auth']['name']; ?>
" id="<?php echo $this->_tpl_vars['fields']['factor_auth']['name']; ?>
" value="$fields.factor_auth.value" disabled="true" <?php echo $this->_tpl_vars['checked']; ?>
>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
</table>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() { initPanel(1, 'expanded'); }); </script>
</div>
<?php if ($this->_tpl_vars['panelFieldCount'] == 0): ?>
<script>document.getElementById("LBL_USER_INFORMATION").style.display='none';</script>
<?php endif; ?>
<div id='detailpanel_2' class='detail view  detail508 expanded'>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount','start' => 0,'print' => false,'assign' => 'panelFieldCount'), $this);?>

<h4>
<a href="javascript:void(0)" class="collapseLink" onclick="collapsePanel(2);">
<img border="0" id="detailpanel_2_img_hide" src="<?php echo smarty_function_sugar_getimagepath(array('file' => "basic_search.gif"), $this);?>
"></a>
<a href="javascript:void(0)" class="expandLink" onclick="expandPanel(2);">
<img border="0" id="detailpanel_2_img_show" src="<?php echo smarty_function_sugar_getimagepath(array('file' => "advanced_search.gif"), $this);?>
"></a>
<?php echo smarty_function_sugar_translate(array('label' => 'LBL_EMPLOYEE_INFORMATION','module' => 'Users'), $this);?>

<script>
      document.getElementById('detailpanel_2').className += ' expanded';
    </script>
</h4>
<!-- PANEL CONTAINER HERE.. -->
<table id='LBL_EMPLOYEE_INFORMATION' class="panelContainer" cellspacing='<?php echo $this->_tpl_vars['gridline']; ?>
'>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['numero_documento_c']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_NUMERO_DOCUMENTO','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="numero_documento_c" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['numero_documento_c']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['numero_documento_c']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['numero_documento_c']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['numero_documento_c']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['numero_documento_c']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['numero_documento_c']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['extension_documento_c']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_EXTENSION_DOCUMENTO','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="enum" field="extension_documento_c" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['extension_documento_c']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>



<?php if (is_string ( $this->_tpl_vars['fields']['extension_documento_c']['options'] )): ?>
<input type="hidden" class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['extension_documento_c']['name']; ?>
" value="<?php echo $this->_tpl_vars['fields']['extension_documento_c']['options']; ?>
">
<?php echo $this->_tpl_vars['fields']['extension_documento_c']['options']; ?>

<?php else: ?>
<input type="hidden" class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['extension_documento_c']['name']; ?>
" value="<?php echo $this->_tpl_vars['fields']['extension_documento_c']['value']; ?>
">
<?php echo $this->_tpl_vars['fields']['extension_documento_c']['options'][$this->_tpl_vars['fields']['extension_documento_c']['value']]; ?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['employee_status']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_EMPLOYEE_STATUS','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="employee_status" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['employee_status']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>

<span id='employee_status_span'>
<?php echo $this->_tpl_vars['fields']['employee_status']['value']; ?>

</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['show_on_employees']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_SHOW_ON_EMPLOYEES','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="bool" field="show_on_employees" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['show_on_employees']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strval ( $this->_tpl_vars['fields']['show_on_employees']['value'] ) == '1' || strval ( $this->_tpl_vars['fields']['show_on_employees']['value'] ) == 'yes' || strval ( $this->_tpl_vars['fields']['show_on_employees']['value'] ) == 'on'): ?> 
<?php $this->assign('checked', 'checked="checked"'); ?>
<?php else: ?>
<?php $this->assign('checked', ""); ?>
<?php endif; ?>
<input type="checkbox" class="checkbox" name="<?php echo $this->_tpl_vars['fields']['show_on_employees']['name']; ?>
" id="<?php echo $this->_tpl_vars['fields']['show_on_employees']['name']; ?>
" value="$fields.show_on_employees.value" disabled="true" <?php echo $this->_tpl_vars['checked']; ?>
>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['title']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_TITLE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="title" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['title']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['title']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['title']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['title']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['title']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['title']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['phone_work']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_WORK_PHONE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="phone" field="phone_work" width='37.5%'  class="phone">
<?php if (! $this->_tpl_vars['fields']['phone_work']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (! empty ( $this->_tpl_vars['fields']['phone_work']['value'] )): ?>
<?php $this->assign('phone_value', $this->_tpl_vars['fields']['phone_work']['value']); ?>
<?php if ($this->_tpl_vars['phone_value'] != ''): ?>
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('<?php echo $this->_tpl_vars['phone_value']; ?>
','<?php echo $this->_tpl_vars['module']; ?>
','<?php echo $this->_tpl_vars['id']; ?>
');">
<?php endif; ?>
<?php echo smarty_function_sugar_phone(array('value' => $this->_tpl_vars['phone_value'],'usa_format' => '0'), $this);?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['department']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_DEPARTMENT','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="department" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['department']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['department']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['department']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['department']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['department']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['department']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['phone_mobile']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_MOBILE_PHONE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="phone" field="phone_mobile" width='37.5%'  class="phone">
<?php if (! $this->_tpl_vars['fields']['phone_mobile']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (! empty ( $this->_tpl_vars['fields']['phone_mobile']['value'] )): ?>
<?php $this->assign('phone_value', $this->_tpl_vars['fields']['phone_mobile']['value']); ?>
<?php if ($this->_tpl_vars['phone_value'] != ''): ?>
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('<?php echo $this->_tpl_vars['phone_value']; ?>
','<?php echo $this->_tpl_vars['module']; ?>
','<?php echo $this->_tpl_vars['id']; ?>
');">
<?php endif; ?>
<?php echo smarty_function_sugar_phone(array('value' => $this->_tpl_vars['phone_value'],'usa_format' => '0'), $this);?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['reports_to_name']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_REPORTS_TO_NAME','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="relate" field="reports_to_name" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['reports_to_name']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<span id="reports_to_id" class="sugar_field" data-id-value="<?php echo $this->_tpl_vars['fields']['reports_to_id']['value']; ?>
"><?php echo $this->_tpl_vars['fields']['reports_to_name']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['phone_other']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_OTHER_PHONE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="phone" field="phone_other" width='37.5%'  class="phone">
<?php if (! $this->_tpl_vars['fields']['phone_other']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (! empty ( $this->_tpl_vars['fields']['phone_other']['value'] )): ?>
<?php $this->assign('phone_value', $this->_tpl_vars['fields']['phone_other']['value']); ?>
<?php if ($this->_tpl_vars['phone_value'] != ''): ?>
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('<?php echo $this->_tpl_vars['phone_value']; ?>
','<?php echo $this->_tpl_vars['module']; ?>
','<?php echo $this->_tpl_vars['id']; ?>
');">
<?php endif; ?>
<?php echo smarty_function_sugar_phone(array('value' => $this->_tpl_vars['phone_value'],'usa_format' => '0'), $this);?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['phone_fax']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_FAX_PHONE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="phone" field="phone_fax" width='37.5%'  class="phone">
<?php if (! $this->_tpl_vars['fields']['phone_fax']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (! empty ( $this->_tpl_vars['fields']['phone_fax']['value'] )): ?>
<?php $this->assign('phone_value', $this->_tpl_vars['fields']['phone_fax']['value']); ?>
<?php if ($this->_tpl_vars['phone_value'] != ''): ?>
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('<?php echo $this->_tpl_vars['phone_value']; ?>
','<?php echo $this->_tpl_vars['module']; ?>
','<?php echo $this->_tpl_vars['id']; ?>
');">
<?php endif; ?>
<?php echo smarty_function_sugar_phone(array('value' => $this->_tpl_vars['phone_value'],'usa_format' => '0'), $this);?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['phone_home']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_HOME_PHONE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="phone" field="phone_home" width='37.5%'  class="phone">
<?php if (! $this->_tpl_vars['fields']['phone_home']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (! empty ( $this->_tpl_vars['fields']['phone_home']['value'] )): ?>
<?php $this->assign('phone_value', $this->_tpl_vars['fields']['phone_home']['value']); ?>
<?php if ($this->_tpl_vars['phone_value'] != ''): ?>
<img style='cursor:pointer;vertical-align: sub;' src="custom/themes/default/images/dt_whatsapp_24.png" onclick="whatsapptonumber('<?php echo $this->_tpl_vars['phone_value']; ?>
','<?php echo $this->_tpl_vars['module']; ?>
','<?php echo $this->_tpl_vars['id']; ?>
');">
<?php endif; ?>
<?php echo smarty_function_sugar_phone(array('value' => $this->_tpl_vars['phone_value'],'usa_format' => '0'), $this);?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['messenger_type']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_MESSENGER_TYPE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="enum" field="messenger_type" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['messenger_type']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>



<?php if (is_string ( $this->_tpl_vars['fields']['messenger_type']['options'] )): ?>
<input type="hidden" class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['messenger_type']['name']; ?>
" value="<?php echo $this->_tpl_vars['fields']['messenger_type']['options']; ?>
">
<?php echo $this->_tpl_vars['fields']['messenger_type']['options']; ?>

<?php else: ?>
<input type="hidden" class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['messenger_type']['name']; ?>
" value="<?php echo $this->_tpl_vars['fields']['messenger_type']['value']; ?>
">
<?php echo $this->_tpl_vars['fields']['messenger_type']['options'][$this->_tpl_vars['fields']['messenger_type']['value']]; ?>

<?php endif; ?>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['messenger_id']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_MESSENGER_ID','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="messenger_id" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['messenger_id']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['messenger_id']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['messenger_id']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['messenger_id']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['messenger_id']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['messenger_id']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['address_street']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_ADDRESS_STREET','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="address_street" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['address_street']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['address_street']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_street']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_street']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['address_street']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['address_street']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['address_city']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_ADDRESS_CITY','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="address_city" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['address_city']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['address_city']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_city']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_city']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['address_city']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['address_city']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['address_state']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_ADDRESS_STATE','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="address_state" width='37.5%'  >
<?php if (! $this->_tpl_vars['fields']['address_state']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['address_state']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_state']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_state']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['address_state']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['address_state']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
&nbsp;
</td>
<td class="" type="" field="" width='37.5%'  >
</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['address_country']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_ADDRESS_COUNTRY','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="varchar" field="address_country" width='37.5%' colspan='3' >
<?php if (! $this->_tpl_vars['fields']['address_country']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<?php if (strlen ( $this->_tpl_vars['fields']['address_country']['value'] ) <= 0): ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_country']['default_value']); ?>
<?php else: ?>
<?php $this->assign('value', $this->_tpl_vars['fields']['address_country']['value']); ?>
<?php endif; ?> 
<span class="sugar_field" id="<?php echo $this->_tpl_vars['fields']['address_country']['name']; ?>
"><?php echo $this->_tpl_vars['fields']['address_country']['value']; ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed','start' => 0,'print' => false,'assign' => 'fieldsUsed'), $this);?>

<?php echo smarty_function_counter(array('name' => 'fieldsHidden','start' => 0,'print' => false,'assign' => 'fieldsHidden'), $this);?>

<?php ob_start(); ?>
<tr>
<?php echo smarty_function_counter(array('name' => 'fieldsUsed'), $this);?>

<td width='12.5%' scope="col">
<?php if (! $this->_tpl_vars['fields']['description']['hidden']): ?>
<?php ob_start(); ?><?php echo smarty_function_sugar_translate(array('label' => 'LBL_DESCRIPTION','module' => 'Users'), $this);?>
<?php $this->_smarty_vars['capture']['label'] = ob_get_contents();  $this->assign('label', ob_get_contents());ob_end_clean(); ?>
<?php echo ((is_array($_tmp=$this->_tpl_vars['label'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
<?php endif; ?>
</td>
<td class="inlineEdit" type="text" field="description" width='37.5%' colspan='3' >
<?php if (! $this->_tpl_vars['fields']['description']['hidden']): ?>
<?php echo smarty_function_counter(array('name' => 'panelFieldCount'), $this);?>


<span class="sugar_field" id="<?php echo ((is_array($_tmp=((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['fields']['description']['name'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')))) ? $this->_run_mod_handler('url2html', true, $_tmp) : url2html($_tmp)))) ? $this->_run_mod_handler('nl2br', true, $_tmp) : smarty_modifier_nl2br($_tmp)); ?>
"><?php echo ((is_array($_tmp=((is_array($_tmp=((is_array($_tmp=((is_array($_tmp=$this->_tpl_vars['fields']['description']['value'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')))) ? $this->_run_mod_handler('escape', true, $_tmp, 'html_entity_decode') : smarty_modifier_escape($_tmp, 'html_entity_decode')))) ? $this->_run_mod_handler('url2html', true, $_tmp) : url2html($_tmp)))) ? $this->_run_mod_handler('nl2br', true, $_tmp) : smarty_modifier_nl2br($_tmp)); ?>
</span>
<?php endif; ?>
<div class="inlineEditIcon"> <?php echo smarty_function_sugar_getimage(array('name' => "inline_edit_icon.svg",'attr' => 'border="0" ','alt' => ($this->_tpl_vars['alt_edit'])), $this);?>
</div>			</td>
</tr>
<?php $this->_smarty_vars['capture']['tr'] = ob_get_contents();  $this->assign('tableRow', ob_get_contents());ob_end_clean(); ?>
<?php if ($this->_tpl_vars['fieldsUsed'] > 0 && $this->_tpl_vars['fieldsUsed'] != $this->_tpl_vars['fieldsHidden']): ?>
<?php echo $this->_tpl_vars['tableRow']; ?>

<?php endif; ?>
</table>
<script type="text/javascript">SUGAR.util.doWhen("typeof initPanel == 'function'", function() { initPanel(2, 'expanded'); }); </script>
</div>
<?php if ($this->_tpl_vars['panelFieldCount'] == 0): ?>
<script>document.getElementById("LBL_EMPLOYEE_INFORMATION").style.display='none';</script>
<?php endif; ?>
<div id='tabcontent0'>
<div id="detailpanel_1" class="detail view  detail508 expanded">
<div id="settings">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span><?php echo $this->_tpl_vars['MOD']['LBL_USER_SETTINGS']; ?>
</span>
</h4>
</th>
</tr>
<tr>
<td scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_RECEIVE_NOTIFICATIONS'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><input class="checkbox" type="checkbox" disabled <?php echo $this->_tpl_vars['RECEIVE_NOTIFICATIONS']; ?>
></span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_RECEIVE_NOTIFICATIONS_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_REMINDER'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:
</td>
<!--
<td valign="top" nowrap><span><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "modules/Meetings/tpls/reminders.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></span></td>
-->
<td valign="top" nowrap>
<span><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "modules/Reminders/tpls/remindersDefaults.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_REMINDER_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td valign="top" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_MAILMERGE'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td valign="top" nowrap>
<span><input tabindex='3' name='mailmerge_on' disabled class="checkbox"
type="checkbox" <?php echo $this->_tpl_vars['MAILMERGE_ON']; ?>
></span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_MAILMERGE_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td valign="top" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_SETTINGS_URL'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td valign="top" nowrap>
<span><?php echo $this->_tpl_vars['SETTINGS_URL']; ?>
</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_SETTINGS_URL_DESC']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_EXPORT_DELIMITER'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['EXPORT_DELIMITER']; ?>
</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_EXPORT_DELIMITER_DESC']; ?>
</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_EXPORT_CHARSET'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['EXPORT_CHARSET_DISPLAY']; ?>
</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_EXPORT_CHARSET_DESC']; ?>
</span>
</td>
</tr>
<tr>
<td scope="row" valign="top">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_USE_REAL_NAMES'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><input tabindex='3' name='use_real_names' disabled class="checkbox"
type="checkbox" <?php echo $this->_tpl_vars['USE_REAL_NAMES']; ?>
></span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_USE_REAL_NAMES_DESC']; ?>
</span>
</td>
</tr>
<?php if ($this->_tpl_vars['DISPLAY_EXTERNAL_AUTH']): ?>
<tr>
<td scope="row" valign="top">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['EXTERNAL_AUTH_CLASS'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td valign="top" nowrap>
<span><input id="external_auth_only" name="external_auth_only" type="checkbox"
class="checkbox" <?php echo $this->_tpl_vars['EXTERNAL_AUTH_ONLY_CHECKED']; ?>
></span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_EXTERNAL_AUTH_ONLY']; ?>
 <?php echo $this->_tpl_vars['EXTERNAL_AUTH_CLASS']; ?>
</span>
</td>
</tr>
<?php endif; ?>
</table>
</div>
<div id='locale'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span><?php echo $this->_tpl_vars['MOD']['LBL_USER_LOCALE']; ?>
</span>
</h4>
</th>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_DATE_FORMAT'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['DATEFORMAT']; ?>
&nbsp;</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_DATE_FORMAT_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_TIME_FORMAT'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['TIMEFORMAT']; ?>
&nbsp;</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_TIME_FORMAT_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_TIMEZONE'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td nowrap>
<span><?php echo $this->_tpl_vars['TIMEZONE']; ?>
&nbsp;</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_ZONE_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_CURRENCY'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['CURRENCY_DISPLAY']; ?>
&nbsp;</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_CURRENCY_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_CURRENCY_SIG_DIGITS'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['CURRENCY_SIG_DIGITS']; ?>
&nbsp;</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_CURRENCY_SIG_DIGITS_DESC']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_NUMBER_GROUPING_SEP'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['NUM_GRP_SEP']; ?>
&nbsp;</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_NUMBER_GROUPING_SEP_TEXT']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_DECIMAL_SEP'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['DEC_SEP']; ?>
&nbsp;</span>
</td>
<td>
<span></span><?php echo $this->_tpl_vars['MOD']['LBL_DECIMAL_SEP_TEXT']; ?>
&nbsp;</td>
</tr>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_LOCALE_DEFAULT_NAME_FORMAT'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['NAME_FORMAT']; ?>
&nbsp;</span>
</td>
<td>
<span></span><?php echo $this->_tpl_vars['MOD']['LBL_LOCALE_NAME_FORMAT_DESC']; ?>
&nbsp;</td>
</tr>
</table>
</div>
<div id='calendar_options'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span><?php echo $this->_tpl_vars['MOD']['LBL_CALENDAR_OPTIONS']; ?>
</span>
</h4>
</th>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_PUBLISH_KEY'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td width="20%">
<span><?php echo $this->_tpl_vars['CALENDAR_PUBLISH_KEY']; ?>
&nbsp;</span>
</td>
<td width="65%">
<span><?php echo $this->_tpl_vars['MOD']['LBL_CHOOSE_A_KEY']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span>
<nobr><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_YOUR_PUBLISH_URL'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</nobr>
</span>
</td>
<td colspan=2><?php if ($this->_tpl_vars['CALENDAR_PUBLISH_KEY']): ?><?php echo $this->_tpl_vars['CALENDAR_PUBLISH_URL']; ?>
<?php else: ?><?php echo $this->_tpl_vars['MOD']['LBL_NO_KEY']; ?>
<?php endif; ?></td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_SEARCH_URL'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td colspan=2>
<span><?php if ($this->_tpl_vars['CALENDAR_PUBLISH_KEY']): ?><?php echo $this->_tpl_vars['CALENDAR_SEARCH_URL']; ?>
<?php else: ?><?php echo $this->_tpl_vars['MOD']['LBL_NO_KEY']; ?>
<?php endif; ?></span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_ICAL_PUB_URL'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
: <?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['MOD']['LBL_ICAL_PUB_URL_HELP']), $this);?>
</span>
</td>
<td colspan=2>
<span><?php if ($this->_tpl_vars['CALENDAR_PUBLISH_KEY']): ?><?php echo $this->_tpl_vars['CALENDAR_ICAL_URL']; ?>
<?php else: ?><?php echo $this->_tpl_vars['MOD']['LBL_NO_KEY']; ?>
<?php endif; ?></span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_FDOW'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><?php echo $this->_tpl_vars['FDOWDISPLAY']; ?>
&nbsp;</span>
</td>
<td>
<span></span><?php echo $this->_tpl_vars['MOD']['LBL_FDOW_TEXT']; ?>
&nbsp;</td>
</tr>
</table>
</div>
<div id='google_options'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th align="left" scope="row" colspan="4"><h4><?php echo $this->_tpl_vars['MOD']['LBL_GOOGLE_API_SETTINGS']; ?>
</h4></th>
</tr>
<tr>
<td width="17%" scope="row">
<slot><?php echo $this->_tpl_vars['MOD']['LBL_GOOGLE_API_TOKEN']; ?>
:</slot>&nbsp;<?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['MOD']['LBL_GOOGLE_API_TOKEN_HELP']), $this);?>

</td>
<td width="20%">
Current API Token is: <span style="color:<?php echo $this->_tpl_vars['GOOGLE_API_TOKEN_COLOR']; ?>
"><?php echo $this->_tpl_vars['GOOGLE_API_TOKEN']; ?>
</span>
</td>
<td width="63%">
<slot>&nbsp;</slot>
</td>
</tr>
<tr>
<td width="17%" scope="row">
<slot><?php echo $this->_tpl_vars['MOD']['LBL_GSYNC_CAL']; ?>
:</slot>
</td>
<td>
<slot><input class="checkbox" type="checkbox" disabled <?php echo $this->_tpl_vars['GSYNC_CAL']; ?>
></slot>
</td>
</tr>
</table>
</div>
<div id='edit_tabs'>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="detail view">
<tr>
<th colspan='4' align="left" width="100%" valign="top">
<h4>
<span><?php echo $this->_tpl_vars['MOD']['LBL_LAYOUT_OPTIONS']; ?>
</span>
</h4>
</th>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_USE_GROUP_TABS'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><input class="checkbox" type="checkbox" disabled <?php echo $this->_tpl_vars['USE_GROUP_TABS']; ?>
></span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_NAVIGATION_PARADIGM_DESCRIPTION']; ?>
&nbsp;</span>
</td>
</tr>
<tr>
<td width="15%" scope="row">
<span><?php echo ((is_array($_tmp=$this->_tpl_vars['MOD']['LBL_SUBPANEL_TABS'])) ? $this->_run_mod_handler('strip_semicolon', true, $_tmp) : smarty_modifier_strip_semicolon($_tmp)); ?>
:</span>
</td>
<td>
<span><input class="checkbox" type="checkbox" disabled <?php echo $this->_tpl_vars['SUBPANEL_TABS']; ?>
></span>
</td>
<td>
<span><?php echo $this->_tpl_vars['MOD']['LBL_SUBPANEL_TABS_DESCRIPTION']; ?>
&nbsp;</span>
</td>
</tr>
</table>
</div>
</div>
</div>
<div id='tabcontent1'>
<div id="detailpanel_2" class="detail view  detail508 expanded">
<div id="advanced">
<TABLE width='100%' class='detail view' border='0' cellpadding=0 cellspacing = 1  ><TR><td style="background: transparent;"></td><td style="text-align: center;" scope="row"><b>Acceso</b></td><td style="text-align: center;" scope="row"><b>Eliminar</b></td><td style="text-align: center;" scope="row"><b>Editar</b></td><td style="text-align: center;" scope="row"><b>Exportar</b></td><td style="text-align: center;" scope="row"><b>Importar</b></td><td style="text-align: center;" scope="row"><b>Listar</b></td><td style="text-align: center;" scope="row"><b>Actualización masiva</b></td><td style="text-align: center;" scope="row"><b>Ver</b></td></TR><TR><td nowrap width='1%' scope="row"><b>Actualizaciones de Casos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Alertas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Análisis dinámico</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Auditoría de Procesos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Base de Conocimiento</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Campañas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Casos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Clientes</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Contactos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Contratos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Correo electrónico - Plantillas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Correos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Cuentas de correo electrónico saliente</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Documentos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>EAPM</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Encuestas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Evento índice</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Eventos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Eventos de Casos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Facturas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Flujo de trabajo</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b></b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Gestión de Seguridad</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Incidencias</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Informes</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Informes programados</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>KB - Categorías</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Llamadas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Línea de sección de plantilla</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Mapas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Mapas - Caché de Direcciones</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Mapas - marcadores</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Mapas - Áreas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Marketing por Email</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Notas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Opciones de preguntas de encuesta</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Oportunidades</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>PDF - Plantillas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Plantillas de tareas de proyecto</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Preguntas de la encuesta</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Presupuestos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Productos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Productos - Categorías</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Prospectos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Proyectos</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Proyectos - Plantillas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Público Objetivo</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Público Objetivo - Listas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Reprogramación de llamadas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Respuestas a la encuesta</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Respuestas de preguntas de encuesta</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Reuniones</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Sticky Note</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Tareas</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Tareas de Proyecto</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Ubicaciones</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Usuarios</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR><TR><td nowrap width='1%' scope="row"><b>Índice</b></td><td  width='12.5%' align='center'><div align='center' class="aclEnabled"><b>Habilitado</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td><td  width='12.5%' align='center'><div align='center' class="aclAll"><b>Todo</b></div></td></TR></TABLE>
</div>
</div>
</div>
</div>

</form>
<script>SUGAR.util.doWhen("document.getElementById('form') != null",
        function(){SUGAR.util.buildAccessKeyLabels();});
</script><script type="text/javascript" src="include/InlineEditing/inlineEditing.js"></script>
<script type="text/javascript" src="modules/Favorites/favorites.js"></script>
<script type='text/javascript' src='<?php echo smarty_function_sugar_getjspath(array('file' => 'modules/Users/DetailView.js'), $this);?>
'></script>