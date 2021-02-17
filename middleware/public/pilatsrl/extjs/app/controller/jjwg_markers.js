/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:01 GMT-0400 (Bolivia Time)
 * Time: 2:43:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:1
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgMarkers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-markers.List',
		'jjwg-markers.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_markers'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgMarkersList',
			selector: 'jjwgMarkersList'
		},
		{
			ref: 'jjwgMarkersAdd',
			selector: 'jjwgMarkersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgMarkersList > toolbar > button#add': {
				click: me.onJjwgMarkersAddClick
			},
			'jjwgMarkersList':{
				removeRow: me.removeRow
			},
			'jjwgMarkersAdd > form > button#save': {
				click: me.onJjwgMarkersAddSaveClick
			},
			'jjwgMarkersAdd > form > button#cancel': {
				click: me.onJjwgMarkersAddCancelClick
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
	onJjwgMarkersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgMarkersAdd().destroy();
		//</es-section>
	},
	onJjwgMarkersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgMarkersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgMarkersList().getStore().add(rec);

			me.getJjwgMarkersAdd().destroy();
		}
		//</es-section>
	},
	onJjwgMarkersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgMarkersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgMarkers());
		//</es-section>
	}
});
