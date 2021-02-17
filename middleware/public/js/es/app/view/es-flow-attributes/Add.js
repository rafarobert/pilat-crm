/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:43 GMT-0400 (Bolivia Time)
 * Time: 14:11:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:43 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.es-flow-attributes.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.esFlowAttributesAdd',
	id: 'es-flow-attributes-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add EsFlowAttribute',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storeEsFlowsFloWithFloDescription = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-flow-attributes/findEsFlowsFloWithFloDescription',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'flo_description'],
			root: 'data',
			autoLoad: true
		});
		
		var storeEsParamsFloAttParStatusWithParCod = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-esvender/es-flow-attributes/findEsParamsFloAttParStatusWithParCod',
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
				url : '/api-esvender/es-flow-attributes/findEsUsersCreatedByWithUsrUsername',
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
				url : '/api-esvender/es-flow-attributes/findEsUsersUpdatedByWithUsrUsername',
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
					id:'es-flow-attributes-form',
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
							fieldLabel: 'flo_att_name',
							name: 'flo_att_name',
						},
						
						{
							fieldLabel: 'flo_att_description',
							name: 'flo_att_description',
						},
						
						{
							fieldLabel: 'flo_att_group',
							name: 'flo_att_group',
						},
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'flo_id',
								id: 'flo_id',
								fieldLabel: 'flo_id',
								store: storeEsFlowsFloWithFloDescription,
								valueField: "_id",
								displayField: "flo_description",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'flo_att_par_status_id',
								id: 'flo_att_par_status_id',
								fieldLabel: 'flo_att_par_status_id',
								store: storeEsParamsFloAttParStatusWithParCod,
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