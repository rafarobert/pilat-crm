/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:32 GMT-0400 (Bolivia Time)
 * Time: 2:42:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:32
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.emailsText', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/emails-text/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'email_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'from_addr', type: 'text', defaultValue: null },
		
		{ name: 'reply_to_addr', type: 'text', defaultValue: null },
		
		{ name: 'to_addrs', type: 'text', defaultValue: null },
		
		{ name: 'cc_addrs', type: 'text', defaultValue: null },
		
		{ name: 'bcc_addrs', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'description_html', type: 'text', defaultValue: null },
		
		{ name: 'raw_source', type: 'text', defaultValue: null },
		
		//</es-section>
	]
});
