/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Time: 2:42:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:59
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgMapsJjwgAreasC', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-maps-jjwg-areas-c.List',
		'jjwg-maps-jjwg-areas-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_maps_jjwg_areas_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgMapsJjwgAreasCList',
			selector: 'jjwgMapsJjwgAreasCList'
		},
		{
			ref: 'jjwgMapsJjwgAreasCAdd',
			selector: 'jjwgMapsJjwgAreasCAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgMapsJjwgAreasCList > toolbar > button#add': {
				click: me.onJjwgMapsJjwgAreasCAddClick
			},
			'jjwgMapsJjwgAreasCList':{
				removeRow: me.removeRow
			},
			'jjwgMapsJjwgAreasCAdd > form > button#save': {
				click: me.onJjwgMapsJjwgAreasCAddSaveClick
			},
			'jjwgMapsJjwgAreasCAdd > form > button#cancel': {
				click: me.onJjwgMapsJjwgAreasCAddCancelClick
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
	onJjwgMapsJjwgAreasCAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgMapsJjwgAreasCAdd().destroy();
		//</es-section>
	},
	onJjwgMapsJjwgAreasCAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgMapsJjwgAreasCAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgMapsJjwgAreasCList().getStore().add(rec);

			me.getJjwgMapsJjwgAreasCAdd().destroy();
		}
		//</es-section>
	},
	onJjwgMapsJjwgAreasCAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgMapsJjwgAreasCAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgMapsJjwgAreasC());
		//</es-section>
	}
});
