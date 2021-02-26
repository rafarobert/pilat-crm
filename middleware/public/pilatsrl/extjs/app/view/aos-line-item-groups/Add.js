/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:16 GMT-0400 (Bolivia Time)
 * Time: 0:22:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:16 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:16
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-line-item-groups.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosLineItemGroupsAdd',
	id: 'aos-line-item-groups-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoLineItemGroup',
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
					id:'aos-line-item-groups-form',
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
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'parent_type',
							name: 'parent_type',
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
							fieldLabel: 'discount_amount',
							name: 'discount_amount',
						},
						
						{
							fieldLabel: 'discount_amount_usdollar',
							name: 'discount_amount_usdollar',
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
							fieldLabel: 'tax_amount',
							name: 'tax_amount',
						},
						
						{
							fieldLabel: 'tax_amount_usdollar',
							name: 'tax_amount_usdollar',
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
