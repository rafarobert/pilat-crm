/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:48 GMT-0400 (Bolivia Time)
 * Time: 2:43:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectUsers1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'project-users-1-c.List',
		'project-users-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'project_users_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectUsers1CList',
			selector: 'projectUsers1CList'
		},
		{
			ref: 'projectUsers1CAdd',
			selector: 'projectUsers1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectUsers1CList > toolbar > button#add': {
				click: me.onProjectUsers1CAddClick
			},
			'projectUsers1CList':{
				removeRow: me.removeRow
			},
			'projectUsers1CAdd > form > button#save': {
				click: me.onProjectUsers1CAddSaveClick
			},
			'projectUsers1CAdd > form > button#cancel': {
				click: me.onProjectUsers1CAddCancelClick
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
	onProjectUsers1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectUsers1CAdd().destroy();
		//</es-section>
	},
	onProjectUsers1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectUsers1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectUsers1CList().getStore().add(rec);

			me.getProjectUsers1CAdd().destroy();
		}
		//</es-section>
	},
	onProjectUsers1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectUsers1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectUsers1C());
		//</es-section>
	}
});
