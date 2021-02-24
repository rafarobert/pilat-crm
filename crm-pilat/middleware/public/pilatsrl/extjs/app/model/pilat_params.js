/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:36 GMT-0400 (Bolivia Time)
 * Time: 2:43:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:36
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.pilatParams', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/pilat-params/',
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
		
		{ name: 'par_order', type: 'number', defaultValue: null },
		
		{ name: 'par_cod', type: 'text', defaultValue: null },
		
		{ name: 'par_description', type: 'text', defaultValue: null },
		
		{ name: 'par_abbr', type: 'text', defaultValue: null },
		
		{ name: 'par_group', type: 'text', defaultValue: null },
		
		{ name: 'createdBy', type: 'text', defaultValue: null },
		
		{ name: 'updatedBy', type: 'text', defaultValue: null },
		
		{ name: 'par_dictionary_id', type: 'text', defaultValue: null },
		
		{ name: 'par_status_id', type: 'text', defaultValue: null },
		
		{ name: 'par_parent_id', type: 'text', defaultValue: null },
		
		{ name: 'duaAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
