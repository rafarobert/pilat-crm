/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:24 GMT-0400 (Bolivia Time)
 * Time: 2:41:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:24
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aorConditions', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aor-conditions/',
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
		
		{ name: 'parameter', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'condition_order', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'logic_op', type: 'text', defaultValue: null },
		
		{ name: 'parenthesis', type: 'text', defaultValue: null },
		
		{ name: 'field', type: 'text', defaultValue: null },
		
		{ name: 'operator', type: 'text', defaultValue: null },
		
		{ name: 'value_type', type: 'text', defaultValue: null },
		
		{ name: 'value', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'module_path', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'aor_report_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
