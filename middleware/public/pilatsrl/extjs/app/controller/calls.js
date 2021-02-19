/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:01 GMT-0400 (Bolivia Time)
 * Time: 2:42:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:1
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.calls', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'calls.List',
		'calls.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'calls'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'callsList',
			selector: 'callsList'
		},
		{
			ref: 'callsAdd',
			selector: 'callsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'callsList > toolbar > button#add': {
				click: me.onCallsAddClick
			},
			'callsList':{
				removeRow: me.removeRow
			},
			'callsAdd > form > button#save': {
				click: me.onCallsAddSaveClick
			},
			'callsAdd > form > button#cancel': {
				click: me.onCallsAddCancelClick
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
	onCallsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCallsAdd().destroy();
		//</es-section>
	},
	onCallsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCallsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCallsList().getStore().add(rec);

			me.getCallsAdd().destroy();
		}
		//</es-section>
	},
	onCallsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('callsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.calls());
		//</es-section>
	}
});
