/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:29 GMT-0400 (Bolivia Time)
 * Time: 23:45:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:29 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:29
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.pilatModules', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'pilat-modules.List',
		'pilat-modules.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'pilat_modules'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'pilatModulesList',
			selector: 'pilatModulesList'
		},
		{
			ref: 'pilatModulesAdd',
			selector: 'pilatModulesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'pilatModulesList > toolbar > button#add': {
				click: me.onPilatModulesAddClick
			},
			'pilatModulesList':{
				removeRow: me.removeRow
			},
			'pilatModulesAdd > form > button#save': {
				click: me.onPilatModulesAddSaveClick
			},
			'pilatModulesAdd > form > button#cancel': {
				click: me.onPilatModulesAddCancelClick
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
	onPilatModulesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getPilatModulesAdd().destroy();
		//</es-section>
	},
	onPilatModulesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getPilatModulesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getPilatModulesList().getStore().add(rec);

			me.getPilatModulesAdd().destroy();
		}
		//</es-section>
	},
	onPilatModulesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('pilatModulesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.pilatModules());
		//</es-section>
	}
});
