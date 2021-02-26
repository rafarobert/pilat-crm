/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:17 GMT-0400 (Bolivia Time)
 * Time: 0:23:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:17 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.leads-import.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.leadsImportAdd',
	id: 'leads-import-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add LeadImport',
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
					id:'leads-import-form',
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
							fieldLabel: 'PROSPECCION',
							name: 'PROSPECCION',
						},
						
						{
							fieldLabel: 'OFICIAL',
							name: 'OFICIAL',
						},
						
						{
							fieldLabel: 'MES',
							name: 'MES',
						},
						
						{
							fieldLabel: 'CLIENTE',
							name: 'CLIENTE',
						},
						
						{
							fieldLabel: 'LUGARORUBRODETRABAJO',
							name: 'LUGARORUBRODETRABAJO',
						},
						
						{
							fieldLabel: 'TELÉFONO',
							name: 'TELÉFONO',
						},
						
						
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'FECHA',
							name: 'FECHA',
							id:'FECHA',
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
