/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:26:35 GMT-0400 (Bolivia Time)
 * Time: 0:26:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:26:35 GMT-0400 (Bolivia Time)
 * Last time updated: 0:26:35
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.pilat-logs.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'pilatLogsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'pilat_logs',
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
							var count = Ext.getStore('pilatLogs').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatLogs').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatLogs').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatLogs').getAt(count).set('id',nextId+1);
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
				store: 'pilatLogs'
				//</es-section>
			}
		];

		this.columns = [

			//<es-section>
			
			{
				text: '_id',
				width: 160,
				dataIndex: '_id',
				hidden: false
			},
			
			
   			{
   			    text: 'id',
       			dataIndex: 'id',
       				width: 100,
       				editor: {
       				allowBlank: false
            	}
            },
            
			
			{
				text: 'action',
				dataIndex: 'action',
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
				text: 'module',
				dataIndex: 'module',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'user',
				dataIndex: 'user',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'source_id',
				dataIndex: 'source_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'module_id',
				dataIndex: 'module_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'createdBy',
				dataIndex: 'createdBy',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'updatedBy',
				dataIndex: 'updatedBy',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			
			
			
			
			
			
			
			{
				text: 'dueAt',
				dataIndex: 'dueAt',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'dueAt',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'createdAt',
				dataIndex: 'createdAt',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'createdAt',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'updatedAt',
				dataIndex: 'updatedAt',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'updatedAt',
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
							var count = Ext.getStore('pilatLogs').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatLogs').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatLogs').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatLogs').getAt(count).set('id',nextId+1);
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
