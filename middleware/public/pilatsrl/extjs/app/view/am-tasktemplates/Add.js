/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:34 GMT-0400 (Bolivia Time)
 * Time: 18:35:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:34 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.am-tasktemplates.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.amTasktemplatesAdd',
	id: 'am-tasktemplates-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AmTasktemplate',
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
					id:'am-tasktemplates-form',
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
							fieldLabel: 'percent_complete',
							name: 'percent_complete',
						},
						
						{
							fieldLabel: 'predecessors',
							name: 'predecessors',
						},
						
						{
							fieldLabel: 'task_number',
							name: 'task_number',
						},
						
						{
							fieldLabel: 'order_number',
							name: 'order_number',
						},
						
						{
							fieldLabel: 'estimated_effort',
							name: 'estimated_effort',
						},
						
						{
							fieldLabel: 'duration',
							name: 'duration',
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
							fieldLabel: 'priority',
							name: 'priority',
						},
						
						{
							fieldLabel: 'relationship_type',
							name: 'relationship_type',
						},
						
						{
							fieldLabel: 'utilization',
							name: 'utilization',
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
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'milestone_flag',
							name: 'milestone_flag',
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
