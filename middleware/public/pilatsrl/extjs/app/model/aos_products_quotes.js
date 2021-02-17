/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:43 GMT-0400 (Bolivia Time)
 * Time: 2:41:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:43 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:43
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aosProductsQuotes', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aos-products-quotes/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'number', type: 'types.INT', defaultValue: null },
		
		{ name: 'product_qty', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_cost_price', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_cost_price_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_list_price', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_list_price_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_discount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_discount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_discount_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_discount_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_unit_price', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_unit_price_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'vat_amt', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'vat_amt_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_total_price', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'product_total_price_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'part_number', type: 'text', defaultValue: null },
		
		{ name: 'discount', type: 'text', defaultValue: null },
		
		{ name: 'vat', type: 'text', defaultValue: null },
		
		{ name: 'parent_type', type: 'text', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'item_description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'currency_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'parent_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'product_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'group_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
