/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:58 GMT-0400 (Bolivia Time)
 * Time: 0:23:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:58 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:58
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.users-feeds.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.usersFeedsAdd',
	id: 'users-feeds-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add UserFeed',
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
					id:'users-feeds-form',
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
							fieldLabel: 'rank',
							name: 'rank',
						},
						
						
						{
							fieldLabel: 'user_id',
							name: 'user_id',
						},
						
						{
							fieldLabel: 'feed_id',
							name: 'feed_id',
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
