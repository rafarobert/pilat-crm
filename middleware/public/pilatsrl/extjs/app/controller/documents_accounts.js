/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:23 GMT-0400 (Bolivia Time)
 * Time: 2:42:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:23 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:23
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.documentsAccounts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'documents-accounts.List',
		'documents-accounts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'documents_accounts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'documentsAccountsList',
			selector: 'documentsAccountsList'
		},
		{
			ref: 'documentsAccountsAdd',
			selector: 'documentsAccountsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'documentsAccountsList > toolbar > button#add': {
				click: me.onDocumentsAccountsAddClick
			},
			'documentsAccountsList':{
				removeRow: me.removeRow
			},
			'documentsAccountsAdd > form > button#save': {
				click: me.onDocumentsAccountsAddSaveClick
			},
			'documentsAccountsAdd > form > button#cancel': {
				click: me.onDocumentsAccountsAddCancelClick
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
	onDocumentsAccountsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getDocumentsAccountsAdd().destroy();
		//</es-section>
	},
	onDocumentsAccountsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getDocumentsAccountsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getDocumentsAccountsList().getStore().add(rec);

			me.getDocumentsAccountsAdd().destroy();
		}
		//</es-section>
	},
	onDocumentsAccountsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('documentsAccountsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.documentsAccounts());
		//</es-section>
	}
});
