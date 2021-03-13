/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:26:46 GMT-0400 (Bolivia Time)
 * Time: 0:26:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:26:46 GMT-0400 (Bolivia Time)
 * Last time updated: 0:26:46
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.prospect-lists-prospects.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.prospectListsProspectsAdd',
	id: 'prospect-lists-prospects-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add ProspectListProspect',
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
					id:'prospect-lists-prospects-form',
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
							fieldLabel: 'prospect_list_id',
							name: 'prospect_list_id',
						},
						
						{
							fieldLabel: 'related_id',
							name: 'related_id',
						},
						
						{
							fieldLabel: 'related_type',
							name: 'related_type',
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
