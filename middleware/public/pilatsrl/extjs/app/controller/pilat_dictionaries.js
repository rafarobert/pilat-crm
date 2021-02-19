/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:35 GMT-0400 (Bolivia Time)
 * Time: 2:43:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.pilatDictionaries', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'pilat-dictionaries.List',
		'pilat-dictionaries.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'pilat_dictionaries'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'pilatDictionariesList',
			selector: 'pilatDictionariesList'
		},
		{
			ref: 'pilatDictionariesAdd',
			selector: 'pilatDictionariesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'pilatDictionariesList > toolbar > button#add': {
				click: me.onPilatDictionariesAddClick
			},
			'pilatDictionariesList':{
				removeRow: me.removeRow
			},
			'pilatDictionariesAdd > form > button#save': {
				click: me.onPilatDictionariesAddSaveClick
			},
			'pilatDictionariesAdd > form > button#cancel': {
				click: me.onPilatDictionariesAddCancelClick
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
	onPilatDictionariesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getPilatDictionariesAdd().destroy();
		//</es-section>
	},
	onPilatDictionariesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getPilatDictionariesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getPilatDictionariesList().getStore().add(rec);

			me.getPilatDictionariesAdd().destroy();
		}
		//</es-section>
	},
	onPilatDictionariesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('pilatDictionariesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.pilatDictionaries());
		//</es-section>
	}
});
