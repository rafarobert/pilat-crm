/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Time: 2:42:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.callsRescheduleAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'calls-reschedule-audit.List',
		'calls-reschedule-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'calls_reschedule_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'callsRescheduleAuditList',
			selector: 'callsRescheduleAuditList'
		},
		{
			ref: 'callsRescheduleAuditAdd',
			selector: 'callsRescheduleAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'callsRescheduleAuditList > toolbar > button#add': {
				click: me.onCallsRescheduleAuditAddClick
			},
			'callsRescheduleAuditList':{
				removeRow: me.removeRow
			},
			'callsRescheduleAuditAdd > form > button#save': {
				click: me.onCallsRescheduleAuditAddSaveClick
			},
			'callsRescheduleAuditAdd > form > button#cancel': {
				click: me.onCallsRescheduleAuditAddCancelClick
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
	onCallsRescheduleAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCallsRescheduleAuditAdd().destroy();
		//</es-section>
	},
	onCallsRescheduleAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCallsRescheduleAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCallsRescheduleAuditList().getStore().add(rec);

			me.getCallsRescheduleAuditAdd().destroy();
		}
		//</es-section>
	},
	onCallsRescheduleAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('callsRescheduleAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.callsRescheduleAudit());
		//</es-section>
	}
});
