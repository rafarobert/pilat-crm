/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 13:00:48 GMT-0400 (Bolivia Time)
 * Time: 13:0:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 13:00:48 GMT-0400 (Bolivia Time)
 * Last time updated: 13:0:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.meetings-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.meetingsCstmAdd',
	id: 'meetings-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add MeetingCstm',
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
					id:'meetings-cstm-form',
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
