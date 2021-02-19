/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:41 GMT-0400 (Bolivia Time)
 * Time: 2:43:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:41 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:41
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectsContacts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'projects-contacts.List',
		'projects-contacts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'projects_contacts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectsContactsList',
			selector: 'projectsContactsList'
		},
		{
			ref: 'projectsContactsAdd',
			selector: 'projectsContactsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectsContactsList > toolbar > button#add': {
				click: me.onProjectsContactsAddClick
			},
			'projectsContactsList':{
				removeRow: me.removeRow
			},
			'projectsContactsAdd > form > button#save': {
				click: me.onProjectsContactsAddSaveClick
			},
			'projectsContactsAdd > form > button#cancel': {
				click: me.onProjectsContactsAddCancelClick
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
	onProjectsContactsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectsContactsAdd().destroy();
		//</es-section>
	},
	onProjectsContactsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectsContactsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectsContactsList().getStore().add(rec);

			me.getProjectsContactsAdd().destroy();
		}
		//</es-section>
	},
	onProjectsContactsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectsContactsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectsContacts());
		//</es-section>
	}
});
