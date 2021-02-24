/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:53 GMT-0400 (Bolivia Time)
 * Time: 2:40:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:53
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aclRolesActions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'acl-roles-actions.List',
		'acl-roles-actions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'acl_roles_actions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aclRolesActionsList',
			selector: 'aclRolesActionsList'
		},
		{
			ref: 'aclRolesActionsAdd',
			selector: 'aclRolesActionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aclRolesActionsList > toolbar > button#add': {
				click: me.onAclRolesActionsAddClick
			},
			'aclRolesActionsList':{
				removeRow: me.removeRow
			},
			'aclRolesActionsAdd > form > button#save': {
				click: me.onAclRolesActionsAddSaveClick
			},
			'aclRolesActionsAdd > form > button#cancel': {
				click: me.onAclRolesActionsAddCancelClick
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
	onAclRolesActionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAclRolesActionsAdd().destroy();
		//</es-section>
	},
	onAclRolesActionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAclRolesActionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAclRolesActionsList().getStore().add(rec);

			me.getAclRolesActionsAdd().destroy();
		}
		//</es-section>
	},
	onAclRolesActionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aclRolesActionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aclRolesActions());
		//</es-section>
	}
});
