/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:36 GMT-0400 (Bolivia Time)
 * Time: 0:22:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:36 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.campaign-log.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.campaignLogAdd',
	id: 'campaign-log-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add CampaignLog',
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
					id:'campaign-log-form',
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
							fieldLabel: 'hits',
							name: 'hits',
						},
						
						
						{
							fieldLabel: 'target_tracker_key',
							name: 'target_tracker_key',
						},
						
						{
							fieldLabel: 'target_id',
							name: 'target_id',
						},
						
						{
							fieldLabel: 'target_type',
							name: 'target_type',
						},
						
						{
							fieldLabel: 'activity_type',
							name: 'activity_type',
						},
						
						{
							fieldLabel: 'related_id',
							name: 'related_id',
						},
						
						{
							fieldLabel: 'related_type',
							name: 'related_type',
						},
						
						{
							fieldLabel: 'more_information',
							name: 'more_information',
						},
						
						
						
						
						{
							fieldLabel: 'campaign_id',
							name: 'campaign_id',
						},
						
						{
							fieldLabel: 'list_id',
							name: 'list_id',
						},
						
						{
							fieldLabel: 'marketing_id',
							name: 'marketing_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'archived',
							name: 'archived',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						
						{
							fieldLabel: 'activity_date',
							name: 'activity_date',
							id:'activity_date',
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
