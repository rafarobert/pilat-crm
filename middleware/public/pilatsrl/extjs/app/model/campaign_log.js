/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:09 GMT-0400 (Bolivia Time)
 * Time: 2:42:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:9
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.campaignLog', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/campaign-log/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'archived', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'hits', type: 'types.INT', defaultValue: null },
		
		{ name: 'target_tracker_key', type: 'text', defaultValue: null },
		
		{ name: 'target_id', type: 'text', defaultValue: null },
		
		{ name: 'target_type', type: 'text', defaultValue: null },
		
		{ name: 'activity_type', type: 'text', defaultValue: null },
		
		{ name: 'related_id', type: 'text', defaultValue: null },
		
		{ name: 'related_type', type: 'text', defaultValue: null },
		
		{ name: 'more_information', type: 'text', defaultValue: null },
		
		{ name: 'activity_date', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'campaign_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'list_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'marketing_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
