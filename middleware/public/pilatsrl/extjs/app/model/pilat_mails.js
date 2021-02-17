/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Time: 12:54:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Last time updated: 12:54:5
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.pilatMails', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/pilat-mails/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: '_id', type: 'text', defaultValue: null },
		
		{ name: 'id', type: 'types.INT', defaultValue: null },
		
		{ name: 'mai_port', type: 'types.INT', defaultValue: null },
		
		{ name: 'mai_description', type: 'text', defaultValue: null },
		
		{ name: 'mai_user_account', type: 'text', defaultValue: null },
		
		{ name: 'mai_user_password', type: 'text', defaultValue: null },
		
		{ name: 'mai_host', type: 'text', defaultValue: null },
		
		{ name: 'mai_protocol', type: 'text', defaultValue: null },
		
		{ name: 'mai_bus_id', type: 'text', defaultValue: null },
		
		{ name: 'mai_par_status_id', type: 'text', defaultValue: null },
		
		{ name: 'mai_group', type: 'text', defaultValue: null },
		
		{ name: 'mai_subject', type: 'text', defaultValue: null },
		
		{ name: 'mai_to', type: 'text', defaultValue: null },
		
		{ name: 'updatedBy', type: 'text', defaultValue: null },
		
		{ name: 'createdBy', type: 'text', defaultValue: null },
		
		{ name: 'mai_bcc', type: 'text', defaultValue: null },
		
		{ name: 'mai_cc', type: 'text', defaultValue: null },
		
		{ name: 'mai_text', type: 'text', defaultValue: null },
		
		{ name: 'mai_html', type: 'text', defaultValue: null },
		
		{ name: 'dueAt', type: 'date', defaultValue: null },
		
		{ name: 'createdAt', type: 'date', defaultValue: null },
		
		{ name: 'updatedAt', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
