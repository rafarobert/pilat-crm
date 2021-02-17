/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Time: 2:25:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:32
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esRoles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-roles.List',
		'es-roles.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esRoles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esRolesList',
			selector: 'esRolesList'
		},
		{
			ref: 'esRolesAdd',
			selector: 'esRolesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esRolesList > toolbar > button#add': {
				click: me.onEsRolesAddClick
			},
			'esRolesList':{
				removeRow: me.removeRow
			},
			'esRolesAdd > form > button#save': {
				click: me.onEsRolesAddSaveClick
			},
			'esRolesAdd > form > button#cancel': {
				click: me.onEsRolesAddCancelClick
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
	onEsRolesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsRolesAdd().destroy();
		//</es-section>
	},
	onEsRolesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsRolesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsRolesList().getStore().add(rec);

			me.getEsRolesAdd().destroy();
		}
		//</es-section>
	},
	onEsRolesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esRolesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esRoles());
		//</es-section>
	}
});
