/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:49 GMT-0400 (Bolivia Time)
 * Time: 4:43:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:49 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:49
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

var storePilatDictionariesParDictionaryWithDicCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-params/findPilatDictionariesParDictionaryWithDicCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'dic_code'],
	root: 'data',
	autoLoad: true
});

var storePilatParamsParStatusWithParOrder = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-params/findPilatParamsParStatusWithParOrder',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_order'],
	root: 'data',
	autoLoad: true
});

var storePilatParamsParParentWithParOrder = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-pilatsrl/pilat-params/findPilatParamsParParentWithParOrder',
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

Ext.define('es.view.pilat-params.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'pilatParamsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'pilat_params',
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
							var count = Ext.getStore('pilatParams').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatParams').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatParams').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatParams').getAt(count).set('id',nextId+1);
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
				store: 'pilatParams'
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
   			    text: 'par_order',
       			dataIndex: 'par_order',
       				width: 100,
       				editor: {
       				allowBlank: false
            	}
            },
            
			
			{
				text: 'par_cod',
				dataIndex: 'par_cod',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'par_description',
				dataIndex: 'par_description',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'par_abbr',
				dataIndex: 'par_abbr',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'par_group',
				dataIndex: 'par_group',
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
				text: 'par_dictionary_id',
				dataIndex: 'par_dictionary_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatDictionariesParDictionaryWithDicCode.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.dic_code;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storePilatDictionariesParDictionaryWithDicCode,
					valueField: "_id",
					displayField: "dic_code",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'par_status_id',
				dataIndex: 'par_status_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatParamsParStatusWithParOrder.data.items;
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
					store: storePilatParamsParStatusWithParOrder,
					valueField: "_id",
					displayField: "par_order",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'par_parent_id',
				dataIndex: 'par_parent_id',
				renderer: (val, metaData, r) => {
                	let items = storePilatParamsParParentWithParOrder.data.items;
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
					store: storePilatParamsParParentWithParOrder,
					valueField: "_id",
					displayField: "par_order",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			
			{
				text: 'duaAt',
				dataIndex: 'duaAt',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'duaAt',
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
							var count = Ext.getStore('pilatParams').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('pilatParams').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('pilatParams').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('pilatParams').getAt(count).set('id',nextId+1);
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
