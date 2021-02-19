/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:49 GMT-0400 (Bolivia Time)
 * Time: 2:42:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEventLocationsFpEvents1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-event-locations-fp-events-1-c.List',
		'fp-event-locations-fp-events-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_event_locations_fp_events_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventLocationsFpEvents1CList',
			selector: 'fpEventLocationsFpEvents1CList'
		},
		{
			ref: 'fpEventLocationsFpEvents1CAdd',
			selector: 'fpEventLocationsFpEvents1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventLocationsFpEvents1CList > toolbar > button#add': {
				click: me.onFpEventLocationsFpEvents1CAddClick
			},
			'fpEventLocationsFpEvents1CList':{
				removeRow: me.removeRow
			},
			'fpEventLocationsFpEvents1CAdd > form > button#save': {
				click: me.onFpEventLocationsFpEvents1CAddSaveClick
			},
			'fpEventLocationsFpEvents1CAdd > form > button#cancel': {
				click: me.onFpEventLocationsFpEvents1CAddCancelClick
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
	onFpEventLocationsFpEvents1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventLocationsFpEvents1CAdd().destroy();
		//</es-section>
	},
	onFpEventLocationsFpEvents1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventLocationsFpEvents1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventLocationsFpEvents1CList().getStore().add(rec);

			me.getFpEventLocationsFpEvents1CAdd().destroy();
		}
		//</es-section>
	},
	onFpEventLocationsFpEvents1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventLocationsFpEvents1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventLocationsFpEvents1C());
		//</es-section>
	}
});
