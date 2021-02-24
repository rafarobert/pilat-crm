/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:03 GMT-0400 (Bolivia Time)
 * Time: 18:36:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:03 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:3
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.aos-invoices.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'aosInvoicesList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'aos_invoices',
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
							var count = Ext.getStore('aosInvoices').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosInvoices').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosInvoices').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosInvoices').getAt(count).set('id',nextId+1);
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
				store: 'aosInvoices'
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
				text: 'shipping_tax',
				dataIndex: 'shipping_tax',
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
				text: 'description',
				dataIndex: 'description',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'template_ddown_c',
				dataIndex: 'template_ddown_c',
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
				text: 'billing_account_id',
				dataIndex: 'billing_account_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'billing_contact_id',
				dataIndex: 'billing_contact_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'currency_id',
				dataIndex: 'currency_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			{
				text: 'total_amt',
				dataIndex: 'total_amt',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'total_amt_usdollar',
				dataIndex: 'total_amt_usdollar',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'subtotal_amount',
				dataIndex: 'subtotal_amount',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'subtotal_amount_usdollar',
				dataIndex: 'subtotal_amount_usdollar',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'discount_amount',
				dataIndex: 'discount_amount',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'discount_amount_usdollar',
				dataIndex: 'discount_amount_usdollar',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'tax_amount',
				dataIndex: 'tax_amount',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'tax_amount_usdollar',
				dataIndex: 'tax_amount_usdollar',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_amount',
				dataIndex: 'shipping_amount',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_amount_usdollar',
				dataIndex: 'shipping_amount_usdollar',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_tax_amt',
				dataIndex: 'shipping_tax_amt',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shipping_tax_amt_usdollar',
				dataIndex: 'shipping_tax_amt_usdollar',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'total_amount',
				dataIndex: 'total_amount',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'total_amount_usdollar',
				dataIndex: 'total_amount_usdollar',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'subtotal_tax_amount',
				dataIndex: 'subtotal_tax_amount',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'subtotal_tax_amount_usdollar',
				dataIndex: 'subtotal_tax_amount_usdollar',
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
				text: 'number',
				dataIndex: 'number',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'quote_number',
				dataIndex: 'quote_number',
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
				text: 'quote_date',
				dataIndex: 'quote_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'quote_date',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'invoice_date',
				dataIndex: 'invoice_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'invoice_date',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'due_date',
				dataIndex: 'due_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'due_date',
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
							var count = Ext.getStore('aosInvoices').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosInvoices').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosInvoices').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosInvoices').getAt(count).set('id',nextId+1);
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
