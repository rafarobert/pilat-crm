/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 13:00:24 GMT-0400 (Bolivia Time)
 * Time: 13:0:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 13:00:24 GMT-0400 (Bolivia Time)
 * Last time updated: 13:0:24
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.email-addr-bean-rel.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailAddrBeanRelAdd',
	id: 'email-addr-bean-rel-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EmailAddrBeanRel',
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
					id:'email-addr-bean-rel-form',
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
							fieldLabel: 'bean_module',
							name: 'bean_module',
						},
						
						
						
						
						{
							fieldLabel: 'email_address_id',
							name: 'email_address_id',
						},
						
						{
							fieldLabel: 'bean_id',
							name: 'bean_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'primary_address',
							name: 'primary_address',
						},
						
						{
							fieldLabel: 'reply_to_address',
							name: 'reply_to_address',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						
						{
							fieldLabel: 'date_created',
							name: 'date_created',
							id:'date_created',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_modified',
							name: 'date_modified',
							id:'date_modified',
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
