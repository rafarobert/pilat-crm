/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:01 GMT-0400 (Bolivia Time)
 * Time: 2:44:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:1
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.saiClientes', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/sai-clientes/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'gbagecage', type: 'number', defaultValue: null },
		
		{ name: 'ilsupcage', type: 'number', defaultValue: null },
		
		{ name: 'gbagetper', type: 'types.INT', defaultValue: null },
		
		{ name: 'gbagesexo', type: 'text', defaultValue: null },
		
		{ name: 'gbagenruc', type: 'text', defaultValue: null },
		
		{ name: 'gbagendid', type: 'text', defaultValue: null },
		
		{ name: 'gbagecorg', type: 'text', defaultValue: null },
		
		{ name: 'gbageappa', type: 'text', defaultValue: null },
		
		{ name: 'gbageapma', type: 'text', defaultValue: null },
		
		{ name: 'prefijo', type: 'text', defaultValue: null },
		
		{ name: 'gbageapca', type: 'text', defaultValue: null },
		
		{ name: 'gbagenoms', type: 'text', defaultValue: null },
		
		{ name: 'gbagenomb', type: 'text', defaultValue: null },
		
		{ name: 'gbtlfntl1', type: 'text', defaultValue: null },
		
		{ name: 'gbtlfntl2', type: 'text', defaultValue: null },
		
		{ name: 'gbtlfntl3', type: 'text', defaultValue: null },
		
		{ name: 'gbtlfntl4', type: 'text', defaultValue: null },
		
		{ name: 'gbtlfntl5', type: 'text', defaultValue: null },
		
		{ name: 'gbtlfntl6', type: 'text', defaultValue: null },
		
		{ name: 'gbpaidesc', type: 'text', defaultValue: null },
		
		{ name: 'gbdptdesc', type: 'text', defaultValue: null },
		
		{ name: 'gbciudesc', type: 'text', defaultValue: null },
		
		{ name: 'gbdirdire', type: 'text', defaultValue: null },
		
		{ name: 'gbemamail', type: 'text', defaultValue: null },
		
		{ name: 'gbagefnac', type: 'date', defaultValue: null },
		
		{ name: 'gbagefreg', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
