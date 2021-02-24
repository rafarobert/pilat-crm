/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:18 GMT-0400 (Bolivia Time)
 * Time: 2:43:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:18
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.oauth2tokens', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/oauth2tokens/',
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
		
		{ name: 'token_is_revoked', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'token_type', type: 'text', defaultValue: null },
		
		{ name: 'access_token', type: 'text', defaultValue: null },
		
		{ name: 'refresh_token', type: 'text', defaultValue: null },
		
		{ name: 'grant_type', type: 'text', defaultValue: null },
		
		{ name: 'state', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'access_token_expires', type: 'date', defaultValue: null },
		
		{ name: 'refresh_token_expires', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'client', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
