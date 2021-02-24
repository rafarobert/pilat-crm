/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:47 GMT-0400 (Bolivia Time)
 * Time: 18:36:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:47 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:47
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.contacts.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'contactsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'contacts',
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
							var count = Ext.getStore('contacts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('contacts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('contacts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('contacts').getAt(count).set('id',nextId+1);
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
				store: 'contacts'
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
				text: 'salutation',
				dataIndex: 'salutation',
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
				text: 'lawful_basis_source',
				dataIndex: 'lawful_basis_source',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'primary_address_street',
				dataIndex: 'primary_address_street',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'primary_address_city',
				dataIndex: 'primary_address_city',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'primary_address_state',
				dataIndex: 'primary_address_state',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'primary_address_postalcode',
				dataIndex: 'primary_address_postalcode',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'primary_address_country',
				dataIndex: 'primary_address_country',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'alt_address_street',
				dataIndex: 'alt_address_street',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'alt_address_city',
				dataIndex: 'alt_address_city',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'alt_address_state',
				dataIndex: 'alt_address_state',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'alt_address_postalcode',
				dataIndex: 'alt_address_postalcode',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'alt_address_country',
				dataIndex: 'alt_address_country',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'assistant',
				dataIndex: 'assistant',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'assistant_phone',
				dataIndex: 'assistant_phone',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'lead_source',
				dataIndex: 'lead_source',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'joomla_account_id',
				dataIndex: 'joomla_account_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'portal_user_type',
				dataIndex: 'portal_user_type',
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
				text: 'lawful_basis',
				dataIndex: 'lawful_basis',
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
				text: 'assigned_user_id',
				dataIndex: 'assigned_user_id',
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
				text: 'campaign_id',
				dataIndex: 'campaign_id',
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
				text: 'do_not_call',
				dataIndex: 'do_not_call',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'portal_account_disabled',
				dataIndex: 'portal_account_disabled',
				width: 160,
				editor: {
					allowBlank: false
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
			
			{
				text: 'date_reviewed',
				dataIndex: 'date_reviewed',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'date_reviewed',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'birthdate',
				dataIndex: 'birthdate',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'birthdate',
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
							var count = Ext.getStore('contacts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('contacts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('contacts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('contacts').getAt(count).set('id',nextId+1);
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
