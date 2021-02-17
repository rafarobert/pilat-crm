/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Time: 2:42:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:47
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.fpEventsLeads1C', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/fp-events-leads-1-c/',
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
		
		{ name: 'email_responded', type: 'types.INT', defaultValue: null },
		
		{ name: 'fp_events_leads_1fp_events_ida', type: 'text', defaultValue: null },
		
		{ name: 'fp_events_leads_1leads_idb', type: 'text', defaultValue: null },
		
		{ name: 'invite_status', type: 'text', defaultValue: null },
		
		{ name: 'accept_status', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});