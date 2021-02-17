/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Time: 2:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:34
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.emailAddrBeanRel', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/email-addr-bean-rel/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'primary_address', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'reply_to_address', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'bean_module', type: 'text', defaultValue: null },
		
		{ name: 'date_created', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'email_address_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'bean_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
