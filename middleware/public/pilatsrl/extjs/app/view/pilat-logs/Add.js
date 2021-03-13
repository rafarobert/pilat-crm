/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:26:35 GMT-0400 (Bolivia Time)
 * Time: 0:26:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:26:35 GMT-0400 (Bolivia Time)
 * Last time updated: 0:26:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.pilat-logs.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.pilatLogsAdd',
	id: 'pilat-logs-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add PilatLog',
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
					id:'pilat-logs-form',
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
							fieldLabel: '_id',
							name: '_id',
						},
						
						
          				{
     		        		fieldLabel: 'id',
    						name: 'id',
     					},
                        
						
						
						
						{
							fieldLabel: 'action',
							name: 'action',
						},
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'module',
							name: 'module',
						},
						
						{
							fieldLabel: 'user',
							name: 'user',
						},
						
						{
							fieldLabel: 'source_id',
							name: 'source_id',
						},
						
						{
							fieldLabel: 'module_id',
							name: 'module_id',
						},
						
						{
							fieldLabel: 'createdBy',
							name: 'createdBy',
						},
						
						{
							fieldLabel: 'updatedBy',
							name: 'updatedBy',
						},
						
						
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'dueAt',
							name: 'dueAt',
							id:'dueAt',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'createdAt',
							name: 'createdAt',
							id:'createdAt',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'updatedAt',
							name: 'updatedAt',
							id:'updatedAt',
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
