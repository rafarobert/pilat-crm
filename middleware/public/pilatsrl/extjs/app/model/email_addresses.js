/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:33 GMT-0400 (Bolivia Time)
 * Time: 2:42:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:33
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.emailAddresses', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/email-addresses/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'invalid_email', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'opt_out', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'email_address', type: 'text', defaultValue: null },
		
		{ name: 'email_address_caps', type: 'text', defaultValue: null },
		
		{ name: 'confirm_opt_in', type: 'text', defaultValue: null },
		
		{ name: 'confirm_opt_in_token', type: 'text', defaultValue: null },
		
		{ name: 'confirm_opt_in_date', type: 'date', defaultValue: null },
		
		{ name: 'confirm_opt_in_sent_date', type: 'date', defaultValue: null },
		
		{ name: 'confirm_opt_in_fail_date', type: 'date', defaultValue: null },
		
		{ name: 'date_created', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
