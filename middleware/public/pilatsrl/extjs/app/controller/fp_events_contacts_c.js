/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Time: 2:42:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:45
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEventsContactsC', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-events-contacts-c.List',
		'fp-events-contacts-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_events_contacts_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventsContactsCList',
			selector: 'fpEventsContactsCList'
		},
		{
			ref: 'fpEventsContactsCAdd',
			selector: 'fpEventsContactsCAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventsContactsCList > toolbar > button#add': {
				click: me.onFpEventsContactsCAddClick
			},
			'fpEventsContactsCList':{
				removeRow: me.removeRow
			},
			'fpEventsContactsCAdd > form > button#save': {
				click: me.onFpEventsContactsCAddSaveClick
			},
			'fpEventsContactsCAdd > form > button#cancel': {
				click: me.onFpEventsContactsCAddCancelClick
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
	onFpEventsContactsCAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventsContactsCAdd().destroy();
		//</es-section>
	},
	onFpEventsContactsCAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventsContactsCAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventsContactsCList().getStore().add(rec);

			me.getFpEventsContactsCAdd().destroy();
		}
		//</es-section>
	},
	onFpEventsContactsCAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventsContactsCAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventsContactsC());
		//</es-section>
	}
});
