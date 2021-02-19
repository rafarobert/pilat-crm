/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Time: 2:41:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:26
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aorReports', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aor-reports.List',
		'aor-reports.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aor_reports'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aorReportsList',
			selector: 'aorReportsList'
		},
		{
			ref: 'aorReportsAdd',
			selector: 'aorReportsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aorReportsList > toolbar > button#add': {
				click: me.onAorReportsAddClick
			},
			'aorReportsList':{
				removeRow: me.removeRow
			},
			'aorReportsAdd > form > button#save': {
				click: me.onAorReportsAddSaveClick
			},
			'aorReportsAdd > form > button#cancel': {
				click: me.onAorReportsAddCancelClick
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
	onAorReportsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAorReportsAdd().destroy();
		//</es-section>
	},
	onAorReportsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAorReportsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAorReportsList().getStore().add(rec);

			me.getAorReportsAdd().destroy();
		}
		//</es-section>
	},
	onAorReportsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aorReportsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aorReports());
		//</es-section>
	}
});
