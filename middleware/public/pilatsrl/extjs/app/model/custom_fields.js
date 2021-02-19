/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Time: 2:42:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:21
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.customFields', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/custom-fields/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'set_num', type: 'types.INT', defaultValue: null },
		
		{ name: 'bean_id', type: 'text', defaultValue: null },
		
		{ name: 'field0', type: 'text', defaultValue: null },
		
		{ name: 'field1', type: 'text', defaultValue: null },
		
		{ name: 'field2', type: 'text', defaultValue: null },
		
		{ name: 'field3', type: 'text', defaultValue: null },
		
		{ name: 'field4', type: 'text', defaultValue: null },
		
		{ name: 'field5', type: 'text', defaultValue: null },
		
		{ name: 'field6', type: 'text', defaultValue: null },
		
		{ name: 'field7', type: 'text', defaultValue: null },
		
		{ name: 'field8', type: 'text', defaultValue: null },
		
		{ name: 'field9', type: 'text', defaultValue: null },
		
		//</es-section>
	]
});
