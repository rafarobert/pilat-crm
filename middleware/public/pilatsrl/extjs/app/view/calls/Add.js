/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:31 GMT-0400 (Bolivia Time)
 * Time: 14:0:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:31 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:31
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.calls.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.callsAdd',
	id: 'calls-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Call',
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
					id:'calls-form',
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
							fieldLabel: 'duration_hours',
							name: 'duration_hours',
						},
						
						{
							fieldLabel: 'duration_minutes',
							name: 'duration_minutes',
						},
						
						{
							fieldLabel: 'reminder_time',
							name: 'reminder_time',
						},
						
						{
							fieldLabel: 'email_reminder_time',
							name: 'email_reminder_time',
						},
						
						{
							fieldLabel: 'repeat_interval',
							name: 'repeat_interval',
						},
						
						{
							fieldLabel: 'repeat_count',
							name: 'repeat_count',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'parent_type',
							name: 'parent_type',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						{
							fieldLabel: 'direction',
							name: 'direction',
						},
						
						{
							fieldLabel: 'outlook_id',
							name: 'outlook_id',
						},
						
						{
							fieldLabel: 'repeat_type',
							name: 'repeat_type',
						},
						
						{
							fieldLabel: 'repeat_dow',
							name: 'repeat_dow',
						},
						
						{
							fieldLabel: 'recurring_source',
							name: 'recurring_source',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
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
							fieldLabel: 'parent_id',
							name: 'parent_id',
						},
						
						{
							fieldLabel: 'repeat_parent_id',
							name: 'repeat_parent_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'email_reminder_sent',
							name: 'email_reminder_sent',
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
							fieldLabel: 'date_start',
							name: 'date_start',
							id:'date_start',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_end',
							name: 'date_end',
							id:'date_end',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'repeat_until',
							name: 'repeat_until',
							id:'repeat_until',
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
