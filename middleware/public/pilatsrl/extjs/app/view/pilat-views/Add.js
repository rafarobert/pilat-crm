/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:50 GMT-0400 (Bolivia Time)
 * Time: 4:43:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:50 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:50
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.pilat-views.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.pilatViewsAdd',
	id: 'pilat-views-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add PilatView',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storePilatModulesVieModuleWithModCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-views/findPilatModulesVieModuleWithModCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'mod_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storePilatViewsVieReturnWithVieCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-views/findPilatViewsVieReturnWithVieCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'vie_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storePilatParamsVieParStatusWithParOrder = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-views/findPilatParamsVieParStatusWithParOrder',
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
					id:'pilat-views-form',
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
							fieldLabel: 'vie_code',
							name: 'vie_code',
						},
						
						{
							fieldLabel: 'vie_description',
							name: 'vie_description',
						},
						
						{
							fieldLabel: 'vie_route',
							name: 'vie_route',
						},
						
						{
							fieldLabel: 'vie_params',
							name: 'vie_params',
						},
						
						{
							fieldLabel: 'vie_icon',
							name: 'vie_icon',
						},
						
						{
							fieldLabel: 'vie_group',
							name: 'vie_group',
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
								name: 'vie_module_id',
								id: 'vie_module_id',
								fieldLabel: 'vie_module_id',
								store: storePilatModulesVieModuleWithModCode,
								valueField: "_id",
								displayField: "mod_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'vie_return_id',
								id: 'vie_return_id',
								fieldLabel: 'vie_return_id',
								store: storePilatViewsVieReturnWithVieCode,
								valueField: "_id",
								displayField: "vie_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'vie_par_status_id',
								id: 'vie_par_status_id',
								fieldLabel: 'vie_par_status_id',
								store: storePilatParamsVieParStatusWithParOrder,
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
