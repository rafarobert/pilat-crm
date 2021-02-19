/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:23 GMT-0400 (Bolivia Time)
 * Time: 2:44:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:23 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:23
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.users', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/users/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'system_generated_password', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'sugar_login', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'is_admin', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'external_auth_only', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'receive_notifications', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'portal_only', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'show_on_employees', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'is_group', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'factor_auth', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'user_name', type: 'text', defaultValue: null },
		
		{ name: 'user_hash', type: 'text', defaultValue: null },
		
		{ name: 'authenticate_id', type: 'text', defaultValue: null },
		
		{ name: 'first_name', type: 'text', defaultValue: null },
		
		{ name: 'last_name', type: 'text', defaultValue: null },
		
		{ name: 'title', type: 'text', defaultValue: null },
		
		{ name: 'photo', type: 'text', defaultValue: null },
		
		{ name: 'department', type: 'text', defaultValue: null },
		
		{ name: 'phone_home', type: 'text', defaultValue: null },
		
		{ name: 'phone_mobile', type: 'text', defaultValue: null },
		
		{ name: 'phone_work', type: 'text', defaultValue: null },
		
		{ name: 'phone_other', type: 'text', defaultValue: null },
		
		{ name: 'phone_fax', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'address_street', type: 'text', defaultValue: null },
		
		{ name: 'address_city', type: 'text', defaultValue: null },
		
		{ name: 'address_state', type: 'text', defaultValue: null },
		
		{ name: 'address_country', type: 'text', defaultValue: null },
		
		{ name: 'address_postalcode', type: 'text', defaultValue: null },
		
		{ name: 'employee_status', type: 'text', defaultValue: null },
		
		{ name: 'messenger_id', type: 'text', defaultValue: null },
		
		{ name: 'messenger_type', type: 'text', defaultValue: null },
		
		{ name: 'factor_auth_interface', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'pwd_last_changed', type: 'date', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'reports_to_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
