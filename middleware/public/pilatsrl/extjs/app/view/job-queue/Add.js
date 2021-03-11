/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 13:00:42 GMT-0400 (Bolivia Time)
 * Time: 13:0:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 13:00:42 GMT-0400 (Bolivia Time)
 * Last time updated: 13:0:42
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.job-queue.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.jobQueueAdd',
	id: 'job-queue-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add JobQueue',
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
					id:'job-queue-form',
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
							fieldLabel: 'job_delay',
							name: 'job_delay',
						},
						
						{
							fieldLabel: 'percent_complete',
							name: 'percent_complete',
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
							fieldLabel: 'resolution',
							name: 'resolution',
						},
						
						{
							fieldLabel: 'target',
							name: 'target',
						},
						
						{
							fieldLabel: 'client',
							name: 'client',
						},
						
						
						{
							fieldLabel: 'message',
							name: 'message',
						},
						
						{
							fieldLabel: 'data',
							name: 'data',
						},
						
						
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
						},
						
						{
							fieldLabel: 'scheduler_id',
							name: 'scheduler_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'requeue',
							name: 'requeue',
						},
						
						{
							fieldLabel: 'retry_count',
							name: 'retry_count',
						},
						
						{
							fieldLabel: 'failure_count',
							name: 'failure_count',
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
							fieldLabel: 'execute_time',
							name: 'execute_time',
							id:'execute_time',
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
