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

Ext.define('es.view.es-profile-views.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esProfileViewsAdd',
	id: 'es-profile-views-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsProfileView',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsProfilesProWithProCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-profile-views/findEsProfilesProWithProCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'pro_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsViewsVieWithVieCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-profile-views/findEsViewsVieWithVieCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'vie_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsProVieParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-profile-views/findEsParamsProVieParStatusWithParCod',
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
				url : '/api-esvender/es-profile-views/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-profile-views/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-profile-views-form',
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
							fieldLabel: 'pro_vie_group',
							name: 'pro_vie_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'pro_id',
								id: 'pro_id',
								fieldLabel: 'pro_id',
								store: storeEsProfilesProWithProCode,
								valueField: "_id",
								displayField: "pro_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'vie_id',
								id: 'vie_id',
								fieldLabel: 'vie_id',
								store: storeEsViewsVieWithVieCode,
								valueField: "_id",
								displayField: "vie_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'pro_vie_par_status_id',
								id: 'pro_vie_par_status_id',
								fieldLabel: 'pro_vie_par_status_id',
								store: storeEsParamsProVieParStatusWithParCod,
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
