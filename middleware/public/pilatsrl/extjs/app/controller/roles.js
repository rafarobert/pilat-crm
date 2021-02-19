/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:59 GMT-0400 (Bolivia Time)
 * Time: 2:43:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:59
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.roles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'roles.List',
		'roles.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'roles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'rolesList',
			selector: 'rolesList'
		},
		{
			ref: 'rolesAdd',
			selector: 'rolesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'rolesList > toolbar > button#add': {
				click: me.onRolesAddClick
			},
			'rolesList':{
				removeRow: me.removeRow
			},
			'rolesAdd > form > button#save': {
				click: me.onRolesAddSaveClick
			},
			'rolesAdd > form > button#cancel': {
				click: me.onRolesAddCancelClick
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
	onRolesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getRolesAdd().destroy();
		//</es-section>
	},
	onRolesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getRolesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getRolesList().getStore().add(rec);

			me.getRolesAdd().destroy();
		}
		//</es-section>
	},
	onRolesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('rolesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.roles());
		//</es-section>
	}
});
