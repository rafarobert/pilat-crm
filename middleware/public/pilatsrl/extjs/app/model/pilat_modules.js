/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:29 GMT-0400 (Bolivia Time)
 * Time: 23:45:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:29 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:29
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.pilatModules', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/pilat-modules/',
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
		
		{ name: 'mod_code', type: 'text', defaultValue: null },
		
		{ name: 'mod_description', type: 'text', defaultValue: null },
		
		{ name: 'mod_abbr', type: 'text', defaultValue: null },
		
		{ name: 'mod_icon', type: 'text', defaultValue: null },
		
		{ name: 'mod_group', type: 'text', defaultValue: null },
		
		{ name: 'mod_par_status_id', type: 'text', defaultValue: null },
		
		{ name: 'createdBy', type: 'text', defaultValue: null },
		
		{ name: 'updatedBy', type: 'text', defaultValue: null },
		
		{ name: 'mod_parent_id', type: 'text', defaultValue: null },
		
		{ name: 'dueAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
