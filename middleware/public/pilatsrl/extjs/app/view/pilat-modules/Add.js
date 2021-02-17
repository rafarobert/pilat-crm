/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 14:00:27 GMT-0400 (Bolivia Time)
 * Time: 14:0:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 14:00:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:27
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.pilat-modules.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.pilatModulesAdd',
	id: 'pilat-modules-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add PilatModule',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storePilatParamsModParStatusWithParOrder = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-modules/findPilatParamsModParStatusWithParOrder',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_order'],
			root: 'data',
			autoLoad: true
		});
		
		var storePilatModulesModParentWithModCode = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-modules/findPilatModulesModParentWithModCode',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'mod_code'],
			root: 'data',
			autoLoad: true
		});
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'pilat-modules-form',
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
							fieldLabel: 'mod_code',
							name: 'mod_code',
						},
						
						{
							fieldLabel: 'mod_description',
							name: 'mod_description',
						},
						
						{
							fieldLabel: 'mod_abbr',
							name: 'mod_abbr',
						},
						
						{
							fieldLabel: 'mod_icon',
							name: 'mod_icon',
						},
						
						{
							fieldLabel: 'mod_group',
							name: 'mod_group',
						},
						
						{
							fieldLabel: 'createdBy',
							name: 'createdBy',
						},
						
						{
							fieldLabel: 'updatedBy',
							name: 'updatedBy',
						},
						
						
						
						
						
						
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'mod_par_status_id',
								id: 'mod_par_status_id',
								fieldLabel: 'mod_par_status_id',
								store: storePilatParamsModParStatusWithParOrder,
								valueField: "_id",
								displayField: "par_order",
							})
						},
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'mod_parent_id',
								id: 'mod_parent_id',
								fieldLabel: 'mod_parent_id',
								store: storePilatModulesModParentWithModCode,
								valueField: "_id",
								displayField: "mod_code",
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
