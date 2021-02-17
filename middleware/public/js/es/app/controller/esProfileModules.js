/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Time: 2:25:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esProfileModules', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-profile-modules.List',
		'es-profile-modules.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esProfileModules'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esProfileModulesList',
			selector: 'esProfileModulesList'
		},
		{
			ref: 'esProfileModulesAdd',
			selector: 'esProfileModulesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esProfileModulesList > toolbar > button#add': {
				click: me.onEsProfileModulesAddClick
			},
			'esProfileModulesList':{
				removeRow: me.removeRow
			},
			'esProfileModulesAdd > form > button#save': {
				click: me.onEsProfileModulesAddSaveClick
			},
			'esProfileModulesAdd > form > button#cancel': {
				click: me.onEsProfileModulesAddCancelClick
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
	onEsProfileModulesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsProfileModulesAdd().destroy();
		//</es-section>
	},
	onEsProfileModulesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsProfileModulesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsProfileModulesList().getStore().add(rec);

			me.getEsProfileModulesAdd().destroy();
		}
		//</es-section>
	},
	onEsProfileModulesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esProfileModulesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esProfileModules());
		//</es-section>
	}
});
