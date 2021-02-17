/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:06 GMT-0400 (Bolivia Time)
 * Time: 2:44:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:6
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.securitygroupsUsers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'securitygroups-users.List',
		'securitygroups-users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'securitygroups_users'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'securitygroupsUsersList',
			selector: 'securitygroupsUsersList'
		},
		{
			ref: 'securitygroupsUsersAdd',
			selector: 'securitygroupsUsersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'securitygroupsUsersList > toolbar > button#add': {
				click: me.onSecuritygroupsUsersAddClick
			},
			'securitygroupsUsersList':{
				removeRow: me.removeRow
			},
			'securitygroupsUsersAdd > form > button#save': {
				click: me.onSecuritygroupsUsersAddSaveClick
			},
			'securitygroupsUsersAdd > form > button#cancel': {
				click: me.onSecuritygroupsUsersAddCancelClick
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
	onSecuritygroupsUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSecuritygroupsUsersAdd().destroy();
		//</es-section>
	},
	onSecuritygroupsUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSecuritygroupsUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSecuritygroupsUsersList().getStore().add(rec);

			me.getSecuritygroupsUsersAdd().destroy();
		}
		//</es-section>
	},
	onSecuritygroupsUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('securitygroupsUsersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.securitygroupsUsers());
		//</es-section>
	}
});
