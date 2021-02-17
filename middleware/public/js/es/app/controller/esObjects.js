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

Ext.define('es.controller.esObjects', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-objects.List',
		'es-objects.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esObjects'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esObjectsList',
			selector: 'esObjectsList'
		},
		{
			ref: 'esObjectsAdd',
			selector: 'esObjectsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esObjectsList > toolbar > button#add': {
				click: me.onEsObjectsAddClick
			},
			'esObjectsList':{
				removeRow: me.removeRow
			},
			'esObjectsAdd > form > button#save': {
				click: me.onEsObjectsAddSaveClick
			},
			'esObjectsAdd > form > button#cancel': {
				click: me.onEsObjectsAddCancelClick
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
	onEsObjectsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsObjectsAdd().destroy();
		//</es-section>
	},
	onEsObjectsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsObjectsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsObjectsList().getStore().add(rec);

			me.getEsObjectsAdd().destroy();
		}
		//</es-section>
	},
	onEsObjectsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esObjectsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esObjects());
		//</es-section>
	}
});
