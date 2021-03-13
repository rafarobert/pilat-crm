/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:27:04 GMT-0400 (Bolivia Time)
 * Time: 0:27:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:27:04 GMT-0400 (Bolivia Time)
 * Last time updated: 0:27:4
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.tracker.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.trackerAdd',
	id: 'tracker-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Tracker',
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
					id:'tracker-form',
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
							fieldLabel: 'user_id',
							name: 'user_id',
						},
						
						{
							fieldLabel: 'module_name',
							name: 'module_name',
						},
						
						{
							fieldLabel: 'item_id',
							name: 'item_id',
						},
						
						{
							fieldLabel: 'item_summary',
							name: 'item_summary',
						},
						
						{
							fieldLabel: 'action',
							name: 'action',
						},
						
						{
							fieldLabel: 'session_id',
							name: 'session_id',
						},
						
						
						
						
						{
							fieldLabel: 'monitor_id',
							name: 'monitor_id',
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
