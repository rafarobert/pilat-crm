/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Time: 2:42:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:19
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.contactsUsers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'contacts-users.List',
		'contacts-users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'contacts_users'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'contactsUsersList',
			selector: 'contactsUsersList'
		},
		{
			ref: 'contactsUsersAdd',
			selector: 'contactsUsersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'contactsUsersList > toolbar > button#add': {
				click: me.onContactsUsersAddClick
			},
			'contactsUsersList':{
				removeRow: me.removeRow
			},
			'contactsUsersAdd > form > button#save': {
				click: me.onContactsUsersAddSaveClick
			},
			'contactsUsersAdd > form > button#cancel': {
				click: me.onContactsUsersAddCancelClick
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
	onContactsUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getContactsUsersAdd().destroy();
		//</es-section>
	},
	onContactsUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getContactsUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getContactsUsersList().getStore().add(rec);

			me.getContactsUsersAdd().destroy();
		}
		//</es-section>
	},
	onContactsUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('contactsUsersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.contactsUsers());
		//</es-section>
	}
});
