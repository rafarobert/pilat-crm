/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 12:59:58 GMT-0400 (Bolivia Time)
 * Time: 12:59:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 12:59:58 GMT-0400 (Bolivia Time)
 * Last time updated: 12:59:58
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-products-quotes.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosProductsQuotesAdd',
	id: 'aos-products-quotes-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoProductQuote',
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
					id:'aos-products-quotes-form',
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
							fieldLabel: 'part_number',
							name: 'part_number',
						},
						
						{
							fieldLabel: 'discount',
							name: 'discount',
						},
						
						{
							fieldLabel: 'vat',
							name: 'vat',
						},
						
						{
							fieldLabel: 'parent_type',
							name: 'parent_type',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'item_description',
							name: 'item_description',
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
							fieldLabel: 'parent_id',
							name: 'parent_id',
						},
						
						{
							fieldLabel: 'product_id',
							name: 'product_id',
						},
						
						{
							fieldLabel: 'group_id',
							name: 'group_id',
						},
						
						
						
						{
							fieldLabel: 'product_qty',
							name: 'product_qty',
						},
						
						{
							fieldLabel: 'product_cost_price',
							name: 'product_cost_price',
						},
						
						{
							fieldLabel: 'product_cost_price_usdollar',
							name: 'product_cost_price_usdollar',
						},
						
						{
							fieldLabel: 'product_list_price',
							name: 'product_list_price',
						},
						
						{
							fieldLabel: 'product_list_price_usdollar',
							name: 'product_list_price_usdollar',
						},
						
						{
							fieldLabel: 'product_discount',
							name: 'product_discount',
						},
						
						{
							fieldLabel: 'product_discount_usdollar',
							name: 'product_discount_usdollar',
						},
						
						{
							fieldLabel: 'product_discount_amount',
							name: 'product_discount_amount',
						},
						
						{
							fieldLabel: 'product_discount_amount_usdollar',
							name: 'product_discount_amount_usdollar',
						},
						
						{
							fieldLabel: 'product_unit_price',
							name: 'product_unit_price',
						},
						
						{
							fieldLabel: 'product_unit_price_usdollar',
							name: 'product_unit_price_usdollar',
						},
						
						{
							fieldLabel: 'vat_amt',
							name: 'vat_amt',
						},
						
						{
							fieldLabel: 'vat_amt_usdollar',
							name: 'vat_amt_usdollar',
						},
						
						{
							fieldLabel: 'product_total_price',
							name: 'product_total_price',
						},
						
						{
							fieldLabel: 'product_total_price_usdollar',
							name: 'product_total_price_usdollar',
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
