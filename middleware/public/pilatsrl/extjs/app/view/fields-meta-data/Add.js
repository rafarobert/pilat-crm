/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:10:14 GMT-0400 (Bolivia Time)
 * Time: 14:10:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:10:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:10:14
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.fields-meta-data.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.fieldsMetaDataAdd',
	id: 'fields-meta-data-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add FieldMetaData',
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
					id:'fields-meta-data-form',
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
							fieldLabel: 'len',
							name: 'len',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'vname',
							name: 'vname',
						},
						
						{
							fieldLabel: 'comments',
							name: 'comments',
						},
						
						{
							fieldLabel: 'help',
							name: 'help',
						},
						
						{
							fieldLabel: 'custom_module',
							name: 'custom_module',
						},
						
						{
							fieldLabel: 'type',
							name: 'type',
						},
						
						{
							fieldLabel: 'default_value',
							name: 'default_value',
						},
						
						{
							fieldLabel: 'importable',
							name: 'importable',
						},
						
						{
							fieldLabel: 'ext1',
							name: 'ext1',
						},
						
						{
							fieldLabel: 'ext2',
							name: 'ext2',
						},
						
						{
							fieldLabel: 'ext3',
							name: 'ext3',
						},
						
						
						{
							fieldLabel: 'ext4',
							name: 'ext4',
						},
						
						
						
						
						
						
						
						{
							fieldLabel: 'required',
							name: 'required',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'audited',
							name: 'audited',
						},
						
						{
							fieldLabel: 'massupdate',
							name: 'massupdate',
						},
						
						{
							fieldLabel: 'reportable',
							name: 'reportable',
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
