/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:53 GMT-0400 (Bolivia Time)
 * Time: 2:42:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:53
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.inboundEmail', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/inbound-email/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'text', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'delete_seen', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'is_personal', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'port', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'server_url', type: 'text', defaultValue: null },
		
		{ name: 'email_user', type: 'text', defaultValue: null },
		
		{ name: 'email_password', type: 'text', defaultValue: null },
		
		{ name: 'service', type: 'text', defaultValue: null },
		
		{ name: 'mailbox_type', type: 'text', defaultValue: null },
		
		{ name: 'mailbox', type: 'text', defaultValue: null },
		
		{ name: 'stored_options', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'template_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'group_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'groupfolder_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
