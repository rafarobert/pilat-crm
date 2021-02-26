/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:29 GMT-0400 (Bolivia Time)
 * Time: 0:23:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:29 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:29
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

var storePilatParamsModParStatusWithParOrder = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-modules/findPilatParamsModParStatusWithParOrder',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_order'],
	root: 'data',
	autoLoad: true
});

var storePilatModulesModParentWithModCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-modules/findPilatModulesModParentWithModCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'mod_code'],
	root: 'data',
	autoLoad: true
});

//</es-section>

Ext.define('es.view.pilat-modules.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'pilatModulesList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'pilat_modules',
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
							var count = Ext.getStore('pilatModules').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatModules').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatModules').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatModules').getAt(count).set('id',nextId+1);
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
				store: 'pilatModules'
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
				text: 'mod_code',
				dataIndex: 'mod_code',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'mod_description',
				dataIndex: 'mod_description',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'mod_abbr',
				dataIndex: 'mod_abbr',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'mod_icon',
				dataIndex: 'mod_icon',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'mod_group',
				dataIndex: 'mod_group',
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
				text: 'id',
				dataIndex: 'id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			{
				text: 'mod_par_status_id',
				dataIndex: 'mod_par_status_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatParamsModParStatusWithParOrder.data.items;
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
					store: storePilatParamsModParStatusWithParOrder,
					valueField: "_id",
					displayField: "par_order",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'mod_parent_id',
				dataIndex: 'mod_parent_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatModulesModParentWithModCode.data.items;
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
					store: storePilatModulesModParentWithModCode,
					valueField: "_id",
					displayField: "mod_code",
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
							var count = Ext.getStore('pilatModules').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatModules').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatModules').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatModules').getAt(count).set('id',nextId+1);
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
