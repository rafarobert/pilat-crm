/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:41 GMT-0400 (Bolivia Time)
 * Time: 2:41:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:41 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:41
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aosProducts', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aos-products/',
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
		
		{ name: 'cost', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'cost_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'price', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'price_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'maincode', type: 'text', defaultValue: null },
		
		{ name: 'part_number', type: 'text', defaultValue: null },
		
		{ name: 'category', type: 'text', defaultValue: null },
		
		{ name: 'type', type: 'text', defaultValue: null },
		
		{ name: 'url', type: 'text', defaultValue: null },
		
		{ name: 'product_image', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'currency_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'contact_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'aos_product_category_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
