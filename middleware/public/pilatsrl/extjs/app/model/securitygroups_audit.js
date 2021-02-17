/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Time: 2:44:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:4
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.securitygroupsAudit', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/securitygroups-audit/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'text', defaultValue: null },
		
		{ name: 'field_name', type: 'text', defaultValue: null },
		
		{ name: 'data_type', type: 'text', defaultValue: null },
		
		{ name: 'before_value_string', type: 'text', defaultValue: null },
		
		{ name: 'after_value_string', type: 'text', defaultValue: null },
		
		{ name: 'before_value_text', type: 'text', defaultValue: null },
		
		{ name: 'after_value_text', type: 'text', defaultValue: null },
		
		{ name: 'date_created', type: 'date', defaultValue: null },
		
		{ name: 'parent_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
