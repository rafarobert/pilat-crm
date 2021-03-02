/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 13:59:58 GMT-0400 (Bolivia Time)
 * Time: 13:59:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 13:59:58 GMT-0400 (Bolivia Time)
 * Last time updated: 13:59:58
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.accounts.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'accountsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'accounts',
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
							var count = Ext.getStore('accounts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('accounts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('accounts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('accounts').getAt(count).set('id',nextId+1);
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
				store: 'accounts'
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
				text: 'name',
				dataIndex: 'name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'account_type',
				dataIndex: 'account_type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'industry',
				dataIndex: 'industry',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'annual_revenue',
				dataIndex: 'annual_revenue',
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
				text: 'billing_address_street',
				dataIndex: 'billing_address_street',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'billing_address_city',
				dataIndex: 'billing_address_city',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'billing_address_state',
				dataIndex: 'billing_address_state',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'billing_address_postalcode',
				dataIndex: 'billing_address_postalcode',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'billing_address_country',
				dataIndex: 'billing_address_country',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'rating',
				dataIndex: 'rating',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_office',
				dataIndex: 'phone_office',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_alternate',
				dataIndex: 'phone_alternate',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'website',
				dataIndex: 'website',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'ownership',
				dataIndex: 'ownership',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'employees',
				dataIndex: 'employees',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'ticker_symbol',
				dataIndex: 'ticker_symbol',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_address_street',
				dataIndex: 'shipping_address_street',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_address_city',
				dataIndex: 'shipping_address_city',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_address_state',
				dataIndex: 'shipping_address_state',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_address_postalcode',
				dataIndex: 'shipping_address_postalcode',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_address_country',
				dataIndex: 'shipping_address_country',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'sic_code',
				dataIndex: 'sic_code',
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
				text: 'assigned_user_id',
				dataIndex: 'assigned_user_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'parent_id',
				dataIndex: 'parent_id',
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
							var count = Ext.getStore('accounts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('accounts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('accounts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('accounts').getAt(count).set('id',nextId+1);
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
