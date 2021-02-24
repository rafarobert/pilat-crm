/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:58 GMT-0400 (Bolivia Time)
 * Time: 2:41:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:58
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.bugs', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/bugs/',
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
		
		{ name: 'bug_number', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'type', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'priority', type: 'text', defaultValue: null },
		
		{ name: 'resolution', type: 'text', defaultValue: null },
		
		{ name: 'found_in_release', type: 'text', defaultValue: null },
		
		{ name: 'fixed_in_release', type: 'text', defaultValue: null },
		
		{ name: 'source', type: 'text', defaultValue: null },
		
		{ name: 'product_category', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'work_log', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
