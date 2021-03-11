/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 12:59:52 GMT-0400 (Bolivia Time)
 * Time: 12:59:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 12:59:52 GMT-0400 (Bolivia Time)
 * Last time updated: 12:59:52
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-invoices.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosInvoicesAdd',
	id: 'aos-invoices-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoInvoice',
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
					id:'aos-invoices-form',
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
							fieldLabel: 'number',
							name: 'number',
						},
						
						{
							fieldLabel: 'quote_number',
							name: 'quote_number',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
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
							fieldLabel: 'shipping_tax',
							name: 'shipping_tax',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'template_ddown_c',
							name: 'template_ddown_c',
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
							fieldLabel: 'billing_account_id',
							name: 'billing_account_id',
						},
						
						{
							fieldLabel: 'billing_contact_id',
							name: 'billing_contact_id',
						},
						
						{
							fieldLabel: 'currency_id',
							name: 'currency_id',
						},
						
						
						
						{
							fieldLabel: 'total_amt',
							name: 'total_amt',
						},
						
						{
							fieldLabel: 'total_amt_usdollar',
							name: 'total_amt_usdollar',
						},
						
						{
							fieldLabel: 'subtotal_amount',
							name: 'subtotal_amount',
						},
						
						{
							fieldLabel: 'subtotal_amount_usdollar',
							name: 'subtotal_amount_usdollar',
						},
						
						{
							fieldLabel: 'discount_amount',
							name: 'discount_amount',
						},
						
						{
							fieldLabel: 'discount_amount_usdollar',
							name: 'discount_amount_usdollar',
						},
						
						{
							fieldLabel: 'tax_amount',
							name: 'tax_amount',
						},
						
						{
							fieldLabel: 'tax_amount_usdollar',
							name: 'tax_amount_usdollar',
						},
						
						{
							fieldLabel: 'shipping_amount',
							name: 'shipping_amount',
						},
						
						{
							fieldLabel: 'shipping_amount_usdollar',
							name: 'shipping_amount_usdollar',
						},
						
						{
							fieldLabel: 'shipping_tax_amt',
							name: 'shipping_tax_amt',
						},
						
						{
							fieldLabel: 'shipping_tax_amt_usdollar',
							name: 'shipping_tax_amt_usdollar',
						},
						
						{
							fieldLabel: 'total_amount',
							name: 'total_amount',
						},
						
						{
							fieldLabel: 'total_amount_usdollar',
							name: 'total_amount_usdollar',
						},
						
						{
							fieldLabel: 'subtotal_tax_amount',
							name: 'subtotal_tax_amount',
						},
						
						{
							fieldLabel: 'subtotal_tax_amount_usdollar',
							name: 'subtotal_tax_amount_usdollar',
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
						
						{
							fieldLabel: 'quote_date',
							name: 'quote_date',
							id:'quote_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'invoice_date',
							name: 'invoice_date',
							id:'invoice_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'due_date',
							name: 'due_date',
							id:'due_date',
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
