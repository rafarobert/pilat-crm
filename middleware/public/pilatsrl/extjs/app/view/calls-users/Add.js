/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:25:37 GMT-0400 (Bolivia Time)
 * Time: 0:25:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:25:37 GMT-0400 (Bolivia Time)
 * Last time updated: 0:25:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.calls-users.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.callsUsersAdd',
	id: 'calls-users-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add CallUser',
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
					id:'calls-users-form',
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
							fieldLabel: 'call_id',
							name: 'call_id',
						},
						
						{
							fieldLabel: 'user_id',
							name: 'user_id',
						},
						
						{
							fieldLabel: 'required',
							name: 'required',
						},
						
						{
							fieldLabel: 'accept_status',
							name: 'accept_status',
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
