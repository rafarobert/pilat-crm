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

Ext.define('es.controller.esDictionaries', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-dictionaries.List',
		'es-dictionaries.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esDictionaries'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esDictionariesList',
			selector: 'esDictionariesList'
		},
		{
			ref: 'esDictionariesAdd',
			selector: 'esDictionariesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esDictionariesList > toolbar > button#add': {
				click: me.onEsDictionariesAddClick
			},
			'esDictionariesList':{
				removeRow: me.removeRow
			},
			'esDictionariesAdd > form > button#save': {
				click: me.onEsDictionariesAddSaveClick
			},
			'esDictionariesAdd > form > button#cancel': {
				click: me.onEsDictionariesAddCancelClick
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
	onEsDictionariesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsDictionariesAdd().destroy();
		//</es-section>
	},
	onEsDictionariesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsDictionariesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsDictionariesList().getStore().add(rec);

			me.getEsDictionariesAdd().destroy();
		}
		//</es-section>
	},
	onEsDictionariesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esDictionariesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esDictionaries());
		//</es-section>
	}
});
