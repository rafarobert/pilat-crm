/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:45 GMT-0400 (Bolivia Time)
 * Time: 2:43:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:45
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectTask', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'project-task.List',
		'project-task.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'project_task'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectTaskList',
			selector: 'projectTaskList'
		},
		{
			ref: 'projectTaskAdd',
			selector: 'projectTaskAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectTaskList > toolbar > button#add': {
				click: me.onProjectTaskAddClick
			},
			'projectTaskList':{
				removeRow: me.removeRow
			},
			'projectTaskAdd > form > button#save': {
				click: me.onProjectTaskAddSaveClick
			},
			'projectTaskAdd > form > button#cancel': {
				click: me.onProjectTaskAddCancelClick
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
	onProjectTaskAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectTaskAdd().destroy();
		//</es-section>
	},
	onProjectTaskAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectTaskAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectTaskList().getStore().add(rec);

			me.getProjectTaskAdd().destroy();
		}
		//</es-section>
	},
	onProjectTaskAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectTaskAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectTask());
		//</es-section>
	}
});
