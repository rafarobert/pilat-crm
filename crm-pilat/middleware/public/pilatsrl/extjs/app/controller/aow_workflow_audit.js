/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:57 GMT-0400 (Bolivia Time)
 * Time: 2:41:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:57
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aowWorkflowAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aow-workflow-audit.List',
		'aow-workflow-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aow_workflow_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aowWorkflowAuditList',
			selector: 'aowWorkflowAuditList'
		},
		{
			ref: 'aowWorkflowAuditAdd',
			selector: 'aowWorkflowAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aowWorkflowAuditList > toolbar > button#add': {
				click: me.onAowWorkflowAuditAddClick
			},
			'aowWorkflowAuditList':{
				removeRow: me.removeRow
			},
			'aowWorkflowAuditAdd > form > button#save': {
				click: me.onAowWorkflowAuditAddSaveClick
			},
			'aowWorkflowAuditAdd > form > button#cancel': {
				click: me.onAowWorkflowAuditAddCancelClick
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
	onAowWorkflowAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAowWorkflowAuditAdd().destroy();
		//</es-section>
	},
	onAowWorkflowAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAowWorkflowAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAowWorkflowAuditList().getStore().add(rec);

			me.getAowWorkflowAuditAdd().destroy();
		}
		//</es-section>
	},
	onAowWorkflowAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aowWorkflowAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aowWorkflowAudit());
		//</es-section>
	}
});
