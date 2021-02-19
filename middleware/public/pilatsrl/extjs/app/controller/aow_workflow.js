/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:56 GMT-0400 (Bolivia Time)
 * Time: 2:41:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:56
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aowWorkflow', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aow-workflow.List',
		'aow-workflow.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aow_workflow'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aowWorkflowList',
			selector: 'aowWorkflowList'
		},
		{
			ref: 'aowWorkflowAdd',
			selector: 'aowWorkflowAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aowWorkflowList > toolbar > button#add': {
				click: me.onAowWorkflowAddClick
			},
			'aowWorkflowList':{
				removeRow: me.removeRow
			},
			'aowWorkflowAdd > form > button#save': {
				click: me.onAowWorkflowAddSaveClick
			},
			'aowWorkflowAdd > form > button#cancel': {
				click: me.onAowWorkflowAddCancelClick
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
	onAowWorkflowAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAowWorkflowAdd().destroy();
		//</es-section>
	},
	onAowWorkflowAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAowWorkflowAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAowWorkflowList().getStore().add(rec);

			me.getAowWorkflowAdd().destroy();
		}
		//</es-section>
	},
	onAowWorkflowAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aowWorkflowAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aowWorkflow());
		//</es-section>
	}
});
