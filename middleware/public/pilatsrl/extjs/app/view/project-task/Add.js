/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:26:43 GMT-0400 (Bolivia Time)
 * Time: 0:26:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:26:43 GMT-0400 (Bolivia Time)
 * Last time updated: 0:26:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.project-task.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.projectTaskAdd',
	id: 'project-task-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add ProjectTask',
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
					id:'project-task-form',
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
							fieldLabel: 'project_task_id',
							name: 'project_task_id',
						},
						
						{
							fieldLabel: 'time_start',
							name: 'time_start',
						},
						
						{
							fieldLabel: 'time_finish',
							name: 'time_finish',
						},
						
						{
							fieldLabel: 'duration',
							name: 'duration',
						},
						
						{
							fieldLabel: 'actual_duration',
							name: 'actual_duration',
						},
						
						{
							fieldLabel: 'percent_complete',
							name: 'percent_complete',
						},
						
						{
							fieldLabel: 'parent_task_id',
							name: 'parent_task_id',
						},
						
						{
							fieldLabel: 'order_number',
							name: 'order_number',
						},
						
						{
							fieldLabel: 'task_number',
							name: 'task_number',
						},
						
						{
							fieldLabel: 'estimated_effort',
							name: 'estimated_effort',
						},
						
						{
							fieldLabel: 'actual_effort',
							name: 'actual_effort',
						},
						
						{
							fieldLabel: 'utilization',
							name: 'utilization',
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
							fieldLabel: 'relationship_type',
							name: 'relationship_type',
						},
						
						{
							fieldLabel: 'priority',
							name: 'priority',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'predecessors',
							name: 'predecessors',
						},
						
						{
							fieldLabel: 'duration_unit',
							name: 'duration_unit',
						},
						
						
						
						{
							fieldLabel: 'project_id',
							name: 'project_id',
						},
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
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
							fieldLabel: 'milestone_flag',
							name: 'milestone_flag',
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
						
						{
							fieldLabel: 'date_start',
							name: 'date_start',
							id:'date_start',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_finish',
							name: 'date_finish',
							id:'date_finish',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_due',
							name: 'date_due',
							id:'date_due',
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
