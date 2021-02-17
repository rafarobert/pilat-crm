/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:03 GMT-0400 (Bolivia Time)
 * Time: 2:42:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:3
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.callsLeads', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'calls-leads.List',
		'calls-leads.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'calls_leads'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'callsLeadsList',
			selector: 'callsLeadsList'
		},
		{
			ref: 'callsLeadsAdd',
			selector: 'callsLeadsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'callsLeadsList > toolbar > button#add': {
				click: me.onCallsLeadsAddClick
			},
			'callsLeadsList':{
				removeRow: me.removeRow
			},
			'callsLeadsAdd > form > button#save': {
				click: me.onCallsLeadsAddSaveClick
			},
			'callsLeadsAdd > form > button#cancel': {
				click: me.onCallsLeadsAddCancelClick
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
	onCallsLeadsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCallsLeadsAdd().destroy();
		//</es-section>
	},
	onCallsLeadsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCallsLeadsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCallsLeadsList().getStore().add(rec);

			me.getCallsLeadsAdd().destroy();
		}
		//</es-section>
	},
	onCallsLeadsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('callsLeadsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.callsLeads());
		//</es-section>
	}
});
