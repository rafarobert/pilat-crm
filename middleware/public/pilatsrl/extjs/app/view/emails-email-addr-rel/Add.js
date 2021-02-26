/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:49 GMT-0400 (Bolivia Time)
 * Time: 0:22:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:49 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.emails-email-addr-rel.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailsEmailAddrRelAdd',
	id: 'emails-email-addr-rel-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EmailEmailAddrRel',
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
					id:'emails-email-addr-rel-form',
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
							fieldLabel: 'address_type',
							name: 'address_type',
						},
						
						
						
						
						{
							fieldLabel: 'email_id',
							name: 'email_id',
						},
						
						{
							fieldLabel: 'email_address_id',
							name: 'email_address_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
