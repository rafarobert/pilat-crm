/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Time: 2:42:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:35
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.emailCache', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/email-cache/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'recent', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'flagged', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'answered', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'seen', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'draft', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'mailsize', type: 'types.INT', defaultValue: null },
		
		{ name: 'imap_uid', type: 'types.INT', defaultValue: null },
		
		{ name: 'msgno', type: 'types.INT', defaultValue: null },
		
		{ name: 'mbox', type: 'text', defaultValue: null },
		
		{ name: 'subject', type: 'text', defaultValue: null },
		
		{ name: 'fromaddr', type: 'text', defaultValue: null },
		
		{ name: 'toaddr', type: 'text', defaultValue: null },
		
		{ name: 'message_id', type: 'text', defaultValue: null },
		
		{ name: 'senddate', type: 'date', defaultValue: null },
		
		{ name: 'ie_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
