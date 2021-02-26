/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:27 GMT-0400 (Bolivia Time)
 * Time: 0:23:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:27 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:27
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.pilat-dictionaries.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.pilatDictionariesAdd',
	id: 'pilat-dictionaries-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add PilatDictionary',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storePilatParamsDicParStatusWithParOrder = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-dictionaries/findPilatParamsDicParStatusWithParOrder',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_order'],
			root: 'data',
			autoLoad: true
		});
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'pilat-dictionaries-form',
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
							fieldLabel: 'dic_code',
							name: 'dic_code',
						},
						
						{
							fieldLabel: 'dic_description',
							name: 'dic_description',
						},
						
						{
							fieldLabel: 'dic_group',
							name: 'dic_group',
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
							xtype: new Ext.form.field.ComboBox({
								name: 'dic_par_status_id',
								id: 'dic_par_status_id',
								fieldLabel: 'dic_par_status_id',
								store: storePilatParamsDicParStatusWithParOrder,
								valueField: "_id",
								displayField: "par_order",
							})
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
