/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Time: 2:42:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:5
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.callsUsers', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/calls-users/',
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
		
		{ name: 'call_id', type: 'text', defaultValue: null },
		
		{ name: 'user_id', type: 'text', defaultValue: null },
		
		{ name: 'required', type: 'text', defaultValue: null },
		
		{ name: 'accept_status', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
