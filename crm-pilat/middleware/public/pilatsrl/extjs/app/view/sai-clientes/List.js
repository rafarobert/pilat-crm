/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:38 GMT-0400 (Bolivia Time)
 * Time: 18:38:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:38 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:38
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.sai-clientes.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'saiClientesList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'sai_clientes',
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
							var count = Ext.getStore('saiClientes').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('saiClientes').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('saiClientes').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('saiClientes').getAt(count).set('id',nextId+1);
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
				store: 'saiClientes'
				//</es-section>
			}
		];

		this.columns = [

			//<es-section>
			
			{
				text: 'gbagecage',
				width: 160,
				dataIndex: 'gbagecage',
				hidden: false
			},
			
			
   			{
   			    text: 'ilsupcage',
       			dataIndex: 'ilsupcage',
       				width: 100,
       				editor: {
       				allowBlank: false
            	}
            },
            
			
			{
				text: 'gbagesexo',
				dataIndex: 'gbagesexo',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbagenruc',
				dataIndex: 'gbagenruc',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbagendid',
				dataIndex: 'gbagendid',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbagecorg',
				dataIndex: 'gbagecorg',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbageappa',
				dataIndex: 'gbageappa',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbageapma',
				dataIndex: 'gbageapma',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'prefijo',
				dataIndex: 'prefijo',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbageapca',
				dataIndex: 'gbageapca',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbagenoms',
				dataIndex: 'gbagenoms',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbagenomb',
				dataIndex: 'gbagenomb',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbtlfntl1',
				dataIndex: 'gbtlfntl1',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbtlfntl2',
				dataIndex: 'gbtlfntl2',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbtlfntl3',
				dataIndex: 'gbtlfntl3',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbtlfntl4',
				dataIndex: 'gbtlfntl4',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbtlfntl5',
				dataIndex: 'gbtlfntl5',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbtlfntl6',
				dataIndex: 'gbtlfntl6',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbpaidesc',
				dataIndex: 'gbpaidesc',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbdptdesc',
				dataIndex: 'gbdptdesc',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbciudesc',
				dataIndex: 'gbciudesc',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbdirdire',
				dataIndex: 'gbdirdire',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'gbemamail',
				dataIndex: 'gbemamail',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			
			
			
			{
				text: 'gbagetper',
				dataIndex: 'gbagetper',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'gbagefnac',
				dataIndex: 'gbagefnac',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'gbagefnac',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'gbagefreg',
				dataIndex: 'gbagefreg',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'gbagefreg',
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
							var count = Ext.getStore('saiClientes').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('saiClientes').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('saiClientes').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('saiClientes').getAt(count).set('id',nextId+1);
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
