/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:19 GMT-0400 (Bolivia Time)
 * Time: 2:44:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:19
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.tasks', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'tasks.List',
		'tasks.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'tasks'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'tasksList',
			selector: 'tasksList'
		},
		{
			ref: 'tasksAdd',
			selector: 'tasksAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'tasksList > toolbar > button#add': {
				click: me.onTasksAddClick
			},
			'tasksList':{
				removeRow: me.removeRow
			},
			'tasksAdd > form > button#save': {
				click: me.onTasksAddSaveClick
			},
			'tasksAdd > form > button#cancel': {
				click: me.onTasksAddCancelClick
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
	onTasksAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getTasksAdd().destroy();
		//</es-section>
	},
	onTasksAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getTasksAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getTasksList().getStore().add(rec);

			me.getTasksAdd().destroy();
		}
		//</es-section>
	},
	onTasksAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('tasksAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.tasks());
		//</es-section>
	}
});
