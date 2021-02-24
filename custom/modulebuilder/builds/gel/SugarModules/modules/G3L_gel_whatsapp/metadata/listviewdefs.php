<?php
$module_name = 'G3L_gel_whatsapp';
$listViewDefs [$module_name] = 
array (
  'NAME' => 
  array (
    'width' => '32%',
    'label' => 'LBL_NAME',
    'default' => true,
    'link' => true,
  ),
  'ASSIGNED_USER_NAME' => 
  array (
    'width' => '9%',
    'label' => 'LBL_ASSIGNED_TO_NAME',
    'module' => 'Employees',
    'id' => 'ASSIGNED_USER_ID',
    'default' => true,
  ),
  'NUMERO_ENVIO' => 
  array (
    'type' => 'phone',
    'label' => 'LBL_NUMERO_ENVIO',
    'width' => '10%',
    'default' => true,
  ),
  'FECHA_ENVIO' => 
  array (
    'type' => 'datetimecombo',
    'label' => 'LBL_FECHA_ENVIO',
    'width' => '10%',
    'default' => true,
  ),
  'ESTADO_ENVIO' => 
  array (
    'type' => 'varchar',
    'default' => false,
    'label' => 'LBL_ESTADO_ENVIO',
    'width' => '10%',
  ),
);
;
?>
