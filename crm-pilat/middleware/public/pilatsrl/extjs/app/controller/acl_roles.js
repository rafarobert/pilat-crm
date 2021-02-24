/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:52 GMT-0400 (Bolivia Time)
 * Time: 2:40:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:52
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aclRoles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'acl-roles.List',
		'acl-roles.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'acl_roles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aclRolesList',
			selector: 'aclRolesList'
		},
		{
			ref: 'aclRolesAdd',
			selector: 'aclRolesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aclRolesList > toolbar > button#add': {
				click: me.onAclRolesAddClick
			},
			'aclRolesList':{
				removeRow: me.removeRow
			},
			'aclRolesAdd > form > button#save': {
				click: me.onAclRolesAddSaveClick
			},
			'aclRolesAdd > form > button#cancel': {
				click: me.onAclRolesAddCancelClick
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
	onAclRolesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAclRolesAdd().destroy();
		//</es-section>
	},
	onAclRolesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAclRolesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAclRolesList().getStore().add(rec);

			me.getAclRolesAdd().destroy();
		}
		//</es-section>
	},
	onAclRolesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aclRolesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aclRoles());
		//</es-section>
	}
});
