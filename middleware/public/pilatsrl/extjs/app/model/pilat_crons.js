/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.pilatCrons', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/pilat-crons/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: '_id', type: 'text', defaultValue: null },
		
		{ name: 'id', type: 'number', defaultValue: null },
		
		{ name: 'cro_status', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'cro_description', type: 'text', defaultValue: null },
		
		{ name: 'cro_expression', type: 'text', defaultValue: null },
		
		{ name: 'cro_group', type: 'text', defaultValue: null },
		
		{ name: 'cro_mai_id', type: 'text', defaultValue: null },
		
		{ name: 'createdBy', type: 'text', defaultValue: null },
		
		{ name: 'updatedBy', type: 'text', defaultValue: null },
		
		{ name: 'dueAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
