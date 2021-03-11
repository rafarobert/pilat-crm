/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:09:48 GMT-0400 (Bolivia Time)
 * Time: 14:9:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:09:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:9:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.calls-cstm.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.callsCstmAdd',
	id: 'calls-cstm-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add CallCstm',
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
					id:'calls-cstm-form',
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
							fieldLabel: 'message_id_c',
							name: 'message_id_c',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'llamada_realizada_c',
							name: 'llamada_realizada_c',
						},
						
						
						
						{
							fieldLabel: 'llamada_fecha_c',
							name: 'llamada_fecha_c',
							id:'llamada_fecha_c',
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
