/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:10:59 GMT-0400 (Bolivia Time)
 * Time: 14:10:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:10:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:10:59
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.prospects.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.prospectsAdd',
	id: 'prospects-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Prospect',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'prospects-form',
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
							fieldLabel: 'id',
							name: 'id',
						},
						
						
						
						
						{
							fieldLabel: 'tracker_key',
							name: 'tracker_key',
						},
						
						
						{
							fieldLabel: 'salutation',
							name: 'salutation',
						},
						
						{
							fieldLabel: 'first_name',
							name: 'first_name',
						},
						
						{
							fieldLabel: 'last_name',
							name: 'last_name',
						},
						
						{
							fieldLabel: 'title',
							name: 'title',
						},
						
						{
							fieldLabel: 'photo',
							name: 'photo',
						},
						
						{
							fieldLabel: 'department',
							name: 'department',
						},
						
						{
							fieldLabel: 'phone_home',
							name: 'phone_home',
						},
						
						{
							fieldLabel: 'phone_mobile',
							name: 'phone_mobile',
						},
						
						{
							fieldLabel: 'phone_work',
							name: 'phone_work',
						},
						
						{
							fieldLabel: 'phone_other',
							name: 'phone_other',
						},
						
						{
							fieldLabel: 'phone_fax',
							name: 'phone_fax',
						},
						
						{
							fieldLabel: 'lawful_basis_source',
							name: 'lawful_basis_source',
						},
						
						{
							fieldLabel: 'primary_address_street',
							name: 'primary_address_street',
						},
						
						{
							fieldLabel: 'primary_address_city',
							name: 'primary_address_city',
						},
						
						{
							fieldLabel: 'primary_address_state',
							name: 'primary_address_state',
						},
						
						{
							fieldLabel: 'primary_address_postalcode',
							name: 'primary_address_postalcode',
						},
						
						{
							fieldLabel: 'primary_address_country',
							name: 'primary_address_country',
						},
						
						{
							fieldLabel: 'alt_address_street',
							name: 'alt_address_street',
						},
						
						{
							fieldLabel: 'alt_address_city',
							name: 'alt_address_city',
						},
						
						{
							fieldLabel: 'alt_address_state',
							name: 'alt_address_state',
						},
						
						{
							fieldLabel: 'alt_address_postalcode',
							name: 'alt_address_postalcode',
						},
						
						{
							fieldLabel: 'alt_address_country',
							name: 'alt_address_country',
						},
						
						{
							fieldLabel: 'assistant',
							name: 'assistant',
						},
						
						{
							fieldLabel: 'assistant_phone',
							name: 'assistant_phone',
						},
						
						{
							fieldLabel: 'account_name',
							name: 'account_name',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'lawful_basis',
							name: 'lawful_basis',
						},
						
						
						
						{
							fieldLabel: 'modified_user_id',
							name: 'modified_user_id',
						},
						
						{
							fieldLabel: 'created_by',
							name: 'created_by',
						},
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
						},
						
						{
							fieldLabel: 'lead_id',
							name: 'lead_id',
						},
						
						{
							fieldLabel: 'campaign_id',
							name: 'campaign_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'do_not_call',
							name: 'do_not_call',
						},
						
						
						
						{
							fieldLabel: 'date_entered',
							name: 'date_entered',
							id:'date_entered',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_modified',
							name: 'date_modified',
							id:'date_modified',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_reviewed',
							name: 'date_reviewed',
							id:'date_reviewed',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'birthdate',
							name: 'birthdate',
							id:'birthdate',
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
