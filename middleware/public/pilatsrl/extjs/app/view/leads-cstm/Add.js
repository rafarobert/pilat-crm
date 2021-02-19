/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:46 GMT-0400 (Bolivia Time)
 * Time: 18:37:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:46 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:46
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.leads-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.leadsCstmAdd',
	id: 'leads-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add LeadCstm',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'leads-cstm-form',
					bodyPadding: 20,
					title: '',
					defaults: { // defaults are applied to items, not the container
						allowBlank: false,
						allowOnlyWhitespace: false,
						msgTarget: 'side',
						xtype: 'textfield',
						anchor: '100%'
					},
					items: [
						//<es-section>
						
						{
							fieldLabel: 'id_c',
							name: 'id_c',
						},
						
						
						
						
						
						{
							fieldLabel: 'jjwg_maps_geocode_status_c',
							name: 'jjwg_maps_geocode_status_c',
						},
						
						{
							fieldLabel: 'jjwg_maps_address_c',
							name: 'jjwg_maps_address_c',
						},
						
						{
							fieldLabel: 'extension_documento_c',
							name: 'extension_documento_c',
						},
						
						{
							fieldLabel: 'genero_c',
							name: 'genero_c',
						},
						
						{
							fieldLabel: 'etapas_c',
							name: 'etapas_c',
						},
						
						{
							fieldLabel: 'numero_documento_c',
							name: 'numero_documento_c',
						},
						
						{
							fieldLabel: 'sec_email_c',
							name: 'sec_email_c',
						},
						
						{
							fieldLabel: 'nombre_empresa_c',
							name: 'nombre_empresa_c',
						},
						
						{
							fieldLabel: 'nombre_contacto_c',
							name: 'nombre_contacto_c',
						},
						
						{
							fieldLabel: 'nit_empresa_c',
							name: 'nit_empresa_c',
						},
						
						{
							fieldLabel: 'email_empresa_c',
							name: 'email_empresa_c',
						},
						
						{
							fieldLabel: 'phone_mobil_2_c',
							name: 'phone_mobil_2_c',
						},
						
						{
							fieldLabel: 'phone_mobil_3_c',
							name: 'phone_mobil_3_c',
						},
						
						{
							fieldLabel: 'asesor_negocio_c',
							name: 'asesor_negocio_c',
						},
						
						{
							fieldLabel: 'tipo_lead_c',
							name: 'tipo_lead_c',
						},
						
						{
							fieldLabel: 'rubro_c',
							name: 'rubro_c',
						},
						
						{
							fieldLabel: 'tipo_cliente_c',
							name: 'tipo_cliente_c',
						},
						
						{
							fieldLabel: 'sexo_c',
							name: 'sexo_c',
						},
						
						{
							fieldLabel: 'ciudad_c',
							name: 'ciudad_c',
						},
						
						{
							fieldLabel: 'departamento_c',
							name: 'departamento_c',
						},
						
						{
							fieldLabel: 'pais_c',
							name: 'pais_c',
						},
						
						{
							fieldLabel: 'direccion_c',
							name: 'direccion_c',
						},
						
						
						{
							fieldLabel: 'actividad_c',
							name: 'actividad_c',
						},
						
						
						
						
						{
							fieldLabel: 'jjwg_maps_lng_c',
							name: 'jjwg_maps_lng_c',
						},
						
						{
							fieldLabel: 'jjwg_maps_lat_c',
							name: 'jjwg_maps_lat_c',
						},
						
						
						
						{
							fieldLabel: 'superficie_c',
							name: 'superficie_c',
						},
						
						
						{
							fieldLabel: 'actividad_llamar_c',
							name: 'actividad_llamar_c',
						},
						
						{
							fieldLabel: 'tiene_whatsapp_c',
							name: 'tiene_whatsapp_c',
						},
						
						{
							fieldLabel: 'correo_principal_c',
							name: 'correo_principal_c',
						},
						
						{
							fieldLabel: 'correo_alternativo_c',
							name: 'correo_alternativo_c',
						},
						
						
						
						{
							fieldLabel: 'actividad_llamar_fecha_c',
							name: 'actividad_llamar_fecha_c',
							id:'actividad_llamar_fecha_c',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'fecha_validex_c',
							name: 'fecha_validex_c',
							id:'fecha_validex_c',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						//</es-section>
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'save',
							text: 'Save'
						},
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'cancel',
							text: 'Cancel'
						}
					]
				}
			]
		});

		me.callParent(arguments);
	},
});
