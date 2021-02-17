/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:29 GMT-0400 (Bolivia Time)
 * Time: 2:42:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:29 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:29
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.emailman', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/emailman/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.INT', defaultValue: null },
		
		{ name: 'in_queue', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'related_confirm_opt_in', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'send_attempts', type: 'types.INT', defaultValue: null },
		
		{ name: 'related_type', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'send_date_time', type: 'date', defaultValue: null },
		
		{ name: 'in_queue_date', type: 'date', defaultValue: null },
		
		{ name: 'user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'campaign_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'marketing_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'list_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'related_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
