/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Time: 20:7:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Last time updated: 20:7:17
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.g3lGelWhatsapp', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/g3l-gel-whatsapp/',
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
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'parent_type', type: 'text', defaultValue: null },
		
		{ name: 'numero_envio', type: 'text', defaultValue: null },
		
		{ name: 'estado_envio', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'mensaje', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'fecha_envio', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'parent_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
