/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:21 GMT-0400 (Bolivia Time)
 * Time: 14:0:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:21 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:21
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-products-audit.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosProductsAuditAdd',
	id: 'aos-products-audit-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoProductAudit',
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
					id:'aos-products-audit-form',
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
							fieldLabel: 'created_by',
							name: 'created_by',
						},
						
						{
							fieldLabel: 'field_name',
							name: 'field_name',
						},
						
						{
							fieldLabel: 'data_type',
							name: 'data_type',
						},
						
						{
							fieldLabel: 'before_value_string',
							name: 'before_value_string',
						},
						
						{
							fieldLabel: 'after_value_string',
							name: 'after_value_string',
						},
						
						
						{
							fieldLabel: 'before_value_text',
							name: 'before_value_text',
						},
						
						{
							fieldLabel: 'after_value_text',
							name: 'after_value_text',
						},
						
						
						
						{
							fieldLabel: 'parent_id',
							name: 'parent_id',
						},
						
						
						
						
						
						
						
						{
							fieldLabel: 'date_created',
							name: 'date_created',
							id:'date_created',
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
