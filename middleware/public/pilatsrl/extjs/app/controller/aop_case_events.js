/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:19 GMT-0400 (Bolivia Time)
 * Time: 2:41:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:19
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aopCaseEvents', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aop-case-events.List',
		'aop-case-events.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aop_case_events'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aopCaseEventsList',
			selector: 'aopCaseEventsList'
		},
		{
			ref: 'aopCaseEventsAdd',
			selector: 'aopCaseEventsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aopCaseEventsList > toolbar > button#add': {
				click: me.onAopCaseEventsAddClick
			},
			'aopCaseEventsList':{
				removeRow: me.removeRow
			},
			'aopCaseEventsAdd > form > button#save': {
				click: me.onAopCaseEventsAddSaveClick
			},
			'aopCaseEventsAdd > form > button#cancel': {
				click: me.onAopCaseEventsAddCancelClick
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
	onAopCaseEventsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAopCaseEventsAdd().destroy();
		//</es-section>
	},
	onAopCaseEventsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAopCaseEventsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAopCaseEventsList().getStore().add(rec);

			me.getAopCaseEventsAdd().destroy();
		}
		//</es-section>
	},
	onAopCaseEventsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aopCaseEventsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aopCaseEvents());
		//</es-section>
	}
});
