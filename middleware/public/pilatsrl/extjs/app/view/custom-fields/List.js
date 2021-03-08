/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:54 GMT-0400 (Bolivia Time)
 * Time: 15:35:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:54 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:54
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.custom-fields.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'customFieldsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'custom_fields',
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
							var count = Ext.getStore('customFields').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('customFields').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('customFields').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('customFields').getAt(count).set('id',nextId+1);
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
				store: 'customFields'
				//</es-section>
			}
		];

		this.columns = [

			//<es-section>
			
			
			
			{
				text: 'bean_id',
				dataIndex: 'bean_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field0',
				dataIndex: 'field0',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field1',
				dataIndex: 'field1',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field2',
				dataIndex: 'field2',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field3',
				dataIndex: 'field3',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field4',
				dataIndex: 'field4',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field5',
				dataIndex: 'field5',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field6',
				dataIndex: 'field6',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field7',
				dataIndex: 'field7',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field8',
				dataIndex: 'field8',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'field9',
				dataIndex: 'field9',
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
				text: 'set_num',
				dataIndex: 'set_num',
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
							var count = Ext.getStore('customFields').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('customFields').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('customFields').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('customFields').getAt(count).set('id',nextId+1);
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
