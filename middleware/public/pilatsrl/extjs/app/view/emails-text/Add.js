/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 13:59:38 GMT-0400 (Bolivia Time)
 * Time: 13:59:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 13:59:38 GMT-0400 (Bolivia Time)
 * Last time updated: 13:59:38
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.emails-text.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailsTextAdd',
	id: 'emails-text-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EmailText',
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
					id:'emails-text-form',
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
							fieldLabel: 'email_id',
							name: 'email_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'from_addr',
							name: 'from_addr',
						},
						
						{
							fieldLabel: 'reply_to_addr',
							name: 'reply_to_addr',
						},
						
						
						{
							fieldLabel: 'to_addrs',
							name: 'to_addrs',
						},
						
						{
							fieldLabel: 'cc_addrs',
							name: 'cc_addrs',
						},
						
						{
							fieldLabel: 'bcc_addrs',
							name: 'bcc_addrs',
						},
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'description_html',
							name: 'description_html',
						},
						
						{
							fieldLabel: 'raw_source',
							name: 'raw_source',
						},
						
						
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
