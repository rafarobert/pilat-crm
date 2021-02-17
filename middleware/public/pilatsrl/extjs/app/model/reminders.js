/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:57 GMT-0400 (Bolivia Time)
 * Time: 2:43:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:57
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.reminders', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/reminders/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'popup', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'email', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'email_sent', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'popup_viewed', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'date_willexecute', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'timer_popup', type: 'text', defaultValue: null },
		
		{ name: 'timer_email', type: 'text', defaultValue: null },
		
		{ name: 'related_event_module', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'related_event_module_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
