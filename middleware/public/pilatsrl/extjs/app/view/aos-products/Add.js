/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:09 GMT-0400 (Bolivia Time)
 * Time: 18:36:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:09 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:9
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-products.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosProductsAdd',
	id: 'aos-products-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoProduct',
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
					id:'aos-products-form',
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
							fieldLabel: 'maincode',
							name: 'maincode',
						},
						
						{
							fieldLabel: 'part_number',
							name: 'part_number',
						},
						
						{
							fieldLabel: 'category',
							name: 'category',
						},
						
						{
							fieldLabel: 'type',
							name: 'type',
						},
						
						{
							fieldLabel: 'url',
							name: 'url',
						},
						
						{
							fieldLabel: 'product_image',
							name: 'product_image',
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
							fieldLabel: 'contact_id',
							name: 'contact_id',
						},
						
						{
							fieldLabel: 'aos_product_category_id',
							name: 'aos_product_category_id',
						},
						
						
						
						{
							fieldLabel: 'cost',
							name: 'cost',
						},
						
						{
							fieldLabel: 'cost_usdollar',
							name: 'cost_usdollar',
						},
						
						{
							fieldLabel: 'price',
							name: 'price',
						},
						
						{
							fieldLabel: 'price_usdollar',
							name: 'price_usdollar',
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
