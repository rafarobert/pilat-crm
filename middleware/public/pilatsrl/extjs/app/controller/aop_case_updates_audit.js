/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:22 GMT-0400 (Bolivia Time)
 * Time: 2:41:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:22
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aopCaseUpdatesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aop-case-updates-audit.List',
		'aop-case-updates-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aop_case_updates_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aopCaseUpdatesAuditList',
			selector: 'aopCaseUpdatesAuditList'
		},
		{
			ref: 'aopCaseUpdatesAuditAdd',
			selector: 'aopCaseUpdatesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aopCaseUpdatesAuditList > toolbar > button#add': {
				click: me.onAopCaseUpdatesAuditAddClick
			},
			'aopCaseUpdatesAuditList':{
				removeRow: me.removeRow
			},
			'aopCaseUpdatesAuditAdd > form > button#save': {
				click: me.onAopCaseUpdatesAuditAddSaveClick
			},
			'aopCaseUpdatesAuditAdd > form > button#cancel': {
				click: me.onAopCaseUpdatesAuditAddCancelClick
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
	onAopCaseUpdatesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAopCaseUpdatesAuditAdd().destroy();
		//</es-section>
	},
	onAopCaseUpdatesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAopCaseUpdatesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAopCaseUpdatesAuditList().getStore().add(rec);

			me.getAopCaseUpdatesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAopCaseUpdatesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aopCaseUpdatesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aopCaseUpdatesAudit());
		//</es-section>
	}
});
