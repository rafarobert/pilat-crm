/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Time: 2:41:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:50
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aosQuotesCstm', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aos-quotes-cstm/',
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
		
		{ name: 'metro_cuadrado_c', type: 'types.INT', defaultValue: null },
		
		{ name: 'frente_metros_c', type: 'types.INT', defaultValue: null },
		
		{ name: 'fondo_metros_c', type: 'types.INT', defaultValue: null },
		
		{ name: 'lbl_superficie_c', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'lbl_cuotainicial_c', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'saldo_cuota_inical_c', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'precio_mcuadrado_c', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'saldo_c', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'cuota_mensual_c', type: 'types.DECIMAL', defaultValue: null },
		
		{ name: 'ubicacion_c', type: 'text', defaultValue: null },
		
		{ name: 'lbl_tipoventa_c', type: 'text', defaultValue: null },
		
		{ name: 'term_years_c', type: 'text', defaultValue: null },
		
		{ name: 'tipo_pago_c', type: 'text', defaultValue: null },
		
		{ name: 'link_terreno_c', type: 'text', defaultValue: null },
		
		{ name: 'moneda_c', type: 'text', defaultValue: null },
		
		{ name: 'fecha_envio_programada_c', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
