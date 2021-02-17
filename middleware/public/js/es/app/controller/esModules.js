/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Time: 2:25:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:33
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esModules', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-modules.List',
		'es-modules.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esModules'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esModulesList',
			selector: 'esModulesList'
		},
		{
			ref: 'esModulesAdd',
			selector: 'esModulesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esModulesList > toolbar > button#add': {
				click: me.onEsModulesAddClick
			},
			'esModulesList':{
				removeRow: me.removeRow
			},
			'esModulesAdd > form > button#save': {
				click: me.onEsModulesAddSaveClick
			},
			'esModulesAdd > form > button#cancel': {
				click: me.onEsModulesAddCancelClick
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
	onEsModulesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsModulesAdd().destroy();
		//</es-section>
	},
	onEsModulesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsModulesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsModulesList().getStore().add(rec);

			me.getEsModulesAdd().destroy();
		}
		//</es-section>
	},
	onEsModulesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esModulesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esModules());
		//</es-section>
	}
});
