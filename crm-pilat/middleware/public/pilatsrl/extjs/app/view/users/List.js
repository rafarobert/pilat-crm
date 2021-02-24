/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:39:01 GMT-0400 (Bolivia Time)
 * Time: 18:39:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:39:01 GMT-0400 (Bolivia Time)
 * Last time updated: 18:39:1
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.users.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'usersList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'users',
	//</es-section>
	initComponent: function () {
		var me = this,
			rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
				clicksToEdit: 2,
				listeners:{
					dbclick: {
						element: 'body',
						fn: function(){ console.log('dblclick body'); }
					}
				}
			}),
			rowMenu = Ext.create('Ext.menu.Menu', {
				height: 58,
				width: 140,
				items: [{
					text: 'Edit',
					iconCls: 'button-edit'
				}, {
					text: 'Remove',
					iconCls: 'button-remove',
    				handler: function(){
					me.fireEvent('removeRow', this);
				}
			}]
		});
		this.listeners = {
			itemcontextmenu: function(view, record, item, index, e){
				e.stopEvent();
				rowMenu.showAt(e.getXY());
			}
		};

		this.plugins = [rowEditing];
		this.selType = 'rowmodel';

		this.dockedItems = [
			{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						text: 'Add',
						iconCls: 'icon-add',
						handler: () => {
							// Create a model instance
							// Create a model instance
							var date = new Date();
							//<es-section>
							var count = Ext.getStore('users').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('users').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('users').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('users').getAt(count).set('id',nextId+1);
							//</es-section>
						}
					}, '-' ,
					// {
					// 	text: 'Add Form',
					// 	itemId: 'add',
					// 	iconCls: 'icon-add',
					// },
					{
						xtype: 'container',
						flex: 1
					}
				]
			},
			{
				xtype: 'pagingtoolbar',
				dock: 'bottom',
				width: 360,
				displayInfo: true,
				//<es-section>
				store: 'users'
				//</es-section>
			}
		];

		this.columns = [

			//<es-section>
			
			{
				text: 'id',
				width: 160,
				dataIndex: 'id',
				hidden: false
			},
			
			
			
			{
				text: 'user_name',
				dataIndex: 'user_name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'user_hash',
				dataIndex: 'user_hash',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'authenticate_id',
				dataIndex: 'authenticate_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'first_name',
				dataIndex: 'first_name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'last_name',
				dataIndex: 'last_name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'title',
				dataIndex: 'title',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'photo',
				dataIndex: 'photo',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'department',
				dataIndex: 'department',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_home',
				dataIndex: 'phone_home',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_mobile',
				dataIndex: 'phone_mobile',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_work',
				dataIndex: 'phone_work',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_other',
				dataIndex: 'phone_other',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_fax',
				dataIndex: 'phone_fax',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'status',
				dataIndex: 'status',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'address_street',
				dataIndex: 'address_street',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'address_city',
				dataIndex: 'address_city',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'address_state',
				dataIndex: 'address_state',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'address_country',
				dataIndex: 'address_country',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'address_postalcode',
				dataIndex: 'address_postalcode',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'employee_status',
				dataIndex: 'employee_status',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'messenger_id',
				dataIndex: 'messenger_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'messenger_type',
				dataIndex: 'messenger_type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'factor_auth_interface',
				dataIndex: 'factor_auth_interface',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'description',
				dataIndex: 'description',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			{
				text: 'modified_user_id',
				dataIndex: 'modified_user_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'created_by',
				dataIndex: 'created_by',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'reports_to_id',
				dataIndex: 'reports_to_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'system_generated_password',
				dataIndex: 'system_generated_password',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'sugar_login',
				dataIndex: 'sugar_login',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'is_admin',
				dataIndex: 'is_admin',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'external_auth_only',
				dataIndex: 'external_auth_only',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'receive_notifications',
				dataIndex: 'receive_notifications',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'deleted',
				dataIndex: 'deleted',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'portal_only',
				dataIndex: 'portal_only',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'show_on_employees',
				dataIndex: 'show_on_employees',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'is_group',
				dataIndex: 'is_group',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'factor_auth',
				dataIndex: 'factor_auth',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			{
				text: 'pwd_last_changed',
				dataIndex: 'pwd_last_changed',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'pwd_last_changed',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'date_entered',
				dataIndex: 'date_entered',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'date_entered',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'date_modified',
				dataIndex: 'date_modified',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'date_modified',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			//</es-section>
			{
				xtype: 'actioncolumn',
				width: 50,
				items: [
					{
						iconCls: 'button-add',
						tooltip: 'Add',
						icon: '/js/es/shared/icons/fam/add.gif',
						handler: function (grid, rowIndex, colIndex) {
							// Create a model instance
							// Create a model instance
							var date = new Date();
							//<es-section>
							var count = Ext.getStore('users').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('users').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('users').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('users').getAt(count).set('id',nextId+1);
							rowEditing.startEdit(count,1);
						}
						//</es-section>
					},
					{
						iconCls: 'button-remove',
						tooltip: 'Remove',
						icon: '/js/es/shared/icons/fam/delete.gif',
						handler: function (grid, rowIndex, colIndex) {
							this.up('grid').fireEvent('removeRow', grid, rowIndex, colIndex);
						}
					}
				]
			}
		];

		//parent
		this.callParent(arguments);
	}
});
