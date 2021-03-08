/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:45 GMT-0400 (Bolivia Time)
 * Time: 15:36:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:45 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:45
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.pilat-params.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.pilatParamsAdd',
	id: 'pilat-params-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add PilatParam',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storePilatDictionariesParDictionaryWithDicCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-params/findPilatDictionariesParDictionaryWithDicCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'dic_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storePilatParamsParStatusWithParOrder = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-params/findPilatParamsParStatusWithParOrder',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_order'],
			root: 'data',
			autoLoad: true
		});
		
		var storePilatParamsParParentWithParOrder = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-params/findPilatParamsParParentWithParOrder',
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
					id:'pilat-params-form',
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
     		        		fieldLabel: 'par_order',
    						name: 'par_order',
     					},
                        
						
						
						
						{
							fieldLabel: 'par_cod',
							name: 'par_cod',
						},
						
						{
							fieldLabel: 'par_description',
							name: 'par_description',
						},
						
						{
							fieldLabel: 'par_abbr',
							name: 'par_abbr',
						},
						
						{
							fieldLabel: 'par_group',
							name: 'par_group',
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
								name: 'par_dictionary_id',
								id: 'par_dictionary_id',
								fieldLabel: 'par_dictionary_id',
								store: storePilatDictionariesParDictionaryWithDicCode,
								valueField: "_id",
								displayField: "dic_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'par_status_id',
								id: 'par_status_id',
								fieldLabel: 'par_status_id',
								store: storePilatParamsParStatusWithParOrder,
								valueField: "_id",
								displayField: "par_order",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'par_parent_id',
								id: 'par_parent_id',
								fieldLabel: 'par_parent_id',
								store: storePilatParamsParParentWithParOrder,
								valueField: "_id",
								displayField: "par_order",
							})
						},
						
						
						{
							fieldLabel: 'duaAt',
							name: 'duaAt',
							id:'duaAt',
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
