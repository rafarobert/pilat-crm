/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:13 GMT-0400 (Bolivia Time)
 * Time: 4:42:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:13 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:13
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.aos-line-item-groups.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'aosLineItemGroupsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'aos_line_item_groups',
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
							var count = Ext.getStore('aosLineItemGroups').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosLineItemGroups').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosLineItemGroups').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosLineItemGroups').getAt(count).set('id',nextId+1);
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
				store: 'aosLineItemGroups'
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
				text: 'parent_type',
				dataIndex: 'parent_type',
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
				text: 'number',
				dataIndex: 'number',
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
							var count = Ext.getStore('aosLineItemGroups').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosLineItemGroups').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosLineItemGroups').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosLineItemGroups').getAt(count).set('id',nextId+1);
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
