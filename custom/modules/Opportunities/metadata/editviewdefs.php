<?php
$viewdefs ['Opportunities'] = 
array (
  'EditView' => 
  array (
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
      'javascript' => '{$PROBABILITY_SCRIPT}',
      'useTabs' => false,
      'tabDefs' => 
      array (
        'DEFAULT' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL2' => 
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
      'syncDetailEditViews' => false,
    ),
    'panels' => 
    array (
      'default' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'name',
          ),
        ),
        1 => 
        array (
          0 => 'description',
        ),
        2 => 
        array (
          0 => 'opportunity_type',
          1 => 
          array (
            'name' => 'tipo_venta_c',
            'studio' => 'visible',
            'label' => 'LBL_TIPO_VENTA_C',
          ),
        ),
        3 => 
        array (
          0 => 'probability',
          1 => 'lead_source',
        ),
        4 => 
        array (
          0 => 'sales_stage',
          1 => 
          array (
            'name' => 'date_closed',
          ),
        ),
        5 => 
        array (
          0 => '',
          1 => '',
        ),
      ),
      'lbl_editview_panel2' => 
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
            'name' => 'ubicacion_c',
            'label' => 'LBL_UBICACION_C',
          ),
          1 => 
          array (
            'name' => 'superficie_c',
            'label' => 'LBL_SUPERFICIE',
          ),
        ),
      ),
      'lbl_editview_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'currency_id',
            'label' => 'LBL_CURRENCY',
          ),
          1 => 
          array (
            'name' => 'amount',
          ),
        ),
        1 => 
        array (
          0 => '',
          1 => '',
        ),
      ),
      'LBL_PANEL_ASSIGNMENT' => 
      array (
        0 => 
        array (
          0 => 'account_name',
        ),
        1 => 
        array (
          0 => 'assigned_user_name',
        ),
      ),
    ),
  ),
);
;
?>
