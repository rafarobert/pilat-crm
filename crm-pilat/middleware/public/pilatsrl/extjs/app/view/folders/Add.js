/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:16 GMT-0400 (Bolivia Time)
 * Time: 18:37:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:16 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:16
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.folders.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.foldersAdd',
	id: 'folders-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Folder',
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
					id:'folders-form',
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
							fieldLabel: 'folder_type',
							name: 'folder_type',
						},
						
						
						{
							fieldLabel: 'dynamic_query',
							name: 'dynamic_query',
						},
						
						
						
						{
							fieldLabel: 'parent_folder',
							name: 'parent_folder',
						},
						
						{
							fieldLabel: 'assign_to_id',
							name: 'assign_to_id',
						},
						
						{
							fieldLabel: 'created_by',
							name: 'created_by',
						},
						
						{
							fieldLabel: 'modified_by',
							name: 'modified_by',
						},
						
						
						
						
						
						{
							fieldLabel: 'has_child',
							name: 'has_child',
						},
						
						{
							fieldLabel: 'is_group',
							name: 'is_group',
						},
						
						{
							fieldLabel: 'is_dynamic',
							name: 'is_dynamic',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
