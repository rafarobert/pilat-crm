/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:43 GMT-0400 (Bolivia Time)
 * Time: 2:43:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:43 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectContacts1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'project-contacts-1-c.List',
		'project-contacts-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'project_contacts_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectContacts1CList',
			selector: 'projectContacts1CList'
		},
		{
			ref: 'projectContacts1CAdd',
			selector: 'projectContacts1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectContacts1CList > toolbar > button#add': {
				click: me.onProjectContacts1CAddClick
			},
			'projectContacts1CList':{
				removeRow: me.removeRow
			},
			'projectContacts1CAdd > form > button#save': {
				click: me.onProjectContacts1CAddSaveClick
			},
			'projectContacts1CAdd > form > button#cancel': {
				click: me.onProjectContacts1CAddCancelClick
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
	onProjectContacts1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectContacts1CAdd().destroy();
		//</es-section>
	},
	onProjectContacts1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectContacts1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectContacts1CList().getStore().add(rec);

			me.getProjectContacts1CAdd().destroy();
		}
		//</es-section>
	},
	onProjectContacts1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectContacts1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectContacts1C());
		//</es-section>
	}
});
