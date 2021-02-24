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
Ext.define('es.model.leadsCstm', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/leads-cstm/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id_c', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'actividad_llamar_c', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'tiene_whatsapp_c', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'correo_principal_c', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'correo_alternativo_c', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'jjwg_maps_lng_c', type: 'types.FLOAT', defaultValue: null },
		
		{ name: 'jjwg_maps_lat_c', type: 'types.FLOAT', defaultValue: null },
		
		{ name: 'superficie_c', type: 'types.DOUBLE', defaultValue: null },
		
		{ name: 'jjwg_maps_geocode_status_c', type: 'text', defaultValue: null },
		
		{ name: 'jjwg_maps_address_c', type: 'text', defaultValue: null },
		
		{ name: 'extension_documento_c', type: 'text', defaultValue: null },
		
		{ name: 'genero_c', type: 'text', defaultValue: null },
		
		{ name: 'etapas_c', type: 'text', defaultValue: null },
		
		{ name: 'numero_documento_c', type: 'text', defaultValue: null },
		
		{ name: 'sec_email_c', type: 'text', defaultValue: null },
		
		{ name: 'nombre_empresa_c', type: 'text', defaultValue: null },
		
		{ name: 'nombre_contacto_c', type: 'text', defaultValue: null },
		
		{ name: 'nit_empresa_c', type: 'text', defaultValue: null },
		
		{ name: 'email_empresa_c', type: 'text', defaultValue: null },
		
		{ name: 'phone_mobil_2_c', type: 'text', defaultValue: null },
		
		{ name: 'phone_mobil_3_c', type: 'text', defaultValue: null },
		
		{ name: 'asesor_negocio_c', type: 'text', defaultValue: null },
		
		{ name: 'tipo_lead_c', type: 'text', defaultValue: null },
		
		{ name: 'rubro_c', type: 'text', defaultValue: null },
		
		{ name: 'tipo_cliente_c', type: 'text', defaultValue: null },
		
		{ name: 'sexo_c', type: 'text', defaultValue: null },
		
		{ name: 'ciudad_c', type: 'text', defaultValue: null },
		
		{ name: 'departamento_c', type: 'text', defaultValue: null },
		
		{ name: 'pais_c', type: 'text', defaultValue: null },
		
		{ name: 'direccion_c', type: 'text', defaultValue: null },
		
		{ name: 'actividad_c', type: 'text', defaultValue: null },
		
		{ name: 'actividad_llamar_fecha_c', type: 'date', defaultValue: null },
		
		{ name: 'fecha_validex_c', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
