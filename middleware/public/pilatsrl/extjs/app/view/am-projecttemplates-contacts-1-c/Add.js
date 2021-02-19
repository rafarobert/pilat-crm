/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:31 GMT-0400 (Bolivia Time)
 * Time: 18:35:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:31 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:31
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.am-projecttemplates-contacts-1-c.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.amProjecttemplatesContacts1CAdd',
	id: 'am-projecttemplates-contacts-1-c-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AmProjecttemplateContact1C',
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
					id:'am-projecttemplates-contacts-1-c-form',
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
							fieldLabel: 'am_projecttemplates_ida',
							name: 'am_projecttemplates_ida',
						},
						
						{
							fieldLabel: 'contacts_idb',
							name: 'contacts_idb',
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
