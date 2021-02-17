/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.esComponentFieldAttributes', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-esvender/es-component-field-attributes/',
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
		
		{ name: 'com_id', type: 'text', defaultValue: null },
		
		{ name: 'fie_id', type: 'text', defaultValue: null },
		
		{ name: 'com_fie_att_name', type: 'text', defaultValue: null },
		
		{ name: 'com_fie_att_description', type: 'text', defaultValue: null },
		
		{ name: 'com_fie_att_group', type: 'text', defaultValue: null },
		
		{ name: 'com_fie_att_par_status_id', type: 'text', defaultValue: null },
		
		{ name: 'createdById', type: 'text', defaultValue: null },
		
		{ name: 'updatedById', type: 'text', defaultValue: null },
		
		{ name: 'dueAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});