<?php 
require_once 'include/MVC/View/views/view.edit.php'; 
class ContactsViewEdit extends ViewEdit {
	 public function __construct() {
        parent::ViewEdit();
        $this->useForSubpanel = true;
        $this->useModuleQuickCreateTemplate = true;
    }
	public function display()
	{
		parent::display();
		
		global $sugar_config;
		
		echo '<script type="text/javascript" src="custom/modules/Contacts/JavaScript/Prevent_Contact.js"></script>';
    }
}    
?>
