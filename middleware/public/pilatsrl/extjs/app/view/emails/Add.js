/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:44 GMT-0400 (Bolivia Time)
 * Time: 14:0:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:44 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:44
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.emails.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailsAdd',
	id: 'emails-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Email',
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
					id:'emails-form',
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
							fieldLabel: 'message_id',
							name: 'message_id',
						},
						
						{
							fieldLabel: 'type',
							name: 'type',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						{
							fieldLabel: 'intent',
							name: 'intent',
						},
						
						{
							fieldLabel: 'parent_type',
							name: 'parent_type',
						},
						
						{
							fieldLabel: 'uid',
							name: 'uid',
						},
						
						{
							fieldLabel: 'category_id',
							name: 'category_id',
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
							fieldLabel: 'mailbox_id',
							name: 'mailbox_id',
						},
						
						{
							fieldLabel: 'parent_id',
							name: 'parent_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'orphaned',
							name: 'orphaned',
						},
						
						{
							fieldLabel: 'flagged',
							name: 'flagged',
						},
						
						{
							fieldLabel: 'reply_to_status',
							name: 'reply_to_status',
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
						
						{
							fieldLabel: 'last_synced',
							name: 'last_synced',
							id:'last_synced',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_sent_received',
							name: 'date_sent_received',
							id:'date_sent_received',
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
