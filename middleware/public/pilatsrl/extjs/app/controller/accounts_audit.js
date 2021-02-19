/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:46 GMT-0400 (Bolivia Time)
 * Time: 2:40:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:46
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.accountsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'accounts-audit.List',
		'accounts-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'accounts_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'accountsAuditList',
			selector: 'accountsAuditList'
		},
		{
			ref: 'accountsAuditAdd',
			selector: 'accountsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'accountsAuditList > toolbar > button#add': {
				click: me.onAccountsAuditAddClick
			},
			'accountsAuditList':{
				removeRow: me.removeRow
			},
			'accountsAuditAdd > form > button#save': {
				click: me.onAccountsAuditAddSaveClick
			},
			'accountsAuditAdd > form > button#cancel': {
				click: me.onAccountsAuditAddCancelClick
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
	onAccountsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAccountsAuditAdd().destroy();
		//</es-section>
	},
	onAccountsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAccountsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAccountsAuditList().getStore().add(rec);

			me.getAccountsAuditAdd().destroy();
		}
		//</es-section>
	},
	onAccountsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('accountsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.accountsAudit());
		//</es-section>
	}
});
