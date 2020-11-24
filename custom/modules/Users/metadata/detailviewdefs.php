<?php
$viewdefs ['Users'] = 
array (
  'DetailView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'buttons' => 
        array (
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
        'LBL_USER_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EMPLOYEE_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
      'syncDetailEditViews' => true,
    ),
    'useTabs' => true,
    'tabDefs' => 
    array (
      'LBL_USER_INFORMATION' => 
      array (
        'newTab' => true,
        'panelDefault' => 'expanded',
      ),
      'LBL_EMPLOYEE_INFORMATION' => 
      array (
        'newTab' => true,
        'panelDefault' => 'expanded',
      ),
    ),
    'panels' => 
    array (
      'LBL_USER_INFORMATION' => 
      array (
        0 => 
        array (
          0 => 'user_name',
          1 => 
          array (
            'name' => 'first_name',
            'label' => 'LBL_FIRST_NAME',
          ),
        ),
        1 => 
        array (
          0 => 'status',
          1 => 
          array (
            'name' => 'last_name',
            'label' => 'LBL_LAST_NAME',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'codigo_agenda_c',
            'label' => 'LBL_CODIGO_AGENDA',
          ),
          1 => '',
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'UserType',
            'customCode' => '{$USER_TYPE_READONLY}',
          ),
        ),
        4 => 
        array (
          0 => 'photo',
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'factor_auth',
            'label' => 'LBL_FACTOR_AUTH',
          ),
        ),
      ),
      'LBL_EMPLOYEE_INFORMATION' => 
      array (
        0 => 
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
        1 => 
        array (
          0 => 'employee_status',
          1 => 'show_on_employees',
        ),
        2 => 
        array (
          0 => 'title',
          1 => 'phone_work',
        ),
        3 => 
        array (
          0 => 'department',
          1 => 'phone_mobile',
        ),
        4 => 
        array (
          0 => 'reports_to_name',
          1 => 'phone_other',
        ),
        5 => 
        array (
          0 => '',
          1 => 'phone_fax',
        ),
        6 => 
        array (
          0 => '',
          1 => 'phone_home',
        ),
        7 => 
        array (
          0 => 'messenger_type',
          1 => 'messenger_id',
        ),
        8 => 
        array (
          0 => 'address_street',
          1 => 'address_city',
        ),
        9 => 
        array (
          0 => 'address_state',
          1 => '',
        ),
        10 => 
        array (
          0 => 'address_country',
        ),
        11 => 
        array (
          0 => 'description',
        ),
      ),
    ),
  ),
);
;
?>
