/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:41 GMT-0400 (Bolivia Time)
 * Time: 14:11:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:41 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:41
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.es-views.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esViewsAdd',
	id: 'es-views-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsView',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsModulesVieModuleWithModCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-views/findEsModulesVieModuleWithModCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'mod_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsViewsVieReturnWithVieCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-views/findEsViewsVieReturnWithVieCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'vie_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsVieParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-views/findEsParamsVieParStatusWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsUsersCreatedByWithUsrUsername = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-views/findEsUsersCreatedByWithUsrUsername',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'usr_username'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsUsersUpdatedByWithUsrUsername = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-views/findEsUsersUpdatedByWithUsrUsername',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'usr_username'],
			root: 'data',
			autoLoad: true
		});
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'es-views-form',
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
							xtype: new Ext.form.field.ComboBox({
								name: 'vie_module_id',
								id: 'vie_module_id',
								fieldLabel: 'vie_module_id',
								store: storeEsModulesVieModuleWithModCode,
								valueField: "_id",
								displayField: "mod_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'vie_return_id',
								id: 'vie_return_id',
								fieldLabel: 'vie_return_id',
								store: storeEsViewsVieReturnWithVieCode,
								valueField: "_id",
								displayField: "vie_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'vie_par_status_id',
								id: 'vie_par_status_id',
								fieldLabel: 'vie_par_status_id',
								store: storeEsParamsVieParStatusWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'createdById',
								id: 'createdById',
								fieldLabel: 'createdById',
								store: storeEsUsersCreatedByWithUsrUsername,
								valueField: "_id",
								displayField: "usr_username",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'updatedById',
								id: 'updatedById',
								fieldLabel: 'updatedById',
								store: storeEsUsersUpdatedByWithUsrUsername,
								valueField: "_id",
								displayField: "usr_username",
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
