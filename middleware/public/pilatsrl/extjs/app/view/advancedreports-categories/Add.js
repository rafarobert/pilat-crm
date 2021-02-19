/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Time: 3:17:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.advancedreports-categories.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.advancedreportsCategoriesAdd',
	id: 'advancedreports-categories-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AdvancedreportCategorie',
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
					id:'advancedreports-categories-form',
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
							fieldLabel: 'parent_id',
							name: 'parent_id',
						},
						
						{
							fieldLabel: 'sequence',
							name: 'sequence',
						},
						
						{
							fieldLabel: 'visible',
							name: 'visible',
						},
						
						
						{
							fieldLabel: 'title',
							name: 'title',
						},
						
						{
							fieldLabel: 'description',
							name: 'description',
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
