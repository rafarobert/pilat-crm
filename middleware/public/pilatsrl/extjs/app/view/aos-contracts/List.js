/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:09:27 GMT-0400 (Bolivia Time)
 * Time: 14:9:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:09:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:9:27
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.aos-contracts.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'aosContractsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'aos_contracts',
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
							var count = Ext.getStore('aosContracts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosContracts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosContracts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosContracts').getAt(count).set('id',nextId+1);
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
				store: 'aosContracts'
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
				text: 'reference_code',
				dataIndex: 'reference_code',
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
				text: 'contract_type',
				dataIndex: 'contract_type',
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
				text: 'currency_id',
				dataIndex: 'currency_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'contract_account_id',
				dataIndex: 'contract_account_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'opportunity_id',
				dataIndex: 'opportunity_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'contact_id',
				dataIndex: 'contact_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'call_id',
				dataIndex: 'call_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			{
				text: 'total_contract_value',
				dataIndex: 'total_contract_value',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'total_contract_value_usdollar',
				dataIndex: 'total_contract_value_usdollar',
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
			
			{
				text: 'start_date',
				dataIndex: 'start_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'start_date',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'end_date',
				dataIndex: 'end_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'end_date',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'customer_signed_date',
				dataIndex: 'customer_signed_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'customer_signed_date',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'company_signed_date',
				dataIndex: 'company_signed_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'company_signed_date',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'renewal_reminder_date',
				dataIndex: 'renewal_reminder_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'renewal_reminder_date',
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
							var count = Ext.getStore('aosContracts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosContracts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosContracts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosContracts').getAt(count).set('id',nextId+1);
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
