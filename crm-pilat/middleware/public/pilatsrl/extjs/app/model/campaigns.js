/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:06 GMT-0400 (Bolivia Time)
 * Time: 2:42:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:6
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.campaigns', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/campaigns/',
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
		
		{ name: 'tracker_key', type: 'types.INT', defaultValue: null },
		
		{ name: 'tracker_count', type: 'types.INT', defaultValue: null },
		
		{ name: 'impressions', type: 'types.INT', defaultValue: null },
		
		{ name: 'budget', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'expected_cost', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'actual_cost', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'expected_revenue', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'refer_url', type: 'text', defaultValue: null },
		
		{ name: 'tracker_text', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'campaign_type', type: 'text', defaultValue: null },
		
		{ name: 'frequency', type: 'text', defaultValue: null },
		
		{ name: 'objective', type: 'text', defaultValue: null },
		
		{ name: 'content', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'start_date', type: 'date', defaultValue: null },
		
		{ name: 'end_date', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'currency_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'survey_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
