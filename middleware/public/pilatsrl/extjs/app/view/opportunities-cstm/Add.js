/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:25 GMT-0400 (Bolivia Time)
 * Time: 0:23:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:25 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:25
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.opportunities-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.opportunitiesCstmAdd',
	id: 'opportunities-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add OpportunityCstm',
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
					id:'opportunities-cstm-form',
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
							fieldLabel: 'superficie_c',
							name: 'superficie_c',
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
							fieldLabel: 'lbl_tipo_pago_c',
							name: 'lbl_tipo_pago_c',
						},
						
						{
							fieldLabel: 'ubicacion_c',
							name: 'ubicacion_c',
						},
						
						{
							fieldLabel: 'tipo_venta_c',
							name: 'tipo_venta_c',
						},
						
						{
							fieldLabel: 'moneda_c',
							name: 'moneda_c',
						},
						
						
						
						
						
						{
							fieldLabel: 'jjwg_maps_lng_c',
							name: 'jjwg_maps_lng_c',
						},
						
						{
							fieldLabel: 'jjwg_maps_lat_c',
							name: 'jjwg_maps_lat_c',
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
