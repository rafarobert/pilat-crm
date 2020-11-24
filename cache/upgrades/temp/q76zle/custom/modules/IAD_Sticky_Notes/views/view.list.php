<?php if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

require_once('include/MVC/View/views/view.list.php');

class IAD_Sticky_NotesViewList extends ViewList {

public function __construct(){
         parent::SugarView();
     }

  function listViewProcess() 
        {
            
            global $current_user;

            $this->processSearchForm();
            $this->params['custom_where'] = " AND iad_sticky_notes.assigned_user_id='".$current_user->id."'";

            if (empty($_REQUEST['search_form_only']) || $_REQUEST['search_form_only'] == false) {
                $this->lv->setup($this->seed, 'include/ListView/ListViewGeneric.tpl', $this->where, $this->params);
                $savedSearchName = empty($_REQUEST['saved_search_select_name']) ? '' : (' - ' . $_REQUEST['saved_search_select_name']);
                echo $this->lv->display();
            }
        }

}
