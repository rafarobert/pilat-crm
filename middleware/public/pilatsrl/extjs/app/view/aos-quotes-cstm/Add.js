/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:34 GMT-0400 (Bolivia Time)
 * Time: 15:35:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:34 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-quotes-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosQuotesCstmAdd',
	id: 'aos-quotes-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoQuoteCstm',
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
					id:'aos-quotes-cstm-form',
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
							fieldLabel: 'unidad_industrial_c',
							name: 'unidad_industrial_c',
						},
						
						{
							fieldLabel: 'manzano_c',
							name: 'manzano_c',
						},
						
						{
							fieldLabel: 'metro_cuadrado_c',
							name: 'metro_cuadrado_c',
						},
						
						{
							fieldLabel: 'frente_metros_c',
							name: 'frente_metros_c',
						},
						
						{
							fieldLabel: 'fondo_metros_c',
							name: 'fondo_metros_c',
						},
						
						
						{
							fieldLabel: 'ubicacion_c',
							name: 'ubicacion_c',
						},
						
						{
							fieldLabel: 'lbl_tipoventa_c',
							name: 'lbl_tipoventa_c',
						},
						
						{
							fieldLabel: 'term_years_c',
							name: 'term_years_c',
						},
						
						{
							fieldLabel: 'tipo_pago_c',
							name: 'tipo_pago_c',
						},
						
						{
							fieldLabel: 'link_terreno_c',
							name: 'link_terreno_c',
						},
						
						{
							fieldLabel: 'moneda_c',
							name: 'moneda_c',
						},
						
						
						
						
						
						
						{
							fieldLabel: 'lbl_superficie_c',
							name: 'lbl_superficie_c',
						},
						
						{
							fieldLabel: 'lbl_cuotainicial_c',
							name: 'lbl_cuotainicial_c',
						},
						
						{
							fieldLabel: 'saldo_cuota_inical_c',
							name: 'saldo_cuota_inical_c',
						},
						
						{
							fieldLabel: 'precio_mcuadrado_c',
							name: 'precio_mcuadrado_c',
						},
						
						{
							fieldLabel: 'saldo_c',
							name: 'saldo_c',
						},
						
						{
							fieldLabel: 'cuota_mensual_c',
							name: 'cuota_mensual_c',
						},
						
						
						
						
						
						{
							fieldLabel: 'fecha_envio_programada_c',
							name: 'fecha_envio_programada_c',
							id:'fecha_envio_programada_c',
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
