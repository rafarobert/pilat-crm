<?php

$manifest = array (
  0 => 
  array (
    'acceptable_sugar_versions' => 
    array (
      0 => '',
    ),
  ),
  1 => 
  array (
    'acceptable_sugar_flavors' => 
    array (
      0 => 'CE',
    ),
  ),
  'readme' => '',
  'key' => 'sp_modules',
  'author' => 'IAD',
  'description' => '',
  'icon' => '',
  'is_uninstallable' => true,
  'name' => 'Sugar-project Theme modules Pro',
  'published_date' => '2018-05-04 00:00:00',
  'type' => 'module',
	'version' => '8.571',
  'remove_tables' => 'prompt',
);


$installdefs = array (
  'id' => 'Sticky_Notes',
  'beans' => 
  array (
    0 => 
    array (
      'module' => 'IAD_Sticky_Notes',
      'class' => 'IAD_Sticky_Notes',
      'path' => 'modules/IAD_Sticky_Notes/IAD_Sticky_Notes.php',
      'tab' => true,
    ),
  ),
  'layoutdefs' => 
  array (
  ),
  'relationships' => 
  array (
  ),
  'pre_execute'=>array(
        0 => '<basepath>/actions/pre_install_actions.php',
  ),
  'pre_uninstall'=>array(
        0 => '<basepath>/actions/pre_uninstall_actions.php',
   ),   
  'image_dir' => '<basepath>/icons',
  'copy' => 
  array (
 
    array (
      'from' => '<basepath>/SugarModules/modules/IAD_Sticky_Notes',
      'to' => 'modules/IAD_Sticky_Notes',
    ),
 
    array(
      'from' => '<basepath>/custom/modules/IAD_Sticky_Notes',
      'to' => 'custom/modules/IAD_Sticky_Notes',
    ),

    array(
              'from' => '<basepath>/logic_hook/SpTheme_return_dialogcls.php',
              'to' => 'custom/modules/SpTheme_return_dialogcls.php',
    ),   
    array(
              'from' => '<basepath>/logic_hook/ListViewCalculator.php',
              'to' => 'custom/modules/ListViewCalculator.php',
    ),   
    array(
              'from' => '<basepath>/logic_hook/jsgrid_epr.php',
              'to' => 'custom/modules/jsgrid_epr.php',
    ),   

    array (
            'from' => '<basepath>/SugarModules/modules/Administration',
            'to' => 'modules/Administration',
        ),
   ),
  'language' => 
  array (
    0 => 
    array (
      'from' => '<basepath>/SugarModules/language/application/en_us.lang.php',
      'to_module' => 'application',
      'language' => 'en_us',
    ),  
    1 => 
     array(
          'from'=> '<basepath>/language/administration.en_us.php',
          'to_module'=> 'Administration',
          'language'=>'en_us'
        ),     
  ),
  'entrypoints' => array ( 
        array ( 
            'from' => '<basepath>/custom/modules/sp_theme_jsgrid.php',    
            'to_module' => 'application',                                
            ), 
    ),  
  'administration'=> array(
        array(
            'from'=>'<basepath>/administration/sp_theme_settings.php',
        ),                                     
  ),
  'logic_hooks' => array(
    // global logic hook
    array( 
      'module' => '',
      'hook' => 'after_save',
      'order' => 60,
      'description' => 'Sugar-Project redirect from dialog',
      'file' => 'custom/modules/SpTheme_return_dialogcls.php',
      'class' => 'SpTheme_return_dialogcls',
      'function' => 'return_dialog',
    ),  
    // global logic hook
    array( 
      'module' => '',
      'hook' => 'after_ui_frame',
      'order' => 67,
      'description' => 'SugarShape Calculator',
      'file' => 'custom/modules/ListViewCalculator.php',
      'class' => 'ListViewCalculatorCls',
      'function' => 'ListViewCalculator',
    ),  
  ),  
);
