/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:43 GMT-0400 (Bolivia Time)
 * Time: 2:42:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:43 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEvents', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-events.List',
		'fp-events.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_events'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventsList',
			selector: 'fpEventsList'
		},
		{
			ref: 'fpEventsAdd',
			selector: 'fpEventsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventsList > toolbar > button#add': {
				click: me.onFpEventsAddClick
			},
			'fpEventsList':{
				removeRow: me.removeRow
			},
			'fpEventsAdd > form > button#save': {
				click: me.onFpEventsAddSaveClick
			},
			'fpEventsAdd > form > button#cancel': {
				click: me.onFpEventsAddCancelClick
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
	onFpEventsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventsAdd().destroy();
		//</es-section>
	},
	onFpEventsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventsList().getStore().add(rec);

			me.getFpEventsAdd().destroy();
		}
		//</es-section>
	},
	onFpEventsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEvents());
		//</es-section>
	}
});
