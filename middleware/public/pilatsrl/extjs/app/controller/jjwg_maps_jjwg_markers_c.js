/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:00 GMT-0400 (Bolivia Time)
 * Time: 2:43:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:0
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgMapsJjwgMarkersC', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-maps-jjwg-markers-c.List',
		'jjwg-maps-jjwg-markers-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_maps_jjwg_markers_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgMapsJjwgMarkersCList',
			selector: 'jjwgMapsJjwgMarkersCList'
		},
		{
			ref: 'jjwgMapsJjwgMarkersCAdd',
			selector: 'jjwgMapsJjwgMarkersCAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgMapsJjwgMarkersCList > toolbar > button#add': {
				click: me.onJjwgMapsJjwgMarkersCAddClick
			},
			'jjwgMapsJjwgMarkersCList':{
				removeRow: me.removeRow
			},
			'jjwgMapsJjwgMarkersCAdd > form > button#save': {
				click: me.onJjwgMapsJjwgMarkersCAddSaveClick
			},
			'jjwgMapsJjwgMarkersCAdd > form > button#cancel': {
				click: me.onJjwgMapsJjwgMarkersCAddCancelClick
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
	onJjwgMapsJjwgMarkersCAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgMapsJjwgMarkersCAdd().destroy();
		//</es-section>
	},
	onJjwgMapsJjwgMarkersCAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgMapsJjwgMarkersCAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgMapsJjwgMarkersCList().getStore().add(rec);

			me.getJjwgMapsJjwgMarkersCAdd().destroy();
		}
		//</es-section>
	},
	onJjwgMapsJjwgMarkersCAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgMapsJjwgMarkersCAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgMapsJjwgMarkersC());
		//</es-section>
	}
});
