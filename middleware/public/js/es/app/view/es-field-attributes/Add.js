/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:42 GMT-0400 (Bolivia Time)
 * Time: 14:11:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:42 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:42
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.es-field-attributes.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esFieldAttributesAdd',
	id: 'es-field-attributes-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsFieldAttribute',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsFieldsFieWithFieCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-field-attributes/findEsFieldsFieWithFieCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'fie_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsFieAttParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-field-attributes/findEsParamsFieAttParStatusWithParCod',
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
				url : '/api-esvender/es-field-attributes/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-field-attributes/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-field-attributes-form',
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
							fieldLabel: 'fie_att_name',
							name: 'fie_att_name',
						},
						
						{
							fieldLabel: 'fie_att_description',
							name: 'fie_att_description',
						},
						
						{
							fieldLabel: 'fie_att_group',
							name: 'fie_att_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'fie_id',
								id: 'fie_id',
								fieldLabel: 'fie_id',
								store: storeEsFieldsFieWithFieCode,
								valueField: "_id",
								displayField: "fie_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'fie_att_par_status_id',
								id: 'fie_att_par_status_id',
								fieldLabel: 'fie_att_par_status_id',
								store: storeEsParamsFieAttParStatusWithParCod,
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