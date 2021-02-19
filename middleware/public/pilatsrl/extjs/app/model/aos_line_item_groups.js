/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:36 GMT-0400 (Bolivia Time)
 * Time: 2:41:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:36
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aosLineItemGroups', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aos-line-item-groups/',
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
		
		{ name: 'total_amt', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_amt_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'discount_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'discount_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'subtotal_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'subtotal_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'tax_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'tax_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'subtotal_tax_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'subtotal_tax_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'parent_type', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'parent_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'currency_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
