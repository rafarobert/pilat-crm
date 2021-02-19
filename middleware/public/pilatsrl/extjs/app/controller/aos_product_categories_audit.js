/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:46 GMT-0400 (Bolivia Time)
 * Time: 2:41:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:46
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosProductCategoriesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-product-categories-audit.List',
		'aos-product-categories-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_product_categories_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosProductCategoriesAuditList',
			selector: 'aosProductCategoriesAuditList'
		},
		{
			ref: 'aosProductCategoriesAuditAdd',
			selector: 'aosProductCategoriesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosProductCategoriesAuditList > toolbar > button#add': {
				click: me.onAosProductCategoriesAuditAddClick
			},
			'aosProductCategoriesAuditList':{
				removeRow: me.removeRow
			},
			'aosProductCategoriesAuditAdd > form > button#save': {
				click: me.onAosProductCategoriesAuditAddSaveClick
			},
			'aosProductCategoriesAuditAdd > form > button#cancel': {
				click: me.onAosProductCategoriesAuditAddCancelClick
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
	onAosProductCategoriesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosProductCategoriesAuditAdd().destroy();
		//</es-section>
	},
	onAosProductCategoriesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosProductCategoriesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosProductCategoriesAuditList().getStore().add(rec);

			me.getAosProductCategoriesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAosProductCategoriesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosProductCategoriesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosProductCategoriesAudit());
		//</es-section>
	}
});
