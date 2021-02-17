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
Ext.define('es.model.esPeople', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-esvender/es-people/',
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
		
		{ name: 'per_first_name', type: 'text', defaultValue: null },
		
		{ name: 'per_second_name', type: 'text', defaultValue: null },
		
		{ name: 'per_first_lastname', type: 'text', defaultValue: null },
		
		{ name: 'per_second_lastname', type: 'text', defaultValue: null },
		
		{ name: 'per_license', type: 'text', defaultValue: null },
		
		{ name: 'per_license_comp', type: 'text', defaultValue: null },
		
		{ name: 'per_home_address', type: 'text', defaultValue: null },
		
		{ name: 'per_mail', type: 'text', defaultValue: null },
		
		{ name: 'per_home_phone', type: 'text', defaultValue: null },
		
		{ name: 'per_cellphone', type: 'text', defaultValue: null },
		
		{ name: 'per_birthday', type: 'date', defaultValue: null },
		
		{ name: 'per_parent_id', type: 'text', defaultValue: null },
		
		{ name: 'per_par_type_doc_id', type: 'text', defaultValue: null },
		
		{ name: 'per_par_city_id', type: 'text', defaultValue: null },
		
		{ name: 'per_par_sex_id', type: 'text', defaultValue: null },
		
		{ name: 'per_par_country_id', type: 'text', defaultValue: null },
		
		{ name: 'per_par_nacionality_id', type: 'text', defaultValue: null },
		
		{ name: 'per_group', type: 'text', defaultValue: null },
		
		{ name: 'per_par_status_id', type: 'text', defaultValue: null },
		
		{ name: 'createdById', type: 'text', defaultValue: null },
		
		{ name: 'updatedById', type: 'text', defaultValue: null },
		
		{ name: 'dueAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
