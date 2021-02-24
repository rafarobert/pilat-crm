/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Time: 3:17:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.advancedreports.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.advancedreportsAdd',
	id: 'advancedreports-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Advancedreport',
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
					id:'advancedreports-form',
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
							fieldLabel: 'category_id',
							name: 'category_id',
						},
						
						{
							fieldLabel: 'sequence',
							name: 'sequence',
						},
						
						{
							fieldLabel: 'shared',
							name: 'shared',
						},
						
						{
							fieldLabel: 'sharedlevel',
							name: 'sharedlevel',
						},
						
						{
							fieldLabel: 'iscombined',
							name: 'iscombined',
						},
						
						{
							fieldLabel: 'visible',
							name: 'visible',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						{
							fieldLabel: 'module',
							name: 'module',
						},
						
						{
							fieldLabel: 'title',
							name: 'title',
						},
						
						{
							fieldLabel: 'owner',
							name: 'owner',
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
							fieldLabel: 'description',
							name: 'description',
						},
						
						
						{
							fieldLabel: 'related_data',
							name: 'related_data',
						},
						
						{
							fieldLabel: 'fields',
							name: 'fields',
						},
						
						{
							fieldLabel: 'filters',
							name: 'filters',
						},
						
						{
							fieldLabel: 'grouping',
							name: 'grouping',
						},
						
						{
							fieldLabel: 'aggregates',
							name: 'aggregates',
						},
						
						{
							fieldLabel: 'totalAggregates',
							name: 'totalAggregates',
						},
						
						{
							fieldLabel: 'options',
							name: 'options',
						},
						
						{
							fieldLabel: 'labels',
							name: 'labels',
						},
						
						{
							fieldLabel: 'chart',
							name: 'chart',
						},
						
						{
							fieldLabel: 'combinedfields',
							name: 'combinedfields',
						},
						
						{
							fieldLabel: 'calcFields',
							name: 'calcFields',
						},
						
						{
							fieldLabel: 'columnstate',
							name: 'columnstate',
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
