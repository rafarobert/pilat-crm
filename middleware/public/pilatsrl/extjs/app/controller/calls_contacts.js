/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Time: 2:42:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.callsContacts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'calls-contacts.List',
		'calls-contacts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'calls_contacts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'callsContactsList',
			selector: 'callsContactsList'
		},
		{
			ref: 'callsContactsAdd',
			selector: 'callsContactsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'callsContactsList > toolbar > button#add': {
				click: me.onCallsContactsAddClick
			},
			'callsContactsList':{
				removeRow: me.removeRow
			},
			'callsContactsAdd > form > button#save': {
				click: me.onCallsContactsAddSaveClick
			},
			'callsContactsAdd > form > button#cancel': {
				click: me.onCallsContactsAddCancelClick
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
	onCallsContactsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCallsContactsAdd().destroy();
		//</es-section>
	},
	onCallsContactsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCallsContactsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCallsContactsList().getStore().add(rec);

			me.getCallsContactsAdd().destroy();
		}
		//</es-section>
	},
	onCallsContactsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('callsContactsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.callsContacts());
		//</es-section>
	}
});
