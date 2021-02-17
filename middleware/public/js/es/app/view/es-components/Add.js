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

Ext.define('es.view.es-components.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esComponentsAdd',
	id: 'es-components-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsComponent',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsModulesComModWithModCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-components/findEsModulesComModWithModCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'mod_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsComParTypeWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-components/findEsParamsComParTypeWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsComponentsComParentWithComCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-components/findEsComponentsComParentWithComCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'com_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsComParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-components/findEsParamsComParStatusWithParCod',
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
				url : '/api-esvender/es-components/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-components/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-components-form',
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
							fieldLabel: 'com_code',
							name: 'com_code',
						},
						
						{
							fieldLabel: 'com_tag',
							name: 'com_tag',
						},
						
						{
							fieldLabel: 'com_description',
							name: 'com_description',
						},
						
						{
							fieldLabel: 'com_group',
							name: 'com_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'com_mod_id',
								id: 'com_mod_id',
								fieldLabel: 'com_mod_id',
								store: storeEsModulesComModWithModCode,
								valueField: "_id",
								displayField: "mod_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'com_par_type_id',
								id: 'com_par_type_id',
								fieldLabel: 'com_par_type_id',
								store: storeEsParamsComParTypeWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'com_parent_id',
								id: 'com_parent_id',
								fieldLabel: 'com_parent_id',
								store: storeEsComponentsComParentWithComCode,
								valueField: "_id",
								displayField: "com_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'com_par_status_id',
								id: 'com_par_status_id',
								fieldLabel: 'com_par_status_id',
								store: storeEsParamsComParStatusWithParCod,
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
