/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 13:00:17 GMT-0400 (Bolivia Time)
 * Time: 13:0:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 13:00:17 GMT-0400 (Bolivia Time)
 * Last time updated: 13:0:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.custom-fields.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.customFieldsAdd',
	id: 'custom-fields-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add CustomField',
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
					id:'custom-fields-form',
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
							fieldLabel: 'set_num',
							name: 'set_num',
						},
						
						
						{
							fieldLabel: 'bean_id',
							name: 'bean_id',
						},
						
						{
							fieldLabel: 'field0',
							name: 'field0',
						},
						
						{
							fieldLabel: 'field1',
							name: 'field1',
						},
						
						{
							fieldLabel: 'field2',
							name: 'field2',
						},
						
						{
							fieldLabel: 'field3',
							name: 'field3',
						},
						
						{
							fieldLabel: 'field4',
							name: 'field4',
						},
						
						{
							fieldLabel: 'field5',
							name: 'field5',
						},
						
						{
							fieldLabel: 'field6',
							name: 'field6',
						},
						
						{
							fieldLabel: 'field7',
							name: 'field7',
						},
						
						{
							fieldLabel: 'field8',
							name: 'field8',
						},
						
						{
							fieldLabel: 'field9',
							name: 'field9',
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
