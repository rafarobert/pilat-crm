/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:55 GMT-0400 (Bolivia Time)
 * Time: 2:43:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:55
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.relationships', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/relationships/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'reverse', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'relationship_name', type: 'text', defaultValue: null },
		
		{ name: 'lhs_module', type: 'text', defaultValue: null },
		
		{ name: 'lhs_table', type: 'text', defaultValue: null },
		
		{ name: 'lhs_key', type: 'text', defaultValue: null },
		
		{ name: 'rhs_module', type: 'text', defaultValue: null },
		
		{ name: 'rhs_table', type: 'text', defaultValue: null },
		
		{ name: 'rhs_key', type: 'text', defaultValue: null },
		
		{ name: 'join_table', type: 'text', defaultValue: null },
		
		{ name: 'join_key_lhs', type: 'text', defaultValue: null },
		
		{ name: 'join_key_rhs', type: 'text', defaultValue: null },
		
		{ name: 'relationship_type', type: 'text', defaultValue: null },
		
		{ name: 'relationship_role_column', type: 'text', defaultValue: null },
		
		{ name: 'relationship_role_column_value', type: 'text', defaultValue: null },
		
		//</es-section>
	]
});
