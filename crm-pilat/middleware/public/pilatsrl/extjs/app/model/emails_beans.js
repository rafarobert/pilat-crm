/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Time: 2:42:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:31
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.emailsBeans', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/emails-beans/',
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
		
		{ name: 'bean_module', type: 'text', defaultValue: null },
		
		{ name: 'campaign_data', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'email_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'bean_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
