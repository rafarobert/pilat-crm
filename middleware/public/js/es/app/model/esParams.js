/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Time: 2:25:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:32
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.esParams', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-esvender/es-params/',
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
		
		{ name: 'par_cod', type: 'text', defaultValue: null },
		
		{ name: 'par_description', type: 'text', defaultValue: null },
		
		{ name: 'par_abbr', type: 'text', defaultValue: null },
		
		{ name: 'par_group', type: 'text', defaultValue: null },
		
		{ name: 'par_dictionary_id', type: 'text', defaultValue: null },
		
		{ name: 'par_order', type: 'types.INT', defaultValue: null },
		
		{ name: 'par_status_id', type: 'text', defaultValue: null },
		
		{ name: 'createdById', type: 'text', defaultValue: null },
		
		{ name: 'updatedById', type: 'text', defaultValue: null },
		
		{ name: 'dueAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
