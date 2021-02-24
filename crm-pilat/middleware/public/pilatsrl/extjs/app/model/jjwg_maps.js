/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:58 GMT-0400 (Bolivia Time)
 * Time: 2:42:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:58
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.jjwgMaps', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/jjwg-maps/',
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
		
		{ name: 'distance', type: 'types.FLOAT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'unit_type', type: 'text', defaultValue: null },
		
		{ name: 'module_type', type: 'text', defaultValue: null },
		
		{ name: 'parent_type', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'parent_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
