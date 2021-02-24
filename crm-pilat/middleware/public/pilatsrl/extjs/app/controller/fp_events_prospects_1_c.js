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

Ext.define('es.controller.fpEventsProspects1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-events-prospects-1-c.List',
		'fp-events-prospects-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_events_prospects_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventsProspects1CList',
			selector: 'fpEventsProspects1CList'
		},
		{
			ref: 'fpEventsProspects1CAdd',
			selector: 'fpEventsProspects1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventsProspects1CList > toolbar > button#add': {
				click: me.onFpEventsProspects1CAddClick
			},
			'fpEventsProspects1CList':{
				removeRow: me.removeRow
			},
			'fpEventsProspects1CAdd > form > button#save': {
				click: me.onFpEventsProspects1CAddSaveClick
			},
			'fpEventsProspects1CAdd > form > button#cancel': {
				click: me.onFpEventsProspects1CAddCancelClick
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
	onFpEventsProspects1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventsProspects1CAdd().destroy();
		//</es-section>
	},
	onFpEventsProspects1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventsProspects1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventsProspects1CList().getStore().add(rec);

			me.getFpEventsProspects1CAdd().destroy();
		}
		//</es-section>
	},
	onFpEventsProspects1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventsProspects1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventsProspects1C());
		//</es-section>
	}
});
