/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:11:20 GMT-0400 (Bolivia Time)
 * Time: 14:11:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:11:20 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:20
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.users-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.usersCstmAdd',
	id: 'users-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add UserCstm',
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
					id:'users-cstm-form',
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
							fieldLabel: 'codigo_agenda_c',
							name: 'codigo_agenda_c',
						},
						
						
						{
							fieldLabel: 'numero_documento_c',
							name: 'numero_documento_c',
						},
						
						{
							fieldLabel: 'extension_documento_c',
							name: 'extension_documento_c',
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
