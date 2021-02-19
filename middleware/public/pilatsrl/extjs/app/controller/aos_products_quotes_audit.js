/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:44 GMT-0400 (Bolivia Time)
 * Time: 2:41:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:44 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:44
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosProductsQuotesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-products-quotes-audit.List',
		'aos-products-quotes-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_products_quotes_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosProductsQuotesAuditList',
			selector: 'aosProductsQuotesAuditList'
		},
		{
			ref: 'aosProductsQuotesAuditAdd',
			selector: 'aosProductsQuotesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosProductsQuotesAuditList > toolbar > button#add': {
				click: me.onAosProductsQuotesAuditAddClick
			},
			'aosProductsQuotesAuditList':{
				removeRow: me.removeRow
			},
			'aosProductsQuotesAuditAdd > form > button#save': {
				click: me.onAosProductsQuotesAuditAddSaveClick
			},
			'aosProductsQuotesAuditAdd > form > button#cancel': {
				click: me.onAosProductsQuotesAuditAddCancelClick
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
	onAosProductsQuotesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosProductsQuotesAuditAdd().destroy();
		//</es-section>
	},
	onAosProductsQuotesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosProductsQuotesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosProductsQuotesAuditList().getStore().add(rec);

			me.getAosProductsQuotesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAosProductsQuotesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosProductsQuotesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosProductsQuotesAudit());
		//</es-section>
	}
});
