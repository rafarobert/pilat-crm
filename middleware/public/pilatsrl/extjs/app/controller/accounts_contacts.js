/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:49 GMT-0400 (Bolivia Time)
 * Time: 2:40:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.accountsContacts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'accounts-contacts.List',
		'accounts-contacts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'accounts_contacts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'accountsContactsList',
			selector: 'accountsContactsList'
		},
		{
			ref: 'accountsContactsAdd',
			selector: 'accountsContactsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'accountsContactsList > toolbar > button#add': {
				click: me.onAccountsContactsAddClick
			},
			'accountsContactsList':{
				removeRow: me.removeRow
			},
			'accountsContactsAdd > form > button#save': {
				click: me.onAccountsContactsAddSaveClick
			},
			'accountsContactsAdd > form > button#cancel': {
				click: me.onAccountsContactsAddCancelClick
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
	onAccountsContactsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAccountsContactsAdd().destroy();
		//</es-section>
	},
	onAccountsContactsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAccountsContactsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAccountsContactsList().getStore().add(rec);

			me.getAccountsContactsAdd().destroy();
		}
		//</es-section>
	},
	onAccountsContactsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('accountsContactsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.accountsContacts());
		//</es-section>
	}
});
