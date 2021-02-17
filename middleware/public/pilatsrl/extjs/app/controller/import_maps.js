/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Time: 2:42:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:52
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.importMaps', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'import-maps.List',
		'import-maps.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'import_maps'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'importMapsList',
			selector: 'importMapsList'
		},
		{
			ref: 'importMapsAdd',
			selector: 'importMapsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'importMapsList > toolbar > button#add': {
				click: me.onImportMapsAddClick
			},
			'importMapsList':{
				removeRow: me.removeRow
			},
			'importMapsAdd > form > button#save': {
				click: me.onImportMapsAddSaveClick
			},
			'importMapsAdd > form > button#cancel': {
				click: me.onImportMapsAddCancelClick
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
	onImportMapsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getImportMapsAdd().destroy();
		//</es-section>
	},
	onImportMapsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getImportMapsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getImportMapsList().getStore().add(rec);

			me.getImportMapsAdd().destroy();
		}
		//</es-section>
	},
	onImportMapsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('importMapsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.importMaps());
		//</es-section>
	}
});
