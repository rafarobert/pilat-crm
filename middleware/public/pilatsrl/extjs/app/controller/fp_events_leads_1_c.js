/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Time: 2:42:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:47
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEventsLeads1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-events-leads-1-c.List',
		'fp-events-leads-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_events_leads_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventsLeads1CList',
			selector: 'fpEventsLeads1CList'
		},
		{
			ref: 'fpEventsLeads1CAdd',
			selector: 'fpEventsLeads1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventsLeads1CList > toolbar > button#add': {
				click: me.onFpEventsLeads1CAddClick
			},
			'fpEventsLeads1CList':{
				removeRow: me.removeRow
			},
			'fpEventsLeads1CAdd > form > button#save': {
				click: me.onFpEventsLeads1CAddSaveClick
			},
			'fpEventsLeads1CAdd > form > button#cancel': {
				click: me.onFpEventsLeads1CAddCancelClick
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
	onFpEventsLeads1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventsLeads1CAdd().destroy();
		//</es-section>
	},
	onFpEventsLeads1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventsLeads1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventsLeads1CList().getStore().add(rec);

			me.getFpEventsLeads1CAdd().destroy();
		}
		//</es-section>
	},
	onFpEventsLeads1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventsLeads1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventsLeads1C());
		//</es-section>
	}
});
