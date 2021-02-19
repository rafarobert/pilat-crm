/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:11 GMT-0400 (Bolivia Time)
 * Time: 2:43:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:11 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:11
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.meetings', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/meetings/',
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
		
		{ name: 'email_reminder_sent', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'duration_hours', type: 'types.INT', defaultValue: null },
		
		{ name: 'duration_minutes', type: 'types.INT', defaultValue: null },
		
		{ name: 'reminder_time', type: 'types.INT', defaultValue: null },
		
		{ name: 'email_reminder_time', type: 'types.INT', defaultValue: null },
		
		{ name: 'sequence', type: 'types.INT', defaultValue: null },
		
		{ name: 'repeat_interval', type: 'types.INT', defaultValue: null },
		
		{ name: 'repeat_count', type: 'types.INT', defaultValue: null },
		
		{ name: 'gsync_lastsync', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'location', type: 'text', defaultValue: null },
		
		{ name: 'password', type: 'text', defaultValue: null },
		
		{ name: 'join_url', type: 'text', defaultValue: null },
		
		{ name: 'host_url', type: 'text', defaultValue: null },
		
		{ name: 'displayed_url', type: 'text', defaultValue: null },
		
		{ name: 'creator', type: 'text', defaultValue: null },
		
		{ name: 'external_id', type: 'text', defaultValue: null },
		
		{ name: 'parent_type', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'type', type: 'text', defaultValue: null },
		
		{ name: 'outlook_id', type: 'text', defaultValue: null },
		
		{ name: 'repeat_type', type: 'text', defaultValue: null },
		
		{ name: 'repeat_dow', type: 'text', defaultValue: null },
		
		{ name: 'recurring_source', type: 'text', defaultValue: null },
		
		{ name: 'gsync_id', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'date_start', type: 'date', defaultValue: null },
		
		{ name: 'date_end', type: 'date', defaultValue: null },
		
		{ name: 'repeat_until', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'parent_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'repeat_parent_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
