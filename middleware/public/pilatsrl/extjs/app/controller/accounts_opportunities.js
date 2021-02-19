/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Time: 2:40:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:51
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.accountsOpportunities', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'accounts-opportunities.List',
		'accounts-opportunities.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'accounts_opportunities'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'accountsOpportunitiesList',
			selector: 'accountsOpportunitiesList'
		},
		{
			ref: 'accountsOpportunitiesAdd',
			selector: 'accountsOpportunitiesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'accountsOpportunitiesList > toolbar > button#add': {
				click: me.onAccountsOpportunitiesAddClick
			},
			'accountsOpportunitiesList':{
				removeRow: me.removeRow
			},
			'accountsOpportunitiesAdd > form > button#save': {
				click: me.onAccountsOpportunitiesAddSaveClick
			},
			'accountsOpportunitiesAdd > form > button#cancel': {
				click: me.onAccountsOpportunitiesAddCancelClick
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
	onAccountsOpportunitiesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAccountsOpportunitiesAdd().destroy();
		//</es-section>
	},
	onAccountsOpportunitiesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAccountsOpportunitiesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAccountsOpportunitiesList().getStore().add(rec);

			me.getAccountsOpportunitiesAdd().destroy();
		}
		//</es-section>
	},
	onAccountsOpportunitiesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('accountsOpportunitiesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.accountsOpportunities());
		//</es-section>
	}
});
