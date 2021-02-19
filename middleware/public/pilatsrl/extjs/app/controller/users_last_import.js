/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Time: 2:44:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:25
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.usersLastImport', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'users-last-import.List',
		'users-last-import.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'users_last_import'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'usersLastImportList',
			selector: 'usersLastImportList'
		},
		{
			ref: 'usersLastImportAdd',
			selector: 'usersLastImportAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'usersLastImportList > toolbar > button#add': {
				click: me.onUsersLastImportAddClick
			},
			'usersLastImportList':{
				removeRow: me.removeRow
			},
			'usersLastImportAdd > form > button#save': {
				click: me.onUsersLastImportAddSaveClick
			},
			'usersLastImportAdd > form > button#cancel': {
				click: me.onUsersLastImportAddCancelClick
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
	onUsersLastImportAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUsersLastImportAdd().destroy();
		//</es-section>
	},
	onUsersLastImportAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUsersLastImportAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUsersLastImportList().getStore().add(rec);

			me.getUsersLastImportAdd().destroy();
		}
		//</es-section>
	},
	onUsersLastImportAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('usersLastImportAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.usersLastImport());
		//</es-section>
	}
});
