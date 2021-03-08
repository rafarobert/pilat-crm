/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:41 GMT-0400 (Bolivia Time)
 * Time: 15:36:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:41 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:41
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.pilat-crons.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.pilatCronsAdd',
	id: 'pilat-crons-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add PilatCron',
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
					id:'pilat-crons-form',
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
							fieldLabel: '_id',
							name: '_id',
						},
						
						
          				{
     		        		fieldLabel: 'id',
    						name: 'id',
     					},
                        
						
						
						
						{
							fieldLabel: 'cro_description',
							name: 'cro_description',
						},
						
						{
							fieldLabel: 'cro_expression',
							name: 'cro_expression',
						},
						
						{
							fieldLabel: 'cro_group',
							name: 'cro_group',
						},
						
						{
							fieldLabel: 'cro_mai_id',
							name: 'cro_mai_id',
						},
						
						{
							fieldLabel: 'createdBy',
							name: 'createdBy',
						},
						
						{
							fieldLabel: 'updatedBy',
							name: 'updatedBy',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'cro_status',
							name: 'cro_status',
						},
						
						
						
						{
							fieldLabel: 'dueAt',
							name: 'dueAt',
							id:'dueAt',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'createdAt',
							name: 'createdAt',
							id:'createdAt',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'updatedAt',
							name: 'updatedAt',
							id:'updatedAt',
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
