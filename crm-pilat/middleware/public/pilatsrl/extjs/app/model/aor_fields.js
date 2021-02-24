/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:25 GMT-0400 (Bolivia Time)
 * Time: 2:41:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:25
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aorFields', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aor-fields/',
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
		
		{ name: 'display', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'link', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'group_by', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'field_order', type: 'types.INT', defaultValue: null },
		
		{ name: 'group_display', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'field', type: 'text', defaultValue: null },
		
		{ name: 'label', type: 'text', defaultValue: null },
		
		{ name: 'field_function', type: 'text', defaultValue: null },
		
		{ name: 'sort_by', type: 'text', defaultValue: null },
		
		{ name: 'format', type: 'text', defaultValue: null },
		
		{ name: 'total', type: 'text', defaultValue: null },
		
		{ name: 'sort_order', type: 'text', defaultValue: null },
		
		{ name: 'group_order', type: 'text', defaultValue: null },
		
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
