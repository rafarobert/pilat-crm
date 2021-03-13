/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:24:56 GMT-0400 (Bolivia Time)
 * Time: 0:24:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:24:56 GMT-0400 (Bolivia Time)
 * Last time updated: 0:24:56
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.address-book.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.addressBookAdd',
	id: 'address-book-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AddresBook',
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
					id:'address-book-form',
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
							fieldLabel: 'bean',
							name: 'bean',
						},
						
						
						
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
						},
						
						{
							fieldLabel: 'bean_id',
							name: 'bean_id',
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
