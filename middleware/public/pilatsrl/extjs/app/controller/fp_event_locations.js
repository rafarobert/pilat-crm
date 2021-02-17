/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:48 GMT-0400 (Bolivia Time)
 * Time: 2:42:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEventLocations', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-event-locations.List',
		'fp-event-locations.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_event_locations'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventLocationsList',
			selector: 'fpEventLocationsList'
		},
		{
			ref: 'fpEventLocationsAdd',
			selector: 'fpEventLocationsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventLocationsList > toolbar > button#add': {
				click: me.onFpEventLocationsAddClick
			},
			'fpEventLocationsList':{
				removeRow: me.removeRow
			},
			'fpEventLocationsAdd > form > button#save': {
				click: me.onFpEventLocationsAddSaveClick
			},
			'fpEventLocationsAdd > form > button#cancel': {
				click: me.onFpEventLocationsAddCancelClick
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
	onFpEventLocationsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventLocationsAdd().destroy();
		//</es-section>
	},
	onFpEventLocationsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventLocationsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventLocationsList().getStore().add(rec);

			me.getFpEventLocationsAdd().destroy();
		}
		//</es-section>
	},
	onFpEventLocationsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventLocationsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventLocations());
		//</es-section>
	}
});
