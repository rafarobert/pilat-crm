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

Ext.define('es.view.es-page-components.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esPageComponentsAdd',
	id: 'es-page-components-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsPageComponent',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsPagesPagWithPagCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-page-components/findEsPagesPagWithPagCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'pag_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsComponentsComWithComCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-page-components/findEsComponentsComWithComCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'com_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPagComParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-page-components/findEsParamsPagComParStatusWithParCod',
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
				url : '/api-esvender/es-page-components/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-page-components/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-page-components-form',
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
							fieldLabel: 'pag_com_code',
							name: 'pag_com_code',
						},
						
						{
							fieldLabel: 'pag_com_group',
							name: 'pag_com_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'pag_id',
								id: 'pag_id',
								fieldLabel: 'pag_id',
								store: storeEsPagesPagWithPagCode,
								valueField: "_id",
								displayField: "pag_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'com_id',
								id: 'com_id',
								fieldLabel: 'com_id',
								store: storeEsComponentsComWithComCode,
								valueField: "_id",
								displayField: "com_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'pag_com_par_status_id',
								id: 'pag_com_par_status_id',
								fieldLabel: 'pag_com_par_status_id',
								store: storeEsParamsPagComParStatusWithParCod,
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
