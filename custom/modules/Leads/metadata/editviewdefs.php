<?php
$viewdefs ['Leads'] = 
array (
  'EditView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'hidden' => 
        array (
          0 => '<input type="hidden" name="prospect_id" value="{if isset($smarty.request.prospect_id)}{$smarty.request.prospect_id}{else}{$bean->prospect_id}{/if}">',
          1 => '<input type="hidden" name="account_id" value="{if isset($smarty.request.account_id)}{$smarty.request.account_id}{else}{$bean->account_id}{/if}">',
          2 => '<input type="hidden" name="contact_id" value="{if isset($smarty.request.contact_id)}{$smarty.request.contact_id}{else}{$bean->contact_id}{/if}">',
          3 => '<input type="hidden" name="opportunity_id" value="{if isset($smarty.request.opportunity_id)}{$smarty.request.opportunity_id}{else}{$bean->opportunity_id}{/if}">',
        ),
        'buttons' => 
        array (
          0 => 'SAVE',
          1 => 'CANCEL',
        ),
      ),
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
      'javascript' => '<script type="text/javascript" language="Javascript">function copyAddressRight(form)  {ldelim} form.alt_address_street.value = form.primary_address_street.value;form.alt_address_city.value = form.primary_address_city.value;form.alt_address_state.value = form.primary_address_state.value;form.alt_address_postalcode.value = form.primary_address_postalcode.value;form.alt_address_country.value = form.primary_address_country.value;return true; {rdelim} function copyAddressLeft(form)  {ldelim} form.primary_address_street.value =form.alt_address_street.value;form.primary_address_city.value = form.alt_address_city.value;form.primary_address_state.value = form.alt_address_state.value;form.primary_address_postalcode.value =form.alt_address_postalcode.value;form.primary_address_country.value = form.alt_address_country.value;return true; {rdelim} </script>',
      'useTabs' => false,
      'tabDefs' => 
      array (
        'LBL_CONTACT_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_PANEL_ADVANCED' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL1' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_PANEL_ASSIGNMENT' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
      'syncDetailEditViews' => true,
    ),
    'panels' => 
    array (
      'LBL_CONTACT_INFORMATION' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'first_name',
            'customCode' => '{html_options name="salutation" id="salutation" options=$fields.salutation.options selected=$fields.salutation.value}&nbsp;<input name="first_name"  id="first_name" size="25" maxlength="25" type="text" value="{$fields.first_name.value}">',
          ),
          1 => 'last_name',
        ),
        1 => 
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
        2 => 
        array (
          0 => 'description',
          1 => '',
        ),
        3 => 
        array (
          0 => 'phone_mobile',
          1 => 
          array (
            'name' => 'tiene_whatsapp_c',
            'label' => 'LBL_TIENE_WHATSAPP_C',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'phone_mobil_2_c',
            'label' => 'LBL_PHONE_MOBIL_2_C',
          ),
          1 => 
          array (
            'name' => 'phone_mobil_3_c',
            'label' => 'LBL_PHONE_MOBIL_3_C',
          ),
        ),
        5 => 
        array (
          0 => 'email1',
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'birthdate',
            'comment' => 'The birthdate of the contact',
            'label' => 'LBL_BIRTHDATE',
          ),
          1 => 
          array (
            'name' => 'sexo_c',
            'studio' => 'visible',
            'label' => 'LBL_SEXO_C',
          ),
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'primary_address_street',
            'hideLabel' => true,
            'type' => 'address',
            'displayParams' => 
            array (
              'key' => 'primary',
              'rows' => 2,
              'cols' => 30,
              'maxlength' => 150,
            ),
          ),
        ),
      ),
      'LBL_PANEL_ADVANCED' => 
      array (
        0 => 
        array (
          0 => 'status',
          1 => 
          array (
            'name' => 'status_description',
          ),
        ),
        1 => 
        array (
          0 => 'lead_source',
          1 => 
          array (
            'name' => 'lead_source_description',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'rubro_c',
            'studio' => 'visible',
            'label' => 'LBL_RUBRO_C',
          ),
          1 => 
          array (
            'name' => 'actividad_c',
            'studio' => 'visible',
            'label' => 'LBL_ACTIVIDAD_C',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'nuevo_rubro_c',
            'label' => 'LBL_NUEVO_RUBRO_C',
          ),
          1 => '',
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'tipo_lead_c',
            'studio' => 'visible',
            'label' => 'LBL_TIPO_LEAD_C',
          ),
          1 => 
          array (
            'name' => 'fecha_validex_c',
            'label' => 'LBL_FECHA_VALIDEX_C',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'tipo_cliente_c',
            'studio' => 'visible',
            'label' => 'LBL_TIPO_CLIENTE_C',
          ),
          1 => 
          array (
            'name' => 'etapas_c',
            'studio' => 'visible',
            'label' => 'LBL_ETAPAS',
          ),
        ),
      ),
      'lbl_editview_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'nombre_empresa_c',
            'label' => 'LBL_NOMBRE_EMPRESA_C',
          ),
          1 => 'phone_work',
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'nit_empresa_c',
            'label' => 'LBL_NIT_EMPRESA_C',
          ),
          1 => 
          array (
            'name' => 'email_empresa_c',
            'label' => 'LBL_EMAIL_EMPRESA_C',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'nombre_contacto_c',
            'label' => 'LBL_NOMBRE_CONTACTO_C',
          ),
          1 => 
          array (
            'name' => 'direccion_empresa_c',
            'label' => 'LBL_DIRECCION_EMPRESA_C',
          ),
        ),
      ),
      'LBL_PANEL_ASSIGNMENT' => 
      array (
        0 => 
        array (
          0 => 'refered_by',
          1 => 'campaign_name',
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO',
          ),
        ),
      ),
    ),
  ),
);
;
?>
