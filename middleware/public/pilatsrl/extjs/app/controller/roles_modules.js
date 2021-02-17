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

Ext.define('es.controller.rolesModules', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'roles-modules.List',
		'roles-modules.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'roles_modules'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'rolesModulesList',
			selector: 'rolesModulesList'
		},
		{
			ref: 'rolesModulesAdd',
			selector: 'rolesModulesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'rolesModulesList > toolbar > button#add': {
				click: me.onRolesModulesAddClick
			},
			'rolesModulesList':{
				removeRow: me.removeRow
			},
			'rolesModulesAdd > form > button#save': {
				click: me.onRolesModulesAddSaveClick
			},
			'rolesModulesAdd > form > button#cancel': {
				click: me.onRolesModulesAddCancelClick
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
	onRolesModulesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getRolesModulesAdd().destroy();
		//</es-section>
	},
	onRolesModulesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getRolesModulesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getRolesModulesList().getStore().add(rec);

			me.getRolesModulesAdd().destroy();
		}
		//</es-section>
	},
	onRolesModulesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('rolesModulesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.rolesModules());
		//</es-section>
	}
});
