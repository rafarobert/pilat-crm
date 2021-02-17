/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:15 GMT-0400 (Bolivia Time)
 * Time: 2:42:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:15
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.contacts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'contacts.List',
		'contacts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'contacts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'contactsList',
			selector: 'contactsList'
		},
		{
			ref: 'contactsAdd',
			selector: 'contactsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'contactsList > toolbar > button#add': {
				click: me.onContactsAddClick
			},
			'contactsList':{
				removeRow: me.removeRow
			},
			'contactsAdd > form > button#save': {
				click: me.onContactsAddSaveClick
			},
			'contactsAdd > form > button#cancel': {
				click: me.onContactsAddCancelClick
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
	onContactsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getContactsAdd().destroy();
		//</es-section>
	},
	onContactsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getContactsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getContactsList().getStore().add(rec);

			me.getContactsAdd().destroy();
		}
		//</es-section>
	},
	onContactsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('contactsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.contacts());
		//</es-section>
	}
});
