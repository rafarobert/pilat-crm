<?php
$module_name = 'G3L_gel_email';
$viewdefs [$module_name] = 
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
      'useTabs' => false,
      'tabDefs' => 
      array (
        'LBL_EDITVIEW_PANEL1' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'DEFAULT' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
    ),
    'panels' => 
    array (
      'lbl_editview_panel1' => 
      array (
        0 => 
        array (
          0 => 'name',
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'correo_electronico',
            'label' => 'LBL_CORREO_ELECTRONICO',
          ),
          1 => 
          array (
            'name' => 'fecha_envio',
            'label' => 'LBL_FECHA_ENVIO',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'estado_envio',
            'label' => 'LBL_ESTADO_ENVIO',
          ),
          1 => 
          array (
            'name' => 'parent_name',
            'studio' => 'visible',
            'label' => 'LBL_PARENT_NAME',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'mensaje',
            'studio' => 'visible',
            'label' => 'LBL_MENSAJE',
          ),
          1 => '',
        ),
      ),
      'default' => 
      array (
        0 => 
        array (
          0 => 'assigned_user_name',
        ),
        1 => 
        array (
          0 => 'description',
        ),
      ),
    ),
  ),
);
;
?>
