/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 13:59:47 GMT-0400 (Bolivia Time)
 * Time: 13:59:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 13:59:47 GMT-0400 (Bolivia Time)
 * Last time updated: 13:59:47
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.email-templates-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailTemplatesCstmAdd',
	id: 'email-templates-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EmailTemplateCstm',
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
					id:'email-templates-cstm-form',
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
							fieldLabel: 'id_c',
							name: 'id_c',
						},
						
						
						
						
						
						{
							fieldLabel: 'sms_module_c',
							name: 'sms_module_c',
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