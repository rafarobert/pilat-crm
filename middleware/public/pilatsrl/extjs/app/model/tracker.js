/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:21 GMT-0400 (Bolivia Time)
 * Time: 2:44:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:21
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.tracker', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/tracker/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.INT', defaultValue: null },
		
		{ name: 'visible', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'user_id', type: 'text', defaultValue: null },
		
		{ name: 'module_name', type: 'text', defaultValue: null },
		
		{ name: 'item_id', type: 'text', defaultValue: null },
		
		{ name: 'item_summary', type: 'text', defaultValue: null },
		
		{ name: 'action', type: 'text', defaultValue: null },
		
		{ name: 'session_id', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'monitor_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
