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

Ext.define('es.view.es-object-attributes.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esObjectAttributesAdd',
	id: 'es-object-attributes-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsObjectAttribute',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsObjectsObjWithObjDescription = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-object-attributes/findEsObjectsObjWithObjDescription',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'obj_description'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsAttributesAttWithAttCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-object-attributes/findEsAttributesAttWithAttCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'att_code'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsObjAttParEditableWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-object-attributes/findEsParamsObjAttParEditableWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsObjAttParInterfaceBehaviorWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-object-attributes/findEsParamsObjAttParInterfaceBehaviorWithParCod',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_cod'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsObjAttParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-object-attributes/findEsParamsObjAttParStatusWithParCod',
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
				url : '/api-esvender/es-object-attributes/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-object-attributes/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-object-attributes-form',
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
							fieldLabel: 'obj_att_default_value',
							name: 'obj_att_default_value',
						},
						
						{
							fieldLabel: 'obj_att_group',
							name: 'obj_att_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'obj_id',
								id: 'obj_id',
								fieldLabel: 'obj_id',
								store: storeEsObjectsObjWithObjDescription,
								valueField: "_id",
								displayField: "obj_description",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'att_id',
								id: 'att_id',
								fieldLabel: 'att_id',
								store: storeEsAttributesAttWithAttCode,
								valueField: "_id",
								displayField: "att_code",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'obj_att_par_editable_id',
								id: 'obj_att_par_editable_id',
								fieldLabel: 'obj_att_par_editable_id',
								store: storeEsParamsObjAttParEditableWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'obj_att_par_interface_behavior_id',
								id: 'obj_att_par_interface_behavior_id',
								fieldLabel: 'obj_att_par_interface_behavior_id',
								store: storeEsParamsObjAttParInterfaceBehaviorWithParCod,
								valueField: "_id",
								displayField: "par_cod",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'obj_att_par_status_id',
								id: 'obj_att_par_status_id',
								fieldLabel: 'obj_att_par_status_id',
								store: storeEsParamsObjAttParStatusWithParCod,
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
