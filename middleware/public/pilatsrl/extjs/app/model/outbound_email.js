/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:31 GMT-0400 (Bolivia Time)
 * Time: 2:43:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:31
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.outboundEmail', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/outbound-email/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'mail_smtpauth_req', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'type', type: 'text', defaultValue: null },
		
		{ name: 'smtp_from_name', type: 'text', defaultValue: null },
		
		{ name: 'smtp_from_addr', type: 'text', defaultValue: null },
		
		{ name: 'mail_sendtype', type: 'text', defaultValue: null },
		
		{ name: 'mail_smtptype', type: 'text', defaultValue: null },
		
		{ name: 'mail_smtpserver', type: 'text', defaultValue: null },
		
		{ name: 'mail_smtpport', type: 'text', defaultValue: null },
		
		{ name: 'mail_smtpuser', type: 'text', defaultValue: null },
		
		{ name: 'mail_smtppass', type: 'text', defaultValue: null },
		
		{ name: 'mail_smtpssl', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
