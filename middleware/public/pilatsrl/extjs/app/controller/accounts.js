/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:45 GMT-0400 (Bolivia Time)
 * Time: 2:40:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:45
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.accounts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'accounts.List',
		'accounts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'accounts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'accountsList',
			selector: 'accountsList'
		},
		{
			ref: 'accountsAdd',
			selector: 'accountsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'accountsList > toolbar > button#add': {
				click: me.onAccountsAddClick
			},
			'accountsList':{
				removeRow: me.removeRow
			},
			'accountsAdd > form > button#save': {
				click: me.onAccountsAddSaveClick
			},
			'accountsAdd > form > button#cancel': {
				click: me.onAccountsAddCancelClick
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
	onAccountsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAccountsAdd().destroy();
		//</es-section>
	},
	onAccountsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAccountsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAccountsList().getStore().add(rec);

			me.getAccountsAdd().destroy();
		}
		//</es-section>
	},
	onAccountsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('accountsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.accounts());
		//</es-section>
	}
});
