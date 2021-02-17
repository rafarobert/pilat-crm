/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Time: 2:43:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:8
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.leadsImport', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/leads-import/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'PROSPECCION', type: 'text', defaultValue: null },
		
		{ name: 'OFICIAL', type: 'text', defaultValue: null },
		
		{ name: 'MES', type: 'text', defaultValue: null },
		
		{ name: 'CLIENTE', type: 'text', defaultValue: null },
		
		{ name: 'LUGARORUBRODETRABAJO', type: 'text', defaultValue: null },
		
		{ name: 'TELÉFONO', type: 'text', defaultValue: null },
		
		{ name: 'FECHA', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
