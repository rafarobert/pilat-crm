/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Time: 2:44:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:0
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.rolesUsers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'roles-users.List',
		'roles-users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'roles_users'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'rolesUsersList',
			selector: 'rolesUsersList'
		},
		{
			ref: 'rolesUsersAdd',
			selector: 'rolesUsersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'rolesUsersList > toolbar > button#add': {
				click: me.onRolesUsersAddClick
			},
			'rolesUsersList':{
				removeRow: me.removeRow
			},
			'rolesUsersAdd > form > button#save': {
				click: me.onRolesUsersAddSaveClick
			},
			'rolesUsersAdd > form > button#cancel': {
				click: me.onRolesUsersAddCancelClick
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
	onRolesUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getRolesUsersAdd().destroy();
		//</es-section>
	},
	onRolesUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getRolesUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getRolesUsersList().getStore().add(rec);

			me.getRolesUsersAdd().destroy();
		}
		//</es-section>
	},
	onRolesUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('rolesUsersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.rolesUsers());
		//</es-section>
	}
});
