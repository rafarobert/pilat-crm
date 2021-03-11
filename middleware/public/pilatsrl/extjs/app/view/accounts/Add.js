/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:09:05 GMT-0400 (Bolivia Time)
 * Time: 14:9:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:09:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:9:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.accounts.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.accountsAdd',
	id: 'accounts-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Account',
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
					id:'accounts-form',
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
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'account_type',
							name: 'account_type',
						},
						
						{
							fieldLabel: 'industry',
							name: 'industry',
						},
						
						{
							fieldLabel: 'annual_revenue',
							name: 'annual_revenue',
						},
						
						{
							fieldLabel: 'phone_fax',
							name: 'phone_fax',
						},
						
						{
							fieldLabel: 'billing_address_street',
							name: 'billing_address_street',
						},
						
						{
							fieldLabel: 'billing_address_city',
							name: 'billing_address_city',
						},
						
						{
							fieldLabel: 'billing_address_state',
							name: 'billing_address_state',
						},
						
						{
							fieldLabel: 'billing_address_postalcode',
							name: 'billing_address_postalcode',
						},
						
						{
							fieldLabel: 'billing_address_country',
							name: 'billing_address_country',
						},
						
						{
							fieldLabel: 'rating',
							name: 'rating',
						},
						
						{
							fieldLabel: 'phone_office',
							name: 'phone_office',
						},
						
						{
							fieldLabel: 'phone_alternate',
							name: 'phone_alternate',
						},
						
						{
							fieldLabel: 'website',
							name: 'website',
						},
						
						{
							fieldLabel: 'ownership',
							name: 'ownership',
						},
						
						{
							fieldLabel: 'employees',
							name: 'employees',
						},
						
						{
							fieldLabel: 'ticker_symbol',
							name: 'ticker_symbol',
						},
						
						{
							fieldLabel: 'shipping_address_street',
							name: 'shipping_address_street',
						},
						
						{
							fieldLabel: 'shipping_address_city',
							name: 'shipping_address_city',
						},
						
						{
							fieldLabel: 'shipping_address_state',
							name: 'shipping_address_state',
						},
						
						{
							fieldLabel: 'shipping_address_postalcode',
							name: 'shipping_address_postalcode',
						},
						
						{
							fieldLabel: 'shipping_address_country',
							name: 'shipping_address_country',
						},
						
						{
							fieldLabel: 'sic_code',
							name: 'sic_code',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						
						
						{
							fieldLabel: 'modified_user_id',
							name: 'modified_user_id',
						},
						
						{
							fieldLabel: 'created_by',
							name: 'created_by',
						},
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
						},
						
						{
							fieldLabel: 'parent_id',
							name: 'parent_id',
						},
						
						{
							fieldLabel: 'campaign_id',
							name: 'campaign_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						
						{
							fieldLabel: 'date_entered',
							name: 'date_entered',
							id:'date_entered',
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
