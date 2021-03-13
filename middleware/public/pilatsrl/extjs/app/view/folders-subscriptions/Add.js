/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:26:02 GMT-0400 (Bolivia Time)
 * Time: 0:26:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:26:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:26:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.folders-subscriptions.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.foldersSubscriptionsAdd',
	id: 'folders-subscriptions-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add FolderSubscription',
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
					id:'folders-subscriptions-form',
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
							fieldLabel: 'folder_id',
							name: 'folder_id',
						},
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
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
