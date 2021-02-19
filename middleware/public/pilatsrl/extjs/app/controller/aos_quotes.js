/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:48 GMT-0400 (Bolivia Time)
 * Time: 2:41:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosQuotes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-quotes.List',
		'aos-quotes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_quotes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosQuotesList',
			selector: 'aosQuotesList'
		},
		{
			ref: 'aosQuotesAdd',
			selector: 'aosQuotesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosQuotesList > toolbar > button#add': {
				click: me.onAosQuotesAddClick
			},
			'aosQuotesList':{
				removeRow: me.removeRow
			},
			'aosQuotesAdd > form > button#save': {
				click: me.onAosQuotesAddSaveClick
			},
			'aosQuotesAdd > form > button#cancel': {
				click: me.onAosQuotesAddCancelClick
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
	onAosQuotesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosQuotesAdd().destroy();
		//</es-section>
	},
	onAosQuotesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosQuotesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosQuotesList().getStore().add(rec);

			me.getAosQuotesAdd().destroy();
		}
		//</es-section>
	},
	onAosQuotesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosQuotesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosQuotes());
		//</es-section>
	}
});
