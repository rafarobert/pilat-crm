/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Time: 0:23:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:2
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.g3lGelEmailAudit', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/g3l-gel-email-audit/',
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
