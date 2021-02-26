/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:34 GMT-0400 (Bolivia Time)
 * Time: 0:22:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:34 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.campaigns.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.campaignsAdd',
	id: 'campaigns-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Campaign',
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
					id:'campaigns-form',
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
							fieldLabel: 'tracker_key',
							name: 'tracker_key',
						},
						
						{
							fieldLabel: 'tracker_count',
							name: 'tracker_count',
						},
						
						{
							fieldLabel: 'impressions',
							name: 'impressions',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'refer_url',
							name: 'refer_url',
						},
						
						{
							fieldLabel: 'tracker_text',
							name: 'tracker_text',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						{
							fieldLabel: 'campaign_type',
							name: 'campaign_type',
						},
						
						{
							fieldLabel: 'frequency',
							name: 'frequency',
						},
						
						
						{
							fieldLabel: 'objective',
							name: 'objective',
						},
						
						{
							fieldLabel: 'content',
							name: 'content',
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
							fieldLabel: 'currency_id',
							name: 'currency_id',
						},
						
						{
							fieldLabel: 'survey_id',
							name: 'survey_id',
						},
						
						
						
						
						{
							fieldLabel: 'budget',
							name: 'budget',
						},
						
						{
							fieldLabel: 'expected_cost',
							name: 'expected_cost',
						},
						
						{
							fieldLabel: 'actual_cost',
							name: 'actual_cost',
						},
						
						{
							fieldLabel: 'expected_revenue',
							name: 'expected_revenue',
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
							fieldLabel: 'start_date',
							name: 'start_date',
							id:'start_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'end_date',
							name: 'end_date',
							id:'end_date',
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
