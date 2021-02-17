/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:40 GMT-0400 (Bolivia Time)
 * Time: 2:41:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosProducts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-products.List',
		'aos-products.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_products'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosProductsList',
			selector: 'aosProductsList'
		},
		{
			ref: 'aosProductsAdd',
			selector: 'aosProductsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosProductsList > toolbar > button#add': {
				click: me.onAosProductsAddClick
			},
			'aosProductsList':{
				removeRow: me.removeRow
			},
			'aosProductsAdd > form > button#save': {
				click: me.onAosProductsAddSaveClick
			},
			'aosProductsAdd > form > button#cancel': {
				click: me.onAosProductsAddCancelClick
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
	onAosProductsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosProductsAdd().destroy();
		//</es-section>
	},
	onAosProductsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosProductsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosProductsList().getStore().add(rec);

			me.getAosProductsAdd().destroy();
		}
		//</es-section>
	},
	onAosProductsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosProductsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosProducts());
		//</es-section>
	}
});
