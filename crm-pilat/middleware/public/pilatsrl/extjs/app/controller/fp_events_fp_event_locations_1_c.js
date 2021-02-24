/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:46 GMT-0400 (Bolivia Time)
 * Time: 2:42:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:46
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEventsFpEventLocations1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-events-fp-event-locations-1-c.List',
		'fp-events-fp-event-locations-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_events_fp_event_locations_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventsFpEventLocations1CList',
			selector: 'fpEventsFpEventLocations1CList'
		},
		{
			ref: 'fpEventsFpEventLocations1CAdd',
			selector: 'fpEventsFpEventLocations1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventsFpEventLocations1CList > toolbar > button#add': {
				click: me.onFpEventsFpEventLocations1CAddClick
			},
			'fpEventsFpEventLocations1CList':{
				removeRow: me.removeRow
			},
			'fpEventsFpEventLocations1CAdd > form > button#save': {
				click: me.onFpEventsFpEventLocations1CAddSaveClick
			},
			'fpEventsFpEventLocations1CAdd > form > button#cancel': {
				click: me.onFpEventsFpEventLocations1CAddCancelClick
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
	onFpEventsFpEventLocations1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventsFpEventLocations1CAdd().destroy();
		//</es-section>
	},
	onFpEventsFpEventLocations1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventsFpEventLocations1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventsFpEventLocations1CList().getStore().add(rec);

			me.getFpEventsFpEventLocations1CAdd().destroy();
		}
		//</es-section>
	},
	onFpEventsFpEventLocations1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventsFpEventLocations1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventsFpEventLocations1C());
		//</es-section>
	}
});
