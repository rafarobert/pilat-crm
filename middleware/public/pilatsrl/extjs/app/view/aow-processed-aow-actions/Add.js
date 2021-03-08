/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:37 GMT-0400 (Bolivia Time)
 * Time: 15:35:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:37 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aow-processed-aow-actions.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aowProcessedAowActionsAdd',
	id: 'aow-processed-aow-actions-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AowProcessedAowAction',
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
					id:'aow-processed-aow-actions-form',
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
							fieldLabel: 'aow_processed_id',
							name: 'aow_processed_id',
						},
						
						{
							fieldLabel: 'aow_action_id',
							name: 'aow_action_id',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
