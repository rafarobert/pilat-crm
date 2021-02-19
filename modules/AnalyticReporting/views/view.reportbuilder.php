<?php

/**
 * List view
 */
class AnalyticReportingViewReportbuilder extends SugarView {

	public function display() {

		foreach($this->view_object_map as $key => $value) {
			$this->ss->assign($key, $value);
		}
		if($_REQUEST['parenttab'] == "settings"){
			echo $this->ss->fetch('modules/AnalyticReporting/templates/ReportBuilder/settings.tpl');
			//default index view
		}else{
			echo $this->ss->fetch('modules/AnalyticReporting/templates/ReportBuilder/main.tpl');
		}
	}
}