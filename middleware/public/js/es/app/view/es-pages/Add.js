/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:45 GMT-0400 (Bolivia Time)
 * Time: 14:11:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:45
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.es-pages.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esPagesAdd',
	id: 'es-pages-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsPage',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsModulesPagModuleWithModCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-pages/findEsModulesPagModuleWithModCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'mod_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsPagesPagReturnWithPagCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-pages/findEsPagesPagReturnWithPagCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'pag_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPagParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-pages/findEsParamsPagParStatusWithParCod',
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
				url : '/api-esvender/es-pages/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-pages/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-pages-form',
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
							fieldLabel: 'pag_code',
							name: 'pag_code',
						},
						
						{
							fieldLabel: 'pag_description',
							name: 'pag_description',
						},
						
						{
							fieldLabel: 'pag_route',
							name: 'pag_route',
						},
						
						{
							fieldLabel: 'pag_params',
							name: 'pag_params',
						},
						
						{
							fieldLabel: 'pag_icon',
							name: 'pag_icon',
						},
						
						{
							fieldLabel: 'pag_group',
							name: 'pag_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'pag_module_id',
								id: 'pag_module_id',
								fieldLabel: 'pag_module_id',
								store: storeEsModulesPagModuleWithModCode,
								valueField: "_id",
								displayField: "mod_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'pag_return_id',
								id: 'pag_return_id',
								fieldLabel: 'pag_return_id',
								store: storeEsPagesPagReturnWithPagCode,
								valueField: "_id",
								displayField: "pag_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'pag_par_status_id',
								id: 'pag_par_status_id',
								fieldLabel: 'pag_par_status_id',
								store: storeEsParamsPagParStatusWithParCod,
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
