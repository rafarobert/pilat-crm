/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:39 GMT-0400 (Bolivia Time)
 * Time: 3:17:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:39 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.advancedreports-sharedusers.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.advancedreportsSharedusersAdd',
	id: 'advancedreports-sharedusers-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AdvancedreportShareduser',
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
					id:'advancedreports-sharedusers-form',
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
							fieldLabel: 'report_id',
							name: 'report_id',
						},
						
						{
							fieldLabel: 'user_id',
							name: 'user_id',
						},
						
						
						
						
						{
							fieldLabel: 'level',
							name: 'level',
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
