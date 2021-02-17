/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:43 GMT-0400 (Bolivia Time)
 * Time: 4:43:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:43 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.outbound-email.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.outboundEmailAdd',
	id: 'outbound-email-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add OutboundEmail',
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
					id:'outbound-email-form',
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
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'type',
							name: 'type',
						},
						
						{
							fieldLabel: 'smtp_from_name',
							name: 'smtp_from_name',
						},
						
						{
							fieldLabel: 'smtp_from_addr',
							name: 'smtp_from_addr',
						},
						
						{
							fieldLabel: 'mail_sendtype',
							name: 'mail_sendtype',
						},
						
						{
							fieldLabel: 'mail_smtptype',
							name: 'mail_smtptype',
						},
						
						{
							fieldLabel: 'mail_smtpserver',
							name: 'mail_smtpserver',
						},
						
						{
							fieldLabel: 'mail_smtpport',
							name: 'mail_smtpport',
						},
						
						{
							fieldLabel: 'mail_smtpuser',
							name: 'mail_smtpuser',
						},
						
						{
							fieldLabel: 'mail_smtppass',
							name: 'mail_smtppass',
						},
						
						{
							fieldLabel: 'mail_smtpssl',
							name: 'mail_smtpssl',
						},
						
						
						
						
						{
							fieldLabel: 'user_id',
							name: 'user_id',
						},
						
						{
							fieldLabel: 'modified_user_id',
							name: 'modified_user_id',
						},
						
						{
							fieldLabel: 'created_by',
							name: 'created_by',
						},
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'mail_smtpauth_req',
							name: 'mail_smtpauth_req',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						
						{
							fieldLabel: 'date_entered',
							name: 'date_entered',
							id:'date_entered',
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
