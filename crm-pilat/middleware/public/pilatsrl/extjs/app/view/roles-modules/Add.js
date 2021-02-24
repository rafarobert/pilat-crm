/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:36 GMT-0400 (Bolivia Time)
 * Time: 18:38:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:36 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.roles-modules.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.rolesModulesAdd',
	id: 'roles-modules-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add RoleModule',
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
					id:'roles-modules-form',
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
							fieldLabel: 'role_id',
							name: 'role_id',
						},
						
						{
							fieldLabel: 'module_id',
							name: 'module_id',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'allow',
							name: 'allow',
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
