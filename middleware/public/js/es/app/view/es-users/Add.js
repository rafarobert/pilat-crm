/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:40 GMT-0400 (Bolivia Time)
 * Time: 14:11:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.es-users.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esUsersAdd',
	id: 'es-users-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsUser',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsParamsUsrParAuthStrategyWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-users/findEsParamsUsrParAuthStrategyWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsRolesUsrRolWithRolCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-users/findEsRolesUsrRolWithRolCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'rol_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsModulesUsrModWithModCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-users/findEsModulesUsrModWithModCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'mod_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsPeopleUsrPersonWithPerFirstName = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-users/findEsPeopleUsrPersonWithPerFirstName',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'per_first_name'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsFilesUsrFilImgWithFilRute = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-users/findEsFilesUsrFilImgWithFilRute',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'fil_rute'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsUsrParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-users/findEsParamsUsrParStatusWithParCod',
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
				url : '/api-esvender/es-users/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-users/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-users-form',
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
							fieldLabel: 'usr_accept_terms',
							name: 'usr_accept_terms',
						},
						
						
						{
							fieldLabel: 'usr_pwd_change',
							name: 'usr_pwd_change',
						},
						
						
						{
							fieldLabel: 'usr_id',
							name: 'usr_id',
						},
						
						{
							fieldLabel: 'usr_username',
							name: 'usr_username',
						},
						
						{
							fieldLabel: 'usr_password',
							name: 'usr_password',
						},
						
						{
							fieldLabel: 'usr_mail',
							name: 'usr_mail',
						},
						
						{
							fieldLabel: 'usr_token',
							name: 'usr_token',
						},
						
						{
							fieldLabel: 'usr_name',
							name: 'usr_name',
						},
						
						{
							fieldLabel: 'usr_lastname',
							name: 'usr_lastname',
						},
						
						{
							fieldLabel: 'usr_group',
							name: 'usr_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'usr_par_auth_strategy_id',
								id: 'usr_par_auth_strategy_id',
								fieldLabel: 'usr_par_auth_strategy_id',
								store: storeEsParamsUsrParAuthStrategyWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'usr_rol_id',
								id: 'usr_rol_id',
								fieldLabel: 'usr_rol_id',
								store: storeEsRolesUsrRolWithRolCode,
								valueField: "_id",
								displayField: "rol_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'usr_mod_id',
								id: 'usr_mod_id',
								fieldLabel: 'usr_mod_id',
								store: storeEsModulesUsrModWithModCode,
								valueField: "_id",
								displayField: "mod_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'usr_person_id',
								id: 'usr_person_id',
								fieldLabel: 'usr_person_id',
								store: storeEsPeopleUsrPersonWithPerFirstName,
								valueField: "_id",
								displayField: "per_first_name",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'usr_fil_img_id',
								id: 'usr_fil_img_id',
								fieldLabel: 'usr_fil_img_id',
								store: storeEsFilesUsrFilImgWithFilRute,
								valueField: "_id",
								displayField: "fil_rute",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'usr_par_status_id',
								id: 'usr_par_status_id',
								fieldLabel: 'usr_par_status_id',
								store: storeEsParamsUsrParStatusWithParCod,
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
							fieldLabel: 'usr_last_login',
							name: 'usr_last_login',
							id:'usr_last_login',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
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
