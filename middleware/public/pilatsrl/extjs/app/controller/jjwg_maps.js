/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:58 GMT-0400 (Bolivia Time)
 * Time: 2:42:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:58
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgMaps', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-maps.List',
		'jjwg-maps.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_maps'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgMapsList',
			selector: 'jjwgMapsList'
		},
		{
			ref: 'jjwgMapsAdd',
			selector: 'jjwgMapsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgMapsList > toolbar > button#add': {
				click: me.onJjwgMapsAddClick
			},
			'jjwgMapsList':{
				removeRow: me.removeRow
			},
			'jjwgMapsAdd > form > button#save': {
				click: me.onJjwgMapsAddSaveClick
			},
			'jjwgMapsAdd > form > button#cancel': {
				click: me.onJjwgMapsAddCancelClick
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
	onJjwgMapsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgMapsAdd().destroy();
		//</es-section>
	},
	onJjwgMapsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgMapsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgMapsList().getStore().add(rec);

			me.getJjwgMapsAdd().destroy();
		}
		//</es-section>
	},
	onJjwgMapsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgMapsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgMaps());
		//</es-section>
	}
});
