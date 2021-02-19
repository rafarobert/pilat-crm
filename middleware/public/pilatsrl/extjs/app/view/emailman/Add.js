/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 13:59:33 GMT-0400 (Bolivia Time)
 * Time: 13:59:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 13:59:33 GMT-0400 (Bolivia Time)
 * Last time updated: 13:59:33
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.emailman.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailmanAdd',
	id: 'emailman-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Emailman',
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
					id:'emailman-form',
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
							fieldLabel: 'send_attempts',
							name: 'send_attempts',
						},
						
						
						{
							fieldLabel: 'related_type',
							name: 'related_type',
						},
						
						
						
						
						{
							fieldLabel: 'user_id',
							name: 'user_id',
						},
						
						{
							fieldLabel: 'campaign_id',
							name: 'campaign_id',
						},
						
						{
							fieldLabel: 'marketing_id',
							name: 'marketing_id',
						},
						
						{
							fieldLabel: 'list_id',
							name: 'list_id',
						},
						
						{
							fieldLabel: 'modified_user_id',
							name: 'modified_user_id',
						},
						
						{
							fieldLabel: 'related_id',
							name: 'related_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'in_queue',
							name: 'in_queue',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'related_confirm_opt_in',
							name: 'related_confirm_opt_in',
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
							fieldLabel: 'send_date_time',
							name: 'send_date_time',
							id:'send_date_time',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'in_queue_date',
							name: 'in_queue_date',
							id:'in_queue_date',
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
