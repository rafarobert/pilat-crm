/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:15 GMT-0400 (Bolivia Time)
 * Time: 2:42:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:15
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.contacts', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/contacts/',
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
		
		{ name: 'do_not_call', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'portal_account_disabled', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'salutation', type: 'text', defaultValue: null },
		
		{ name: 'first_name', type: 'text', defaultValue: null },
		
		{ name: 'last_name', type: 'text', defaultValue: null },
		
		{ name: 'title', type: 'text', defaultValue: null },
		
		{ name: 'photo', type: 'text', defaultValue: null },
		
		{ name: 'department', type: 'text', defaultValue: null },
		
		{ name: 'phone_home', type: 'text', defaultValue: null },
		
		{ name: 'phone_mobile', type: 'text', defaultValue: null },
		
		{ name: 'phone_work', type: 'text', defaultValue: null },
		
		{ name: 'phone_other', type: 'text', defaultValue: null },
		
		{ name: 'phone_fax', type: 'text', defaultValue: null },
		
		{ name: 'lawful_basis_source', type: 'text', defaultValue: null },
		
		{ name: 'primary_address_street', type: 'text', defaultValue: null },
		
		{ name: 'primary_address_city', type: 'text', defaultValue: null },
		
		{ name: 'primary_address_state', type: 'text', defaultValue: null },
		
		{ name: 'primary_address_postalcode', type: 'text', defaultValue: null },
		
		{ name: 'primary_address_country', type: 'text', defaultValue: null },
		
		{ name: 'alt_address_street', type: 'text', defaultValue: null },
		
		{ name: 'alt_address_city', type: 'text', defaultValue: null },
		
		{ name: 'alt_address_state', type: 'text', defaultValue: null },
		
		{ name: 'alt_address_postalcode', type: 'text', defaultValue: null },
		
		{ name: 'alt_address_country', type: 'text', defaultValue: null },
		
		{ name: 'assistant', type: 'text', defaultValue: null },
		
		{ name: 'assistant_phone', type: 'text', defaultValue: null },
		
		{ name: 'lead_source', type: 'text', defaultValue: null },
		
		{ name: 'joomla_account_id', type: 'text', defaultValue: null },
		
		{ name: 'portal_user_type', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'lawful_basis', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'date_reviewed', type: 'date', defaultValue: null },
		
		{ name: 'birthdate', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'reports_to_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'campaign_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
