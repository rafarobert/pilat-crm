/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Time: 2:43:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:22
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.oauthTokens', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/oauth-tokens/',
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
		
		{ name: 'token_ts', type: 'number', defaultValue: null },
		
		{ name: 'secret', type: 'text', defaultValue: null },
		
		{ name: 'tstate', type: 'text', defaultValue: null },
		
		{ name: 'verify', type: 'text', defaultValue: null },
		
		{ name: 'callback_url', type: 'text', defaultValue: null },
		
		{ name: 'consumer', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
