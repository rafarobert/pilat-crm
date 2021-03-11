/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:09:30 GMT-0400 (Bolivia Time)
 * Time: 14:9:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:09:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:9:30
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-invoices-audit.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosInvoicesAuditAdd',
	id: 'aos-invoices-audit-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoInvoiceAudit',
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
					id:'aos-invoices-audit-form',
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
