/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:30 GMT-0400 (Bolivia Time)
 * Time: 2:41:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:30 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:30
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aosContracts', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aos-contracts/',
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
		
		{ name: 'total_contract_value', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_contract_value_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_amt', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_amt_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'subtotal_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'subtotal_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'discount_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'discount_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'tax_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'tax_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'shipping_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'shipping_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'shipping_tax_amt', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'shipping_tax_amt_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_amount', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'total_amount_usdollar', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'reference_code', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'contract_type', type: 'text', defaultValue: null },
		
		{ name: 'shipping_tax', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'start_date', type: 'date', defaultValue: null },
		
		{ name: 'end_date', type: 'date', defaultValue: null },
		
		{ name: 'customer_signed_date', type: 'date', defaultValue: null },
		
		{ name: 'company_signed_date', type: 'date', defaultValue: null },
		
		{ name: 'renewal_reminder_date', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'currency_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'contract_account_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'opportunity_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'contact_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'call_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
