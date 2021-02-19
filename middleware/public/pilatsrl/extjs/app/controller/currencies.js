/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Time: 2:42:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:21
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.currencies', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'currencies.List',
		'currencies.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'currencies'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'currenciesList',
			selector: 'currenciesList'
		},
		{
			ref: 'currenciesAdd',
			selector: 'currenciesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'currenciesList > toolbar > button#add': {
				click: me.onCurrenciesAddClick
			},
			'currenciesList':{
				removeRow: me.removeRow
			},
			'currenciesAdd > form > button#save': {
				click: me.onCurrenciesAddSaveClick
			},
			'currenciesAdd > form > button#cancel': {
				click: me.onCurrenciesAddCancelClick
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
	onCurrenciesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCurrenciesAdd().destroy();
		//</es-section>
	},
	onCurrenciesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCurrenciesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCurrenciesList().getStore().add(rec);

			me.getCurrenciesAdd().destroy();
		}
		//</es-section>
	},
	onCurrenciesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('currenciesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.currencies());
		//</es-section>
	}
});
