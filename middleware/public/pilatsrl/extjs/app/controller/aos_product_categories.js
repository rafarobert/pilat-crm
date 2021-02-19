/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Time: 2:41:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:45
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosProductCategories', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-product-categories.List',
		'aos-product-categories.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_product_categories'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosProductCategoriesList',
			selector: 'aosProductCategoriesList'
		},
		{
			ref: 'aosProductCategoriesAdd',
			selector: 'aosProductCategoriesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosProductCategoriesList > toolbar > button#add': {
				click: me.onAosProductCategoriesAddClick
			},
			'aosProductCategoriesList':{
				removeRow: me.removeRow
			},
			'aosProductCategoriesAdd > form > button#save': {
				click: me.onAosProductCategoriesAddSaveClick
			},
			'aosProductCategoriesAdd > form > button#cancel': {
				click: me.onAosProductCategoriesAddCancelClick
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
	onAosProductCategoriesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosProductCategoriesAdd().destroy();
		//</es-section>
	},
	onAosProductCategoriesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosProductCategoriesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosProductCategoriesList().getStore().add(rec);

			me.getAosProductCategoriesAdd().destroy();
		}
		//</es-section>
	},
	onAosProductCategoriesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosProductCategoriesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosProductCategories());
		//</es-section>
	}
});
