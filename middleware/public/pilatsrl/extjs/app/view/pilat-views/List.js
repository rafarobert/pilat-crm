/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:10:53 GMT-0400 (Bolivia Time)
 * Time: 14:10:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:10:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:10:53
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

var storePilatModulesVieModuleWithModCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-views/findPilatModulesVieModuleWithModCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'mod_code'],
	root: 'data',
	autoLoad: true
});

var storePilatViewsVieReturnWithVieCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-views/findPilatViewsVieReturnWithVieCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'vie_code'],
	root: 'data',
	autoLoad: true
});

var storePilatParamsVieParStatusWithParOrder = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-views/findPilatParamsVieParStatusWithParOrder',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_order'],
	root: 'data',
	autoLoad: true
});

//</es-section>

Ext.define('es.view.pilat-views.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'pilatViewsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'pilat_views',
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
							var count = Ext.getStore('pilatViews').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatViews').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatViews').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatViews').getAt(count).set('id',nextId+1);
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
				store: 'pilatViews'
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
				text: 'vie_code',
				dataIndex: 'vie_code',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'vie_description',
				dataIndex: 'vie_description',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'vie_route',
				dataIndex: 'vie_route',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'vie_params',
				dataIndex: 'vie_params',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'vie_icon',
				dataIndex: 'vie_icon',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'vie_group',
				dataIndex: 'vie_group',
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
				text: 'vie_module_id',
				dataIndex: 'vie_module_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatModulesVieModuleWithModCode.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.mod_code;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storePilatModulesVieModuleWithModCode,
					valueField: "_id",
					displayField: "mod_code",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'vie_return_id',
				dataIndex: 'vie_return_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatViewsVieReturnWithVieCode.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.vie_code;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storePilatViewsVieReturnWithVieCode,
					valueField: "_id",
					displayField: "vie_code",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'vie_par_status_id',
				dataIndex: 'vie_par_status_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatParamsVieParStatusWithParOrder.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.par_order;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storePilatParamsVieParStatusWithParOrder,
					valueField: "_id",
					displayField: "par_order",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
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
							var count = Ext.getStore('pilatViews').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatViews').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatViews').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatViews').getAt(count).set('id',nextId+1);
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
