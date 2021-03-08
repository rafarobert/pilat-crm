/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:12 GMT-0400 (Bolivia Time)
 * Time: 15:37:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:12 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:12
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.users.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.usersAdd',
	id: 'users-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add User',
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
					id:'users-form',
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
							fieldLabel: 'user_name',
							name: 'user_name',
						},
						
						{
							fieldLabel: 'user_hash',
							name: 'user_hash',
						},
						
						{
							fieldLabel: 'authenticate_id',
							name: 'authenticate_id',
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
							fieldLabel: 'status',
							name: 'status',
						},
						
						{
							fieldLabel: 'address_street',
							name: 'address_street',
						},
						
						{
							fieldLabel: 'address_city',
							name: 'address_city',
						},
						
						{
							fieldLabel: 'address_state',
							name: 'address_state',
						},
						
						{
							fieldLabel: 'address_country',
							name: 'address_country',
						},
						
						{
							fieldLabel: 'address_postalcode',
							name: 'address_postalcode',
						},
						
						{
							fieldLabel: 'employee_status',
							name: 'employee_status',
						},
						
						{
							fieldLabel: 'messenger_id',
							name: 'messenger_id',
						},
						
						{
							fieldLabel: 'messenger_type',
							name: 'messenger_type',
						},
						
						{
							fieldLabel: 'factor_auth_interface',
							name: 'factor_auth_interface',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
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
							fieldLabel: 'reports_to_id',
							name: 'reports_to_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'system_generated_password',
							name: 'system_generated_password',
						},
						
						{
							fieldLabel: 'sugar_login',
							name: 'sugar_login',
						},
						
						{
							fieldLabel: 'is_admin',
							name: 'is_admin',
						},
						
						{
							fieldLabel: 'external_auth_only',
							name: 'external_auth_only',
						},
						
						{
							fieldLabel: 'receive_notifications',
							name: 'receive_notifications',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'portal_only',
							name: 'portal_only',
						},
						
						{
							fieldLabel: 'show_on_employees',
							name: 'show_on_employees',
						},
						
						{
							fieldLabel: 'is_group',
							name: 'is_group',
						},
						
						{
							fieldLabel: 'factor_auth',
							name: 'factor_auth',
						},
						
						
						
						{
							fieldLabel: 'pwd_last_changed',
							name: 'pwd_last_changed',
							id:'pwd_last_changed',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
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
