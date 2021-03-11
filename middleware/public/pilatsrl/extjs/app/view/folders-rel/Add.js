/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:10:15 GMT-0400 (Bolivia Time)
 * Time: 14:10:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:10:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:10:15
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.folders-rel.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.foldersRelAdd',
	id: 'folders-rel-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add FolderRel',
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
					id:'folders-rel-form',
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
							fieldLabel: 'polymorphic_module',
							name: 'polymorphic_module',
						},
						
						
						
						
						{
							fieldLabel: 'folder_id',
							name: 'folder_id',
						},
						
						{
							fieldLabel: 'polymorphic_id',
							name: 'polymorphic_id',
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
