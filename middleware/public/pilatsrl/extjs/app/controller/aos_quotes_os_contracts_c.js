/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Time: 2:41:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:51
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosQuotesOsContractsC', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-quotes-os-contracts-c.List',
		'aos-quotes-os-contracts-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_quotes_os_contracts_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosQuotesOsContractsCList',
			selector: 'aosQuotesOsContractsCList'
		},
		{
			ref: 'aosQuotesOsContractsCAdd',
			selector: 'aosQuotesOsContractsCAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosQuotesOsContractsCList > toolbar > button#add': {
				click: me.onAosQuotesOsContractsCAddClick
			},
			'aosQuotesOsContractsCList':{
				removeRow: me.removeRow
			},
			'aosQuotesOsContractsCAdd > form > button#save': {
				click: me.onAosQuotesOsContractsCAddSaveClick
			},
			'aosQuotesOsContractsCAdd > form > button#cancel': {
				click: me.onAosQuotesOsContractsCAddCancelClick
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
	onAosQuotesOsContractsCAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosQuotesOsContractsCAdd().destroy();
		//</es-section>
	},
	onAosQuotesOsContractsCAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosQuotesOsContractsCAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosQuotesOsContractsCList().getStore().add(rec);

			me.getAosQuotesOsContractsCAdd().destroy();
		}
		//</es-section>
	},
	onAosQuotesOsContractsCAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosQuotesOsContractsCAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosQuotesOsContractsC());
		//</es-section>
	}
});
