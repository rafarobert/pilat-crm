/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:24 GMT-0400 (Bolivia Time)
 * Time: 0:23:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:24 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:24
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.opportunities.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.opportunitiesAdd',
	id: 'opportunities-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Opportunity',
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
					id:'opportunities-form',
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
							fieldLabel: 'opportunity_type',
							name: 'opportunity_type',
						},
						
						{
							fieldLabel: 'lead_source',
							name: 'lead_source',
						},
						
						{
							fieldLabel: 'next_step',
							name: 'next_step',
						},
						
						{
							fieldLabel: 'sales_stage',
							name: 'sales_stage',
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
							fieldLabel: 'campaign_id',
							name: 'campaign_id',
						},
						
						{
							fieldLabel: 'currency_id',
							name: 'currency_id',
						},
						
						
						
						
						{
							fieldLabel: 'amount',
							name: 'amount',
						},
						
						{
							fieldLabel: 'amount_usdollar',
							name: 'amount_usdollar',
						},
						
						{
							fieldLabel: 'probability',
							name: 'probability',
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
							fieldLabel: 'date_closed',
							name: 'date_closed',
							id:'date_closed',
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
