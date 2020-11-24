<?php
// created: 2019-03-29 15:36:36
$viewdefs['Employees']['EditView'] = array (
  'templateMeta' => 
  array (
    'maxColumns' => '2',
    'widths' => 
    array (
      0 => 
      array (
        'label' => '10',
        'field' => '30',
      ),
      1 => 
      array (
        'label' => '10',
        'field' => '30',
      ),
    ),
    'useTabs' => true,
    'tabDefs' => 
    array (
      'DEFAULT' => 
      array (
        'newTab' => true,
        'panelDefault' => 'expanded',
      ),
    ),
    'syncDetailEditViews' => false,
  ),
  'panels' => 
  array (
    'default' => 
    array (
      0 => 
      array (
        0 => 'employee_status',
      ),
      1 => 
      array (
        0 => 
        array (
          'name' => 'codigo_agenda_c',
          'label' => 'LBL_CODIGO_AGENDA',
        ),
        1 => '',
      ),
      2 => 
      array (
        0 => 
        array (
          'name' => 'numero_documento_c',
          'label' => 'LBL_NUMERO_DOCUMENTO',
        ),
        1 => 
        array (
          'name' => 'extension_documento_c',
          'studio' => 'visible',
          'label' => 'LBL_EXTENSION_DOCUMENTO',
        ),
      ),
      3 => 
      array (
        0 => 'first_name',
        1 => 
        array (
          'name' => 'last_name',
          'displayParams' => 
          array (
            'required' => true,
          ),
        ),
      ),
      4 => 
      array (
        0 => 
        array (
          'name' => 'title',
          'customCode' => '{if $EDIT_REPORTS_TO}<input type="text" name="{$fields.title.name}" id="{$fields.title.name}" size="30" maxlength="50" value="{$fields.title.value}" title="" tabindex="t" >{else}{$fields.title.value}<input type="hidden" name="{$fields.title.name}" id="{$fields.title.name}" value="{$fields.title.value}">{/if}',
        ),
        1 => 
        array (
          'name' => 'phone_work',
          'label' => 'LBL_OFFICE_PHONE',
        ),
      ),
      5 => 
      array (
        0 => 
        array (
          'name' => 'department',
          'customCode' => '{if $EDIT_REPORTS_TO}<input type="text" name="{$fields.department.name}" id="{$fields.department.name}" size="30" maxlength="50" value="{$fields.department.value}" title="" tabindex="t" >{else}{$fields.department.value}<input type="hidden" name="{$fields.department.name}" id="{$fields.department.name}" value="{$fields.department.value}">{/if}',
        ),
        1 => 'phone_mobile',
      ),
      6 => 
      array (
        0 => 
        array (
          'name' => 'reports_to_name',
          'label' => 'LBL_REPORTS_TO_NAME',
          'customCode' => '{if $EDIT_REPORTS_TO}<input type="text" name="{$fields.reports_to_name.name}" class="sqsEnabled" tabindex="0" id="{$fields.reports_to_name.name}" size="" value="{$fields.reports_to_name.value}" title="" autocomplete="off" >{$REPORTS_TO_JS}<input type="hidden" name="{$fields.reports_to_id.name}" id="{$fields.reports_to_id.name}" value="{$fields.reports_to_id.value}"> <span class="id-ff multiple"><button type="button" name="btn_{$fields.reports_to_name.name}" tabindex="0" title="{$APP.LBL_SELECT_BUTTON_TITLE}" class="button firstChild" value="{$APP.LBL_SELECT_BUTTON_LABEL}" onclick=\'open_popup("{$fields.reports_to_name.module}", 600, 400, "", true, false, {literal}{"call_back_function":"set_return","form_name":"EditView","field_to_name_array":{"id":"reports_to_id","name":"reports_to_name"}}{/literal}, "single", true);\'><span class="suitepicon suitepicon-action-select"></span></button><button type="button" name="btn_clr_{$fields.reports_to_name.name}" tabindex="0" title="{$APP.LBL_CLEAR_BUTTON_TITLE}" class="button lastChild" onclick="this.form.{$fields.reports_to_name.name}.value = \'\'; this.form.{$fields.reports_to_id.name}.value = \'\';" value="{$APP.LBL_CLEAR_BUTTON_LABEL}"><span class="suitepicon suitepicon-action-clear"></span></button></span>{else}{$fields.reports_to_name.value}<input type="hidden" name="{$fields.reports_to_id.name}" id="{$fields.reports_to_id.name}" value="{$fields.reports_to_id.value}">{/if}',
        ),
        1 => 'phone_other',
      ),
      7 => 
      array (
        0 => 'phone_home',
        1 => 
        array (
          'name' => 'phone_fax',
          'label' => 'LBL_FAX',
        ),
      ),
      8 => 
      array (
        0 => 'messenger_type',
        1 => 'messenger_id',
      ),
      9 => 
      array (
        0 => 
        array (
          'name' => 'description',
          'label' => 'LBL_NOTES',
        ),
      ),
      10 => 
      array (
        0 => 
        array (
          'name' => 'address_street',
          'type' => 'text',
          'label' => 'LBL_PRIMARY_ADDRESS',
          'displayParams' => 
          array (
            'rows' => 2,
            'cols' => 30,
          ),
        ),
        1 => 
        array (
          'name' => 'address_city',
          'label' => 'LBL_CITY',
        ),
      ),
      11 => 
      array (
        0 => 
        array (
          'name' => 'address_state',
          'label' => 'LBL_STATE',
        ),
        1 => '',
      ),
      12 => 
      array (
        0 => 
        array (
          'name' => 'address_country',
          'label' => 'LBL_COUNTRY',
        ),
      ),
      13 => 
      array (
        0 => 
        array (
          'name' => 'email1',
          'label' => 'LBL_EMAIL',
        ),
      ),
    ),
  ),
);