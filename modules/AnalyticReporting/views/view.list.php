<?php

/**
 * List view
 */
class AnalyticReportingViewList extends SugarView {

	public function display() {
		global $mod_strings;

		$this->ss->assign('MOD', $mod_strings);
		$this->ss->assign('DICTIONARY', json_encode($mod_strings)); // #5286 - JSON object of translations (should merge with app_strings)
		$this->ss->assign("TOGGLEHIDDEN", $this->view_object_map['toggleHidden']);
		// #5543 [start] - hide report list for invalid key
		global $keyIsInvalid;
		if(!isset($keyIsInvalid)){
			$this->ss->assign("REPORTTREE", $this->view_object_map['reportTreeData']);
		}else{
			echo $keyIsInvalid;
		}
		// #5543 [end]
		$this->ss->assign("DELETABLE_REPORTS", $this->view_object_map['reportTreeDeletable']);
		$this->ss->assign("REPORTSCHEDULEUSERS", $this->view_object_map['REPORTSCHEDULEUSERS']);
		$this->ss->assign("REPORTACCESSUSERS", $this->view_object_map['REPORTACCESSUSERS']);
		$this->ss->assign("REPORTUSERS", $this->view_object_map['REPORTUSERS']);
		$this->ss->assign("isAdmin", $this->view_object_map['isAdmin']);

		echo $this->ss->fetch('modules/AnalyticReporting/templates/main.tpl');
	}
}