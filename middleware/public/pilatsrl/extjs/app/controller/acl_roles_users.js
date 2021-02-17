/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:54 GMT-0400 (Bolivia Time)
 * Time: 2:40:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:54
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aclRolesUsers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'acl-roles-users.List',
		'acl-roles-users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'acl_roles_users'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aclRolesUsersList',
			selector: 'aclRolesUsersList'
		},
		{
			ref: 'aclRolesUsersAdd',
			selector: 'aclRolesUsersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aclRolesUsersList > toolbar > button#add': {
				click: me.onAclRolesUsersAddClick
			},
			'aclRolesUsersList':{
				removeRow: me.removeRow
			},
			'aclRolesUsersAdd > form > button#save': {
				click: me.onAclRolesUsersAddSaveClick
			},
			'aclRolesUsersAdd > form > button#cancel': {
				click: me.onAclRolesUsersAddCancelClick
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
	onAclRolesUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAclRolesUsersAdd().destroy();
		//</es-section>
	},
	onAclRolesUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAclRolesUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAclRolesUsersList().getStore().add(rec);

			me.getAclRolesUsersAdd().destroy();
		}
		//</es-section>
	},
	onAclRolesUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aclRolesUsersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aclRolesUsers());
		//</es-section>
	}
});
