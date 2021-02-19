/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:03 GMT-0400 (Bolivia Time)
 * Time: 2:43:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:3
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.jobQueue', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/job-queue/',
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
		
		{ name: 'requeue', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'retry_count', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'failure_count', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'job_delay', type: 'types.INT', defaultValue: null },
		
		{ name: 'percent_complete', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'resolution', type: 'text', defaultValue: null },
		
		{ name: 'target', type: 'text', defaultValue: null },
		
		{ name: 'client', type: 'text', defaultValue: null },
		
		{ name: 'message', type: 'text', defaultValue: null },
		
		{ name: 'data', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'execute_time', type: 'date', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'scheduler_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
