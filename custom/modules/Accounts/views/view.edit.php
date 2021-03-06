<?php 
	require_once 'include/MVC/View/views/view.edit.php'; 
	class AccountsViewEdit extends ViewEdit {
	 public function __construct() {
        parent::ViewEdit();
    	}
	public function display()
	{
		parent::display();
		global $sugar_config;
		echo '<script type="text/javascript" src="custom/modules/Accounts/JavaScript/Prevent_Account.js"></script>';
	}	    
}    
?>
