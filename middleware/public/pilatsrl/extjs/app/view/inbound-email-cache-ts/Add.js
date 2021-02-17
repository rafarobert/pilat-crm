/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 14:00:06 GMT-0400 (Bolivia Time)
 * Time: 14:0:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 14:00:06 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:6
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.inbound-email-cache-ts.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.inboundEmailCacheTsAdd',
	id: 'inbound-email-cache-ts-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add InboundEmailCacheT',
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
					id:'inbound-email-cache-ts-form',
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
							fieldLabel: 'id',
							name: 'id',
						},
						
						
						
						
						{
							fieldLabel: 'ie_timestamp',
							name: 'ie_timestamp',
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