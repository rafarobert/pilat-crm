/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:07 GMT-0400 (Bolivia Time)
 * Time: 18:36:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:07 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:7
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aos-pdf-templates.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aosPdfTemplatesAdd',
	id: 'aos-pdf-templates-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AoPdfTemplate',
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
					id:'aos-pdf-templates-form',
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
							fieldLabel: 'margin_left',
							name: 'margin_left',
						},
						
						{
							fieldLabel: 'margin_right',
							name: 'margin_right',
						},
						
						{
							fieldLabel: 'margin_top',
							name: 'margin_top',
						},
						
						{
							fieldLabel: 'margin_bottom',
							name: 'margin_bottom',
						},
						
						{
							fieldLabel: 'margin_header',
							name: 'margin_header',
						},
						
						{
							fieldLabel: 'margin_footer',
							name: 'margin_footer',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'type',
							name: 'type',
						},
						
						{
							fieldLabel: 'page_size',
							name: 'page_size',
						},
						
						{
							fieldLabel: 'orientation',
							name: 'orientation',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'pdfheader',
							name: 'pdfheader',
						},
						
						{
							fieldLabel: 'pdffooter',
							name: 'pdffooter',
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
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'active',
							name: 'active',
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
