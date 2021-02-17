/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Time: 2:25:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esPages', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-pages.List',
		'es-pages.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esPages'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esPagesList',
			selector: 'esPagesList'
		},
		{
			ref: 'esPagesAdd',
			selector: 'esPagesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esPagesList > toolbar > button#add': {
				click: me.onEsPagesAddClick
			},
			'esPagesList':{
				removeRow: me.removeRow
			},
			'esPagesAdd > form > button#save': {
				click: me.onEsPagesAddSaveClick
			},
			'esPagesAdd > form > button#cancel': {
				click: me.onEsPagesAddCancelClick
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
	onEsPagesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsPagesAdd().destroy();
		//</es-section>
	},
	onEsPagesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsPagesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsPagesList().getStore().add(rec);

			me.getEsPagesAdd().destroy();
		}
		//</es-section>
	},
	onEsPagesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esPagesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esPages());
		//</es-section>
	}
});
