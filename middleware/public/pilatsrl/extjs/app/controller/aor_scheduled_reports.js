/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:28 GMT-0400 (Bolivia Time)
 * Time: 2:41:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:28
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aorScheduledReports', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aor-scheduled-reports.List',
		'aor-scheduled-reports.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aor_scheduled_reports'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aorScheduledReportsList',
			selector: 'aorScheduledReportsList'
		},
		{
			ref: 'aorScheduledReportsAdd',
			selector: 'aorScheduledReportsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aorScheduledReportsList > toolbar > button#add': {
				click: me.onAorScheduledReportsAddClick
			},
			'aorScheduledReportsList':{
				removeRow: me.removeRow
			},
			'aorScheduledReportsAdd > form > button#save': {
				click: me.onAorScheduledReportsAddSaveClick
			},
			'aorScheduledReportsAdd > form > button#cancel': {
				click: me.onAorScheduledReportsAddCancelClick
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
	onAorScheduledReportsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAorScheduledReportsAdd().destroy();
		//</es-section>
	},
	onAorScheduledReportsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAorScheduledReportsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAorScheduledReportsList().getStore().add(rec);

			me.getAorScheduledReportsAdd().destroy();
		}
		//</es-section>
	},
	onAorScheduledReportsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aorScheduledReportsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aorScheduledReports());
		//</es-section>
	}
});
