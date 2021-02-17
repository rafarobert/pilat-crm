/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Time: 2:42:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:38
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.emailTemplatesCstm', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/email-templates-cstm/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id_c', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'sms_module_c', type: 'text', defaultValue: null },
		
		//</es-section>
	]
});
