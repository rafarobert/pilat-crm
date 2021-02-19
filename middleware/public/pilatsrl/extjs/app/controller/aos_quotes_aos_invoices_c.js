/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Time: 2:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosQuotesAosInvoicesC', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-quotes-aos-invoices-c.List',
		'aos-quotes-aos-invoices-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_quotes_aos_invoices_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosQuotesAosInvoicesCList',
			selector: 'aosQuotesAosInvoicesCList'
		},
		{
			ref: 'aosQuotesAosInvoicesCAdd',
			selector: 'aosQuotesAosInvoicesCAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosQuotesAosInvoicesCList > toolbar > button#add': {
				click: me.onAosQuotesAosInvoicesCAddClick
			},
			'aosQuotesAosInvoicesCList':{
				removeRow: me.removeRow
			},
			'aosQuotesAosInvoicesCAdd > form > button#save': {
				click: me.onAosQuotesAosInvoicesCAddSaveClick
			},
			'aosQuotesAosInvoicesCAdd > form > button#cancel': {
				click: me.onAosQuotesAosInvoicesCAddCancelClick
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
	onAosQuotesAosInvoicesCAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosQuotesAosInvoicesCAdd().destroy();
		//</es-section>
	},
	onAosQuotesAosInvoicesCAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosQuotesAosInvoicesCAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosQuotesAosInvoicesCList().getStore().add(rec);

			me.getAosQuotesAosInvoicesCAdd().destroy();
		}
		//</es-section>
	},
	onAosQuotesAosInvoicesCAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosQuotesAosInvoicesCAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosQuotesAosInvoicesC());
		//</es-section>
	}
});
