/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:44 GMT-0400 (Bolivia Time)
 * Time: 14:11:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:44 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:44
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.es-component-attributes.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esComponentAttributesAdd',
	id: 'es-component-attributes-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsComponentAttribute',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsComponentsComWithComCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-component-attributes/findEsComponentsComWithComCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'com_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsComAttParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-component-attributes/findEsParamsComAttParStatusWithParCod',
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
				url : '/api-esvender/es-component-attributes/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-component-attributes/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-component-attributes-form',
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
							fieldLabel: 'com_att_name',
							name: 'com_att_name',
						},
						
						{
							fieldLabel: 'com_att_description',
							name: 'com_att_description',
						},
						
						{
							fieldLabel: 'com_att_group',
							name: 'com_att_group',
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
								name: 'com_att_par_status_id',
								id: 'com_att_par_status_id',
								fieldLabel: 'com_att_par_status_id',
								store: storeEsParamsComAttParStatusWithParCod,
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
