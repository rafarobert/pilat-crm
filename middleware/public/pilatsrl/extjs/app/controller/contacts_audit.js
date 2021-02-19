/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:17 GMT-0400 (Bolivia Time)
 * Time: 2:42:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.contactsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'contacts-audit.List',
		'contacts-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'contacts_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'contactsAuditList',
			selector: 'contactsAuditList'
		},
		{
			ref: 'contactsAuditAdd',
			selector: 'contactsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'contactsAuditList > toolbar > button#add': {
				click: me.onContactsAuditAddClick
			},
			'contactsAuditList':{
				removeRow: me.removeRow
			},
			'contactsAuditAdd > form > button#save': {
				click: me.onContactsAuditAddSaveClick
			},
			'contactsAuditAdd > form > button#cancel': {
				click: me.onContactsAuditAddCancelClick
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
	onContactsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getContactsAuditAdd().destroy();
		//</es-section>
	},
	onContactsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getContactsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getContactsAuditList().getStore().add(rec);

			me.getContactsAuditAdd().destroy();
		}
		//</es-section>
	},
	onContactsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('contactsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.contactsAudit());
		//</es-section>
	}
});
