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

Ext.define('es.controller.fpEventsFpEventDelegates1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-events-fp-event-delegates-1-c.List',
		'fp-events-fp-event-delegates-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_events_fp_event_delegates_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventsFpEventDelegates1CList',
			selector: 'fpEventsFpEventDelegates1CList'
		},
		{
			ref: 'fpEventsFpEventDelegates1CAdd',
			selector: 'fpEventsFpEventDelegates1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventsFpEventDelegates1CList > toolbar > button#add': {
				click: me.onFpEventsFpEventDelegates1CAddClick
			},
			'fpEventsFpEventDelegates1CList':{
				removeRow: me.removeRow
			},
			'fpEventsFpEventDelegates1CAdd > form > button#save': {
				click: me.onFpEventsFpEventDelegates1CAddSaveClick
			},
			'fpEventsFpEventDelegates1CAdd > form > button#cancel': {
				click: me.onFpEventsFpEventDelegates1CAddCancelClick
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
	onFpEventsFpEventDelegates1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventsFpEventDelegates1CAdd().destroy();
		//</es-section>
	},
	onFpEventsFpEventDelegates1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventsFpEventDelegates1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventsFpEventDelegates1CList().getStore().add(rec);

			me.getFpEventsFpEventDelegates1CAdd().destroy();
		}
		//</es-section>
	},
	onFpEventsFpEventDelegates1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventsFpEventDelegates1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventsFpEventDelegates1C());
		//</es-section>
	}
});
