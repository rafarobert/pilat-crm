/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:36 GMT-0400 (Bolivia Time)
 * Time: 14:0:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:36 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.cases-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.casesCstmAdd',
	id: 'cases-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add CaseCstm',
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
					id:'cases-cstm-form',
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
