/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:39 GMT-0400 (Bolivia Time)
 * Time: 14:11:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.es-people.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esPeopleAdd',
	id: 'es-people-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsPerson',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsPeoplePerParentWithPerFirstName = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-people/findEsPeoplePerParentWithPerFirstName',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'per_first_name'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPerParTypeDocWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-people/findEsParamsPerParTypeDocWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPerParCityWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-people/findEsParamsPerParCityWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPerParSexWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-people/findEsParamsPerParSexWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPerParCountryWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-people/findEsParamsPerParCountryWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPerParNacionalityWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-people/findEsParamsPerParNacionalityWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsPerParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-people/findEsParamsPerParStatusWithParCod',
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
				url : '/api-esvender/es-people/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-people/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-people-form',
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
							fieldLabel: 'per_first_name',
							name: 'per_first_name',
						},
						
						{
							fieldLabel: 'per_second_name',
							name: 'per_second_name',
						},
						
						{
							fieldLabel: 'per_first_lastname',
							name: 'per_first_lastname',
						},
						
						{
							fieldLabel: 'per_second_lastname',
							name: 'per_second_lastname',
						},
						
						{
							fieldLabel: 'per_license',
							name: 'per_license',
						},
						
						{
							fieldLabel: 'per_license_comp',
							name: 'per_license_comp',
						},
						
						{
							fieldLabel: 'per_home_address',
							name: 'per_home_address',
						},
						
						{
							fieldLabel: 'per_mail',
							name: 'per_mail',
						},
						
						{
							fieldLabel: 'per_home_phone',
							name: 'per_home_phone',
						},
						
						{
							fieldLabel: 'per_cellphone',
							name: 'per_cellphone',
						},
						
						{
							fieldLabel: 'per_group',
							name: 'per_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'per_parent_id',
								id: 'per_parent_id',
								fieldLabel: 'per_parent_id',
								store: storeEsPeoplePerParentWithPerFirstName,
								valueField: "_id",
								displayField: "per_first_name",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'per_par_type_doc_id',
								id: 'per_par_type_doc_id',
								fieldLabel: 'per_par_type_doc_id',
								store: storeEsParamsPerParTypeDocWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'per_par_city_id',
								id: 'per_par_city_id',
								fieldLabel: 'per_par_city_id',
								store: storeEsParamsPerParCityWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'per_par_sex_id',
								id: 'per_par_sex_id',
								fieldLabel: 'per_par_sex_id',
								store: storeEsParamsPerParSexWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'per_par_country_id',
								id: 'per_par_country_id',
								fieldLabel: 'per_par_country_id',
								store: storeEsParamsPerParCountryWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'per_par_nacionality_id',
								id: 'per_par_nacionality_id',
								fieldLabel: 'per_par_nacionality_id',
								store: storeEsParamsPerParNacionalityWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'per_par_status_id',
								id: 'per_par_status_id',
								fieldLabel: 'per_par_status_id',
								store: storeEsParamsPerParStatusWithParCod,
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
							fieldLabel: 'per_birthday',
							name: 'per_birthday',
							id:'per_birthday',
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
