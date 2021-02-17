/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:21 GMT-0400 (Bolivia Time)
 * Time: 2:43:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:21
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.oauthNonce', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/oauth-nonce/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'conskey', type: 'text', defaultValue: null },
		
		{ name: 'nonce', type: 'text', defaultValue: null },
		
		{ name: 'nonce_ts', type: 'number', defaultValue: null },
		
		//</es-section>
	]
});
