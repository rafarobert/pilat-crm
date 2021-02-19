/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:04 GMT-0400 (Bolivia Time)
 * Time: 2:42:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:4
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.callsReschedule', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'calls-reschedule.List',
		'calls-reschedule.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'calls_reschedule'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'callsRescheduleList',
			selector: 'callsRescheduleList'
		},
		{
			ref: 'callsRescheduleAdd',
			selector: 'callsRescheduleAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'callsRescheduleList > toolbar > button#add': {
				click: me.onCallsRescheduleAddClick
			},
			'callsRescheduleList':{
				removeRow: me.removeRow
			},
			'callsRescheduleAdd > form > button#save': {
				click: me.onCallsRescheduleAddSaveClick
			},
			'callsRescheduleAdd > form > button#cancel': {
				click: me.onCallsRescheduleAddCancelClick
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
	onCallsRescheduleAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCallsRescheduleAdd().destroy();
		//</es-section>
	},
	onCallsRescheduleAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCallsRescheduleAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCallsRescheduleList().getStore().add(rec);

			me.getCallsRescheduleAdd().destroy();
		}
		//</es-section>
	},
	onCallsRescheduleAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('callsRescheduleAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.callsReschedule());
		//</es-section>
	}
});
