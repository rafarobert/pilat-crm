/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:07 GMT-0400 (Bolivia Time)
 * Time: 2:41:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:7
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.analyticReporting', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'analytic-reporting.List',
		'analytic-reporting.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'analytic_reporting'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'analyticReportingList',
			selector: 'analyticReportingList'
		},
		{
			ref: 'analyticReportingAdd',
			selector: 'analyticReportingAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'analyticReportingList > toolbar > button#add': {
				click: me.onAnalyticReportingAddClick
			},
			'analyticReportingList':{
				removeRow: me.removeRow
			},
			'analyticReportingAdd > form > button#save': {
				click: me.onAnalyticReportingAddSaveClick
			},
			'analyticReportingAdd > form > button#cancel': {
				click: me.onAnalyticReportingAddCancelClick
			}
			//</es-section>
		});
	},
	removeRow: function(grid, rowIndex, colIndex){
		//<es-section>
		Ext.Msg.confirm('Confirm', 'Remove?', function(button) {
			if (button === 'yes') {
				grid.getStore().removeAt(rowIndex);
			}
		});
		//</es-section>
	},
	onAnalyticReportingAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAnalyticReportingAdd().destroy();
		//</es-section>
	},
	onAnalyticReportingAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAnalyticReportingAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAnalyticReportingList().getStore().add(rec);

			me.getAnalyticReportingAdd().destroy();
		}
		//</es-section>
	},
	onAnalyticReportingAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('analyticReportingAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.analyticReporting());
		//</es-section>
	}
});
