/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:09:48 GMT-0400 (Bolivia Time)
 * Time: 14:9:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:09:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:9:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.calls-contacts.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.callsContactsAdd',
	id: 'calls-contacts-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add CallContact',
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
					id:'calls-contacts-form',
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
							fieldLabel: 'contact_id',
							name: 'contact_id',
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
