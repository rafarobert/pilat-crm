/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 14:00:05 GMT-0400 (Bolivia Time)
 * Time: 14:0:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 14:00:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.inbound-email.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.inboundEmailAdd',
	id: 'inbound-email-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add InboundEmail',
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
					id:'inbound-email-form',
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
							fieldLabel: 'port',
							name: 'port',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						{
							fieldLabel: 'server_url',
							name: 'server_url',
						},
						
						{
							fieldLabel: 'email_user',
							name: 'email_user',
						},
						
						{
							fieldLabel: 'email_password',
							name: 'email_password',
						},
						
						{
							fieldLabel: 'service',
							name: 'service',
						},
						
						{
							fieldLabel: 'mailbox_type',
							name: 'mailbox_type',
						},
						
						
						{
							fieldLabel: 'mailbox',
							name: 'mailbox',
						},
						
						{
							fieldLabel: 'stored_options',
							name: 'stored_options',
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
							fieldLabel: 'template_id',
							name: 'template_id',
						},
						
						{
							fieldLabel: 'group_id',
							name: 'group_id',
						},
						
						{
							fieldLabel: 'groupfolder_id',
							name: 'groupfolder_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'delete_seen',
							name: 'delete_seen',
						},
						
						{
							fieldLabel: 'is_personal',
							name: 'is_personal',
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
