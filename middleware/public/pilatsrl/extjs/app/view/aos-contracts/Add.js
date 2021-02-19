/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:59 GMT-0400 (Bolivia Time)
 * Time: 18:35:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:59 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:59
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-contracts.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosContractsAdd',
	id: 'aos-contracts-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoContract',
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
					id:'aos-contracts-form',
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
							fieldLabel: 'reference_code',
							name: 'reference_code',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						{
							fieldLabel: 'contract_type',
							name: 'contract_type',
						},
						
						{
							fieldLabel: 'shipping_tax',
							name: 'shipping_tax',
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
							fieldLabel: 'currency_id',
							name: 'currency_id',
						},
						
						{
							fieldLabel: 'contract_account_id',
							name: 'contract_account_id',
						},
						
						{
							fieldLabel: 'opportunity_id',
							name: 'opportunity_id',
						},
						
						{
							fieldLabel: 'contact_id',
							name: 'contact_id',
						},
						
						{
							fieldLabel: 'call_id',
							name: 'call_id',
						},
						
						
						
						{
							fieldLabel: 'total_contract_value',
							name: 'total_contract_value',
						},
						
						{
							fieldLabel: 'total_contract_value_usdollar',
							name: 'total_contract_value_usdollar',
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
							fieldLabel: 'start_date',
							name: 'start_date',
							id:'start_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'end_date',
							name: 'end_date',
							id:'end_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'customer_signed_date',
							name: 'customer_signed_date',
							id:'customer_signed_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'company_signed_date',
							name: 'company_signed_date',
							id:'company_signed_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'renewal_reminder_date',
							name: 'renewal_reminder_date',
							id:'renewal_reminder_date',
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
