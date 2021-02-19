/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:27 GMT-0400 (Bolivia Time)
 * Time: 2:41:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:27 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:27
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aorReportsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aor-reports-audit.List',
		'aor-reports-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aor_reports_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aorReportsAuditList',
			selector: 'aorReportsAuditList'
		},
		{
			ref: 'aorReportsAuditAdd',
			selector: 'aorReportsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aorReportsAuditList > toolbar > button#add': {
				click: me.onAorReportsAuditAddClick
			},
			'aorReportsAuditList':{
				removeRow: me.removeRow
			},
			'aorReportsAuditAdd > form > button#save': {
				click: me.onAorReportsAuditAddSaveClick
			},
			'aorReportsAuditAdd > form > button#cancel': {
				click: me.onAorReportsAuditAddCancelClick
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
	onAorReportsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAorReportsAuditAdd().destroy();
		//</es-section>
	},
	onAorReportsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAorReportsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAorReportsAuditList().getStore().add(rec);

			me.getAorReportsAuditAdd().destroy();
		}
		//</es-section>
	},
	onAorReportsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aorReportsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aorReportsAudit());
		//</es-section>
	}
});
