/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:24 GMT-0400 (Bolivia Time)
 * Time: 2:43:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:24
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.opportunities', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/opportunities/',
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
		
		{ name: 'amount', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'amount_usdollar', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'probability', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'opportunity_type', type: 'text', defaultValue: null },
		
		{ name: 'lead_source', type: 'text', defaultValue: null },
		
		{ name: 'next_step', type: 'text', defaultValue: null },
		
		{ name: 'sales_stage', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'date_closed', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'campaign_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'currency_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
