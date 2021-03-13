/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:25:54 GMT-0400 (Bolivia Time)
 * Time: 0:25:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:25:54 GMT-0400 (Bolivia Time)
 * Last time updated: 0:25:54
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.email-addresses.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailAddressesAdd',
	id: 'email-addresses-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EmailAddresse',
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
					id:'email-addresses-form',
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
							fieldLabel: 'email_address',
							name: 'email_address',
						},
						
						{
							fieldLabel: 'email_address_caps',
							name: 'email_address_caps',
						},
						
						{
							fieldLabel: 'confirm_opt_in',
							name: 'confirm_opt_in',
						},
						
						{
							fieldLabel: 'confirm_opt_in_token',
							name: 'confirm_opt_in_token',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'invalid_email',
							name: 'invalid_email',
						},
						
						{
							fieldLabel: 'opt_out',
							name: 'opt_out',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						
						{
							fieldLabel: 'confirm_opt_in_date',
							name: 'confirm_opt_in_date',
							id:'confirm_opt_in_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'confirm_opt_in_sent_date',
							name: 'confirm_opt_in_sent_date',
							id:'confirm_opt_in_sent_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'confirm_opt_in_fail_date',
							name: 'confirm_opt_in_fail_date',
							id:'confirm_opt_in_fail_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_created',
							name: 'date_created',
							id:'date_created',
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
