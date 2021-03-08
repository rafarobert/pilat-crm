/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Time: 15:35:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.config.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.configAdd',
	id: 'config-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Config',
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
					id:'config-form',
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
							fieldLabel: 'category',
							name: 'category',
						},
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						
						{
							fieldLabel: 'value',
							name: 'value',
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
