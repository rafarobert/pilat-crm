/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:47 GMT-0400 (Bolivia Time)
 * Time: 2:43:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:47
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectTaskAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'project-task-audit.List',
		'project-task-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'project_task_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectTaskAuditList',
			selector: 'projectTaskAuditList'
		},
		{
			ref: 'projectTaskAuditAdd',
			selector: 'projectTaskAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectTaskAuditList > toolbar > button#add': {
				click: me.onProjectTaskAuditAddClick
			},
			'projectTaskAuditList':{
				removeRow: me.removeRow
			},
			'projectTaskAuditAdd > form > button#save': {
				click: me.onProjectTaskAuditAddSaveClick
			},
			'projectTaskAuditAdd > form > button#cancel': {
				click: me.onProjectTaskAuditAddCancelClick
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
	onProjectTaskAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectTaskAuditAdd().destroy();
		//</es-section>
	},
	onProjectTaskAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectTaskAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectTaskAuditList().getStore().add(rec);

			me.getProjectTaskAuditAdd().destroy();
		}
		//</es-section>
	},
	onProjectTaskAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectTaskAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectTaskAudit());
		//</es-section>
	}
});
