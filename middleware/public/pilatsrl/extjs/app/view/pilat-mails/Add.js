/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:43 GMT-0400 (Bolivia Time)
 * Time: 15:36:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:43 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.pilat-mails.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.pilatMailsAdd',
	id: 'pilat-mails-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add PilatMail',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		var storePilatParamsMaiParStatusWithParOrder = new Ext.data.JsonStore({
			proxy: {
				type: 'ajax',
				url : '/api-pilatsrl/pilat-mails/findPilatParamsMaiParStatusWithParOrder',
				reader: {
					type: 'json',
					root: 'data'
				},
			},
			fields: ['_id', 'par_order'],
			root: 'data',
			autoLoad: true
		});
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'pilat-mails-form',
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
							fieldLabel: 'mai_port',
							name: 'mai_port',
						},
						
						
						{
							fieldLabel: 'mai_description',
							name: 'mai_description',
						},
						
						{
							fieldLabel: 'mai_user_account',
							name: 'mai_user_account',
						},
						
						{
							fieldLabel: 'mai_user_password',
							name: 'mai_user_password',
						},
						
						{
							fieldLabel: 'mai_host',
							name: 'mai_host',
						},
						
						{
							fieldLabel: 'mai_protocol',
							name: 'mai_protocol',
						},
						
						{
							fieldLabel: 'mai_bus_id',
							name: 'mai_bus_id',
						},
						
						{
							fieldLabel: 'mai_group',
							name: 'mai_group',
						},
						
						{
							fieldLabel: 'mai_subject',
							name: 'mai_subject',
						},
						
						{
							fieldLabel: 'mai_to',
							name: 'mai_to',
						},
						
						{
							fieldLabel: 'updatedBy',
							name: 'updatedBy',
						},
						
						{
							fieldLabel: 'createdBy',
							name: 'createdBy',
						},
						
						
						{
							fieldLabel: 'mai_bcc',
							name: 'mai_bcc',
						},
						
						{
							fieldLabel: 'mai_cc',
							name: 'mai_cc',
						},
						
						{
							fieldLabel: 'mai_text',
							name: 'mai_text',
						},
						
						{
							fieldLabel: 'mai_html',
							name: 'mai_html',
						},
						
						
						
						
						
						
						
						
						{
							xtype: new Ext.form.field.ComboBox({
								name: 'mai_par_status_id',
								id: 'mai_par_status_id',
								fieldLabel: 'mai_par_status_id',
								store: storePilatParamsMaiParStatusWithParOrder,
								valueField: "_id",
								displayField: "par_order",
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
