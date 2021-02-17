/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:57 GMT-0400 (Bolivia Time)
 * Time: 4:42:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:57 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:57
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.emails-beans.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.emailsBeansAdd',
	id: 'emails-beans-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EmailBean',
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
					id:'emails-beans-form',
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
							fieldLabel: 'bean_module',
							name: 'bean_module',
						},
						
						
						{
							fieldLabel: 'campaign_data',
							name: 'campaign_data',
						},
						
						
						
						{
							fieldLabel: 'email_id',
							name: 'email_id',
						},
						
						{
							fieldLabel: 'bean_id',
							name: 'bean_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
