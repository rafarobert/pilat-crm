/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Time: 2:44:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:4
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.securitygroupsAclRoles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'securitygroups-acl-roles.List',
		'securitygroups-acl-roles.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'securitygroups_acl_roles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'securitygroupsAclRolesList',
			selector: 'securitygroupsAclRolesList'
		},
		{
			ref: 'securitygroupsAclRolesAdd',
			selector: 'securitygroupsAclRolesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'securitygroupsAclRolesList > toolbar > button#add': {
				click: me.onSecuritygroupsAclRolesAddClick
			},
			'securitygroupsAclRolesList':{
				removeRow: me.removeRow
			},
			'securitygroupsAclRolesAdd > form > button#save': {
				click: me.onSecuritygroupsAclRolesAddSaveClick
			},
			'securitygroupsAclRolesAdd > form > button#cancel': {
				click: me.onSecuritygroupsAclRolesAddCancelClick
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
	onSecuritygroupsAclRolesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSecuritygroupsAclRolesAdd().destroy();
		//</es-section>
	},
	onSecuritygroupsAclRolesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSecuritygroupsAclRolesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSecuritygroupsAclRolesList().getStore().add(rec);

			me.getSecuritygroupsAclRolesAdd().destroy();
		}
		//</es-section>
	},
	onSecuritygroupsAclRolesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('securitygroupsAclRolesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.securitygroupsAclRoles());
		//</es-section>
	}
});
