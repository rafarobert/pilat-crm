/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:03 GMT-0400 (Bolivia Time)
 * Time: 15:36:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:03 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:3
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.email-cache.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailCacheAdd',
	id: 'email-cache-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EmailCache',
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
					id:'email-cache-form',
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
							fieldLabel: 'mailsize',
							name: 'mailsize',
						},
						
						{
							fieldLabel: 'imap_uid',
							name: 'imap_uid',
						},
						
						{
							fieldLabel: 'msgno',
							name: 'msgno',
						},
						
						
						{
							fieldLabel: 'mbox',
							name: 'mbox',
						},
						
						{
							fieldLabel: 'subject',
							name: 'subject',
						},
						
						{
							fieldLabel: 'fromaddr',
							name: 'fromaddr',
						},
						
						{
							fieldLabel: 'toaddr',
							name: 'toaddr',
						},
						
						{
							fieldLabel: 'message_id',
							name: 'message_id',
						},
						
						
						
						
						{
							fieldLabel: 'ie_id',
							name: 'ie_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'recent',
							name: 'recent',
						},
						
						{
							fieldLabel: 'flagged',
							name: 'flagged',
						},
						
						{
							fieldLabel: 'answered',
							name: 'answered',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'seen',
							name: 'seen',
						},
						
						{
							fieldLabel: 'draft',
							name: 'draft',
						},
						
						
						
						{
							fieldLabel: 'senddate',
							name: 'senddate',
							id:'senddate',
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
