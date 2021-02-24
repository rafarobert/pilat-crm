/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:53 GMT-0400 (Bolivia Time)
 * Time: 2:40:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:53
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aclRolesActions', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/acl-roles-actions/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'text', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'access_override', type: 'types.INT', defaultValue: null },
		
		{ name: 'role_id', type: 'text', defaultValue: null },
		
		{ name: 'action_id', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
