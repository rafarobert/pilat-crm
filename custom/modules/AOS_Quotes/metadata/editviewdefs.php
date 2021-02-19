<?php
$module_name = 'AOS_Quotes';
$_object_name = 'aos_quotes';
$viewdefs [$module_name] = 
array (
  'EditView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
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
      'useTabs' => false,
      'tabDefs' => 
      array (
        'LBL_ACCOUNT_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL1' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_LINE_ITEMS' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_ADDRESS_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
    ),
    'panels' => 
    array (
      'lbl_account_information' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'name',
            'displayParams' => 
            array (
              'required' => true,
            ),
            'label' => 'LBL_NAME',
          ),
          1 => 
          array (
            'name' => 'number',
            'label' => 'LBL_QUOTE_NUMBER',
            'customCode' => '{$fields.number.value}',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'stage',
            'label' => 'LBL_STAGE',
          ),
          1 => 
          array (
            'name' => 'expiration',
            'label' => 'LBL_EXPIRATION',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'approval_status',
            'label' => 'LBL_APPROVAL_STATUS',
          ),
          1 => 
          array (
            'name' => 'approval_issue',
            'label' => 'LBL_APPROVAL_ISSUE',
          ),
        ),
        3 => 
        array (
          0 => '',
          1 => '',
        ),
      ),
      'lbl_editview_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'unidad_industrial_c',
            'label' => 'LBL_UNIDAD_INDUSTRIAL_C',
          ),
          1 => 
          array (
            'name' => 'manzano_c',
            'label' => 'LBL_MANZANO_C',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'lbl_superficie_c',
            'label' => 'LBL_LBL_SUPERFICIE_C',
          ),
          1 => 
          array (
            'name' => 'ubicacion_c',
            'label' => 'LBL_UBICACION_C',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'frente_metros_c',
            'label' => 'LBL_FRENTE_METROS_C',
          ),
          1 => 
          array (
            'name' => 'fondo_metros_c',
            'label' => 'LBL_FONDO_METROS_C',
          ),
        ),
      ),
      'lbl_line_items' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'lbl_tipoventa_c',
            'studio' => 'visible',
            'label' => 'LBL_LBL_TIPOVENTA_C',
          ),
          1 => 
          array (
            'name' => 'moneda_c',
            'studio' => 'visible',
            'label' => 'LBL_MONEDA_C',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'tipo_pago_c',
            'studio' => 'visible',
            'label' => 'LBL_TIPO_PAGO_C',
          ),
          1 => 
          array (
            'name' => 'term_years_c',
            'studio' => 'visible',
            'label' => 'LBL_TERM_YEARS_C',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'precio_mcuadrado_c',
            'label' => 'LBL_PRECIO_MCUADRADO_C',
          ),
          1 => 
          array (
            'name' => 'total_amt',
            'label' => 'LBL_TOTAL_AMT',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'lbl_cuotainicial_c',
            'label' => 'LBL_LBL_CUOTAINICIAL_C',
          ),
          1 => 
          array (
            'name' => 'discount_amount',
            'label' => 'LBL_DISCOUNT_AMOUNT',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'saldo_c',
            'label' => 'LBL_SALDO_C',
          ),
          1 => '',
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'invoice_status',
            'label' => 'LBL_INVOICE_STATUS',
          ),
          1 => 
          array (
            'name' => 'fecha_envio_programada_c',
            'label' => 'LBL_FECHA_ENVIO_PROGRAMADA',
          ),
        ),
        6 => 
        array (
          0 => '',
        ),
        7 => 
        array (
          0 => '',
          1 => '',
        ),
        8 => 
        array (
          0 => '',
          1 => '',
        ),
      ),
      'lbl_address_information' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO_NAME',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'billing_account',
            'label' => 'LBL_BILLING_ACCOUNT',
            'displayParams' => 
            array (
              'key' => 
              array (
                0 => 'billing',
                1 => 'shipping',
              ),
              'copy' => 
              array (
                0 => 'billing',
                1 => 'shipping',
              ),
              'billingKey' => 'billing',
              'shippingKey' => 'shipping',
            ),
          ),
          1 => 
          array (
            'name' => 'billing_contact',
            'label' => 'LBL_BILLING_CONTACT',
            'displayParams' => 
            array (
              'initial_filter' => '&account_name="+this.form.{$fields.billing_account.name}.value+"',
            ),
          ),
        ),
        2 => 
        array (
          0 => '',
          1 => '',
        ),
        3 => 
        array (
          0 => '',
          1 => '',
        ),
      ),
    ),
  ),
);
;
?>