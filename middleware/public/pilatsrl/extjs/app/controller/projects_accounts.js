/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:39 GMT-0400 (Bolivia Time)
 * Time: 2:43:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectsAccounts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'projects-accounts.List',
		'projects-accounts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'projects_accounts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectsAccountsList',
			selector: 'projectsAccountsList'
		},
		{
			ref: 'projectsAccountsAdd',
			selector: 'projectsAccountsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectsAccountsList > toolbar > button#add': {
				click: me.onProjectsAccountsAddClick
			},
			'projectsAccountsList':{
				removeRow: me.removeRow
			},
			'projectsAccountsAdd > form > button#save': {
				click: me.onProjectsAccountsAddSaveClick
			},
			'projectsAccountsAdd > form > button#cancel': {
				click: me.onProjectsAccountsAddCancelClick
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
	onProjectsAccountsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectsAccountsAdd().destroy();
		//</es-section>
	},
	onProjectsAccountsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectsAccountsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectsAccountsList().getStore().add(rec);

			me.getProjectsAccountsAdd().destroy();
		}
		//</es-section>
	},
	onProjectsAccountsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectsAccountsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectsAccounts());
		//</es-section>
	}
});
