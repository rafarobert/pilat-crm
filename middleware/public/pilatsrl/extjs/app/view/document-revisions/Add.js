/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:46 GMT-0400 (Bolivia Time)
 * Time: 0:22:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:46 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:46
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.document-revisions.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.documentRevisionsAdd',
	id: 'document-revisions-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add DocumentRevision',
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
					id:'document-revisions-form',
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
							fieldLabel: 'change_log',
							name: 'change_log',
						},
						
						{
							fieldLabel: 'document_id',
							name: 'document_id',
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
							fieldLabel: 'filename',
							name: 'filename',
						},
						
						{
							fieldLabel: 'file_ext',
							name: 'file_ext',
						},
						
						{
							fieldLabel: 'file_mime_type',
							name: 'file_mime_type',
						},
						
						{
							fieldLabel: 'revision',
							name: 'revision',
						},
						
						
						
						
						{
							fieldLabel: 'created_by',
							name: 'created_by',
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
