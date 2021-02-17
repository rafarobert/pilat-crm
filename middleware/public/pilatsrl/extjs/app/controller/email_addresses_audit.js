/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Time: 2:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailAddressesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-addresses-audit.List',
		'email-addresses-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_addresses_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailAddressesAuditList',
			selector: 'emailAddressesAuditList'
		},
		{
			ref: 'emailAddressesAuditAdd',
			selector: 'emailAddressesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailAddressesAuditList > toolbar > button#add': {
				click: me.onEmailAddressesAuditAddClick
			},
			'emailAddressesAuditList':{
				removeRow: me.removeRow
			},
			'emailAddressesAuditAdd > form > button#save': {
				click: me.onEmailAddressesAuditAddSaveClick
			},
			'emailAddressesAuditAdd > form > button#cancel': {
				click: me.onEmailAddressesAuditAddCancelClick
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
	onEmailAddressesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailAddressesAuditAdd().destroy();
		//</es-section>
	},
	onEmailAddressesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailAddressesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailAddressesAuditList().getStore().add(rec);

			me.getEmailAddressesAuditAdd().destroy();
		}
		//</es-section>
	},
	onEmailAddressesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailAddressesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailAddressesAudit());
		//</es-section>
	}
});
