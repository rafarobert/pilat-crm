/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:29 GMT-0400 (Bolivia Time)
 * Time: 2:43:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:29 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:29
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.opportunitiesCstm', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/opportunities-cstm/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id_c', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'unidad_industrial_c', type: 'types.INT', defaultValue: null },
		
		{ name: 'manzano_c', type: 'types.INT', defaultValue: null },
		
		{ name: 'superficie_c', type: 'types.INT', defaultValue: null },
		
		{ name: 'jjwg_maps_lng_c', type: 'types.FLOAT', defaultValue: null },
		
		{ name: 'jjwg_maps_lat_c', type: 'types.FLOAT', defaultValue: null },
		
		{ name: 'jjwg_maps_geocode_status_c', type: 'text', defaultValue: null },
		
		{ name: 'jjwg_maps_address_c', type: 'text', defaultValue: null },
		
		{ name: 'lbl_tipo_pago_c', type: 'text', defaultValue: null },
		
		{ name: 'ubicacion_c', type: 'text', defaultValue: null },
		
		{ name: 'tipo_venta_c', type: 'text', defaultValue: null },
		
		//</es-section>
	]
});
