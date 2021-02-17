/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:49 GMT-0400 (Bolivia Time)
 * Time: 4:42:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:49 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.currencies.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.currenciesAdd',
	id: 'currencies-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Currency',
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
					id:'currencies-form',
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
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'symbol',
							name: 'symbol',
						},
						
						{
							fieldLabel: 'iso4217',
							name: 'iso4217',
						},
						
						{
							fieldLabel: 'status',
							name: 'status',
						},
						
						
						
						
						{
							fieldLabel: 'created_by',
							name: 'created_by',
						},
						
						
						
						
						{
							fieldLabel: 'conversion_rate',
							name: 'conversion_rate',
						},
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						
						{
							fieldLabel: 'date_entered',
							name: 'date_entered',
							id:'date_entered',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
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
