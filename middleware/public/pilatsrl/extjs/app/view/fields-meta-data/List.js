/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 13:59:52 GMT-0400 (Bolivia Time)
 * Time: 13:59:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 13:59:52 GMT-0400 (Bolivia Time)
 * Last time updated: 13:59:52
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.fields-meta-data.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'fieldsMetaDataList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'fields_meta_data',
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
							var count = Ext.getStore('fieldsMetaData').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('fieldsMetaData').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('fieldsMetaData').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('fieldsMetaData').getAt(count).set('id',nextId+1);
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
				store: 'fieldsMetaData'
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
				text: 'vname',
				dataIndex: 'vname',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'comments',
				dataIndex: 'comments',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'help',
				dataIndex: 'help',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'custom_module',
				dataIndex: 'custom_module',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'type',
				dataIndex: 'type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'default_value',
				dataIndex: 'default_value',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'importable',
				dataIndex: 'importable',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'ext1',
				dataIndex: 'ext1',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'ext2',
				dataIndex: 'ext2',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'ext3',
				dataIndex: 'ext3',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'ext4',
				dataIndex: 'ext4',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			
			{
				text: 'required',
				dataIndex: 'required',
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
				text: 'audited',
				dataIndex: 'audited',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'massupdate',
				dataIndex: 'massupdate',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'reportable',
				dataIndex: 'reportable',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'len',
				dataIndex: 'len',
				width: 160,
				editor: {
					allowBlank: false
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
							var count = Ext.getStore('fieldsMetaData').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('fieldsMetaData').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('fieldsMetaData').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('fieldsMetaData').getAt(count).set('id',nextId+1);
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