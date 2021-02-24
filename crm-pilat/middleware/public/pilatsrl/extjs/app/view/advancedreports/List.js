/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Time: 3:17:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:36
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.advancedreports.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'advancedreportsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'advancedreports',
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
							var count = Ext.getStore('advancedreports').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('advancedreports').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('advancedreports').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('advancedreports').getAt(count).set('id',nextId+1);
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
				store: 'advancedreports'
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
				text: 'module',
				dataIndex: 'module',
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
				text: 'owner',
				dataIndex: 'owner',
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
				text: 'modified_user_id',
				dataIndex: 'modified_user_id',
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
				text: 'related_data',
				dataIndex: 'related_data',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'fields',
				dataIndex: 'fields',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'filters',
				dataIndex: 'filters',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'grouping',
				dataIndex: 'grouping',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'aggregates',
				dataIndex: 'aggregates',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'totalAggregates',
				dataIndex: 'totalAggregates',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'options',
				dataIndex: 'options',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'labels',
				dataIndex: 'labels',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'chart',
				dataIndex: 'chart',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'combinedfields',
				dataIndex: 'combinedfields',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'calcFields',
				dataIndex: 'calcFields',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'columnstate',
				dataIndex: 'columnstate',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'category_id',
				dataIndex: 'category_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'sequence',
				dataIndex: 'sequence',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'shared',
				dataIndex: 'shared',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'sharedlevel',
				dataIndex: 'sharedlevel',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'iscombined',
				dataIndex: 'iscombined',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'visible',
				dataIndex: 'visible',
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
							var count = Ext.getStore('advancedreports').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('advancedreports').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('advancedreports').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('advancedreports').getAt(count).set('id',nextId+1);
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
