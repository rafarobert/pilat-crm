/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:34 GMT-0400 (Bolivia Time)
 * Time: 2:25:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esUserRoles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-user-roles.List',
		'es-user-roles.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esUserRoles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esUserRolesList',
			selector: 'esUserRolesList'
		},
		{
			ref: 'esUserRolesAdd',
			selector: 'esUserRolesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esUserRolesList > toolbar > button#add': {
				click: me.onEsUserRolesAddClick
			},
			'esUserRolesList':{
				removeRow: me.removeRow
			},
			'esUserRolesAdd > form > button#save': {
				click: me.onEsUserRolesAddSaveClick
			},
			'esUserRolesAdd > form > button#cancel': {
				click: me.onEsUserRolesAddCancelClick
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
	onEsUserRolesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsUserRolesAdd().destroy();
		//</es-section>
	},
	onEsUserRolesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsUserRolesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsUserRolesList().getStore().add(rec);

			me.getEsUserRolesAdd().destroy();
		}
		//</es-section>
	},
	onEsUserRolesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esUserRolesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esUserRoles());
		//</es-section>
	}
});
