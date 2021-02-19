/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:54 GMT-0400 (Bolivia Time)
 * Time: 18:36:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:54 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:54
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.documents.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.documentsAdd',
	id: 'documents-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Document',
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
					id:'documents-form',
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
							fieldLabel: 'document_name',
							name: 'document_name',
						},
						
						{
							fieldLabel: 'doc_id',
							name: 'doc_id',
						},
						
						{
							fieldLabel: 'doc_type',
							name: 'doc_type',
						},
						
						{
							fieldLabel: 'doc_url',
							name: 'doc_url',
						},
						
						{
							fieldLabel: 'category_id',
							name: 'category_id',
						},
						
						{
							fieldLabel: 'subcategory_id',
							name: 'subcategory_id',
						},
						
						{
							fieldLabel: 'status_id',
							name: 'status_id',
						},
						
						{
							fieldLabel: 'document_revision_id',
							name: 'document_revision_id',
						},
						
						{
							fieldLabel: 'template_type',
							name: 'template_type',
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
							fieldLabel: 'related_doc_id',
							name: 'related_doc_id',
						},
						
						{
							fieldLabel: 'related_doc_rev_id',
							name: 'related_doc_rev_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'is_template',
							name: 'is_template',
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
							fieldLabel: 'active_date',
							name: 'active_date',
							id:'active_date',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'exp_date',
							name: 'exp_date',
							id:'exp_date',
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
