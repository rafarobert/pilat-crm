/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 13:00:36 GMT-0400 (Bolivia Time)
 * Time: 13:0:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 13:00:36 GMT-0400 (Bolivia Time)
 * Last time updated: 13:0:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.iad-sticky-notes-audit.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.iadStickyNotesAuditAdd',
	id: 'iad-sticky-notes-audit-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add IadStickyNoteAudit',
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
					id:'iad-sticky-notes-audit-form',
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
