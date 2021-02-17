/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:45 GMT-0400 (Bolivia Time)
 * Time: 2:40:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:45
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.accounts', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/accounts/',
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
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'account_type', type: 'text', defaultValue: null },
		
		{ name: 'industry', type: 'text', defaultValue: null },
		
		{ name: 'annual_revenue', type: 'text', defaultValue: null },
		
		{ name: 'phone_fax', type: 'text', defaultValue: null },
		
		{ name: 'billing_address_street', type: 'text', defaultValue: null },
		
		{ name: 'billing_address_city', type: 'text', defaultValue: null },
		
		{ name: 'billing_address_state', type: 'text', defaultValue: null },
		
		{ name: 'billing_address_postalcode', type: 'text', defaultValue: null },
		
		{ name: 'billing_address_country', type: 'text', defaultValue: null },
		
		{ name: 'rating', type: 'text', defaultValue: null },
		
		{ name: 'phone_office', type: 'text', defaultValue: null },
		
		{ name: 'phone_alternate', type: 'text', defaultValue: null },
		
		{ name: 'website', type: 'text', defaultValue: null },
		
		{ name: 'ownership', type: 'text', defaultValue: null },
		
		{ name: 'employees', type: 'text', defaultValue: null },
		
		{ name: 'ticker_symbol', type: 'text', defaultValue: null },
		
		{ name: 'shipping_address_street', type: 'text', defaultValue: null },
		
		{ name: 'shipping_address_city', type: 'text', defaultValue: null },
		
		{ name: 'shipping_address_state', type: 'text', defaultValue: null },
		
		{ name: 'shipping_address_postalcode', type: 'text', defaultValue: null },
		
		{ name: 'shipping_address_country', type: 'text', defaultValue: null },
		
		{ name: 'sic_code', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'parent_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'campaign_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
