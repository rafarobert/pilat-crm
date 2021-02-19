/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Time: 2:44:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:25
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.usersFeeds', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/users-feeds/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'rank', type: 'types.INT', defaultValue: null },
		
		{ name: 'user_id', type: 'text', defaultValue: null },
		
		{ name: 'feed_id', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
