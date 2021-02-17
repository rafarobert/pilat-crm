/**
 * Created by @ES Express Systems
 * User: #userCreated
 * Date: #dateCreated
 * Time: #timeCreated
 * Last User updated: #userUpdated
 * Last date updated: #dateUpdated
 * Last time updated: #timeUpdated
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.local-table-name.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.lcObjPLocalTableNameAdd',
	id: 'local-table-name-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add UcObjSLocalTableName',
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
					id:'local-table-name-form',
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
