/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:20 GMT-0400 (Bolivia Time)
 * Time: 2:41:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:20
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aopCaseEventsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aop-case-events-audit.List',
		'aop-case-events-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aop_case_events_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aopCaseEventsAuditList',
			selector: 'aopCaseEventsAuditList'
		},
		{
			ref: 'aopCaseEventsAuditAdd',
			selector: 'aopCaseEventsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aopCaseEventsAuditList > toolbar > button#add': {
				click: me.onAopCaseEventsAuditAddClick
			},
			'aopCaseEventsAuditList':{
				removeRow: me.removeRow
			},
			'aopCaseEventsAuditAdd > form > button#save': {
				click: me.onAopCaseEventsAuditAddSaveClick
			},
			'aopCaseEventsAuditAdd > form > button#cancel': {
				click: me.onAopCaseEventsAuditAddCancelClick
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
	onAopCaseEventsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAopCaseEventsAuditAdd().destroy();
		//</es-section>
	},
	onAopCaseEventsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAopCaseEventsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAopCaseEventsAuditList().getStore().add(rec);

			me.getAopCaseEventsAuditAdd().destroy();
		}
		//</es-section>
	},
	onAopCaseEventsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aopCaseEventsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aopCaseEventsAudit());
		//</es-section>
	}
});
