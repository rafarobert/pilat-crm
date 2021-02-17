/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Time: 2:25:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:33
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.esUsers', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-esvender/es-users/',
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
		
		{ name: 'usr_id', type: 'text', defaultValue: null },
		
		{ name: 'usr_username', type: 'text', defaultValue: null },
		
		{ name: 'usr_password', type: 'text', defaultValue: null },
		
		{ name: 'usr_mail', type: 'text', defaultValue: null },
		
		{ name: 'usr_token', type: 'text', defaultValue: null },
		
		{ name: 'usr_name', type: 'text', defaultValue: null },
		
		{ name: 'usr_lastname', type: 'text', defaultValue: null },
		
		{ name: 'usr_par_auth_strategy_id', type: 'text', defaultValue: null },
		
		{ name: 'usr_accept_terms', type: 'boolean', defaultValue: null },
		
		{ name: 'usr_rol_id', type: 'text', defaultValue: null },
		
		{ name: 'usr_mod_id', type: 'text', defaultValue: null },
		
		{ name: 'usr_person_id', type: 'text', defaultValue: null },
		
		{ name: 'usr_fil_img_id', type: 'text', defaultValue: null },
		
		{ name: 'usr_last_login', type: 'date', defaultValue: null },
		
		{ name: 'usr_pwd_change', type: 'types.INT', defaultValue: null },
		
		{ name: 'usr_par_status_id', type: 'text', defaultValue: null },
		
		{ name: 'usr_group', type: 'text', defaultValue: null },
		
		{ name: 'createdById', type: 'text', defaultValue: null },
		
		{ name: 'updatedById', type: 'text', defaultValue: null },
		
		{ name: 'dueAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
