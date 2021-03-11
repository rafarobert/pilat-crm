/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:11:05 GMT-0400 (Bolivia Time)
 * Time: 14:11:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:11:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.sai-clientes.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.saiClientesAdd',
	id: 'sai-clientes-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add SaiCliente',
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
					id:'sai-clientes-form',
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
							fieldLabel: 'gbagecage',
							name: 'gbagecage',
						},
						
						
          				{
     		        		fieldLabel: 'ilsupcage',
    						name: 'ilsupcage',
     					},
                        
						
						
						{
							fieldLabel: 'gbagetper',
							name: 'gbagetper',
						},
						
						
						{
							fieldLabel: 'gbagesexo',
							name: 'gbagesexo',
						},
						
						{
							fieldLabel: 'gbagenruc',
							name: 'gbagenruc',
						},
						
						{
							fieldLabel: 'gbagendid',
							name: 'gbagendid',
						},
						
						{
							fieldLabel: 'gbagecorg',
							name: 'gbagecorg',
						},
						
						{
							fieldLabel: 'gbageappa',
							name: 'gbageappa',
						},
						
						{
							fieldLabel: 'gbageapma',
							name: 'gbageapma',
						},
						
						{
							fieldLabel: 'prefijo',
							name: 'prefijo',
						},
						
						{
							fieldLabel: 'gbageapca',
							name: 'gbageapca',
						},
						
						{
							fieldLabel: 'gbagenoms',
							name: 'gbagenoms',
						},
						
						{
							fieldLabel: 'gbagenomb',
							name: 'gbagenomb',
						},
						
						{
							fieldLabel: 'gbtlfntl1',
							name: 'gbtlfntl1',
						},
						
						{
							fieldLabel: 'gbtlfntl2',
							name: 'gbtlfntl2',
						},
						
						{
							fieldLabel: 'gbtlfntl3',
							name: 'gbtlfntl3',
						},
						
						{
							fieldLabel: 'gbtlfntl4',
							name: 'gbtlfntl4',
						},
						
						{
							fieldLabel: 'gbtlfntl5',
							name: 'gbtlfntl5',
						},
						
						{
							fieldLabel: 'gbtlfntl6',
							name: 'gbtlfntl6',
						},
						
						{
							fieldLabel: 'gbpaidesc',
							name: 'gbpaidesc',
						},
						
						{
							fieldLabel: 'gbdptdesc',
							name: 'gbdptdesc',
						},
						
						{
							fieldLabel: 'gbciudesc',
							name: 'gbciudesc',
						},
						
						{
							fieldLabel: 'gbdirdire',
							name: 'gbdirdire',
						},
						
						{
							fieldLabel: 'gbemamail',
							name: 'gbemamail',
						},
						
						
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'gbagefnac',
							name: 'gbagefnac',
							id:'gbagefnac',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'gbagefreg',
							name: 'gbagefreg',
							id:'gbagefreg',
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
