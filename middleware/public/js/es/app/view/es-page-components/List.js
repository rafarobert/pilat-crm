/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:45 GMT-0400 (Bolivia Time)
 * Time: 14:11:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:45
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

var storeEsPagesPagWithPagCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-page-components/findEsPagesPagWithPagCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'pag_code'],
	root: 'data',
	autoLoad: true
});

var storeEsComponentsComWithComCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-page-components/findEsComponentsComWithComCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'com_code'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsPagComParStatusWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-page-components/findEsParamsPagComParStatusWithParCod',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_cod'],
	root: 'data',
	autoLoad: true
});

var storeEsUsersCreatedByWithUsrUsername = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-page-components/findEsUsersCreatedByWithUsrUsername',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'usr_username'],
	root: 'data',
	autoLoad: true
});

var storeEsUsersUpdatedByWithUsrUsername = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-page-components/findEsUsersUpdatedByWithUsrUsername',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'usr_username'],
	root: 'data',
	autoLoad: true
});

//</es-section>

Ext.define('es.view.es-page-components.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'esPageComponentsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'esPageComponents',
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
							var count = Ext.getStore('esPageComponents').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('esPageComponents').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('esPageComponents').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('esPageComponents').getAt(count).set('id',nextId+1);
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
				store: 'esPageComponents'
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
				text: 'pag_com_code',
				dataIndex: 'pag_com_code',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'pag_com_group',
				dataIndex: 'pag_com_group',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			{
				text: 'pag_id',
				dataIndex: 'pag_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsPagesPagWithPagCode.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.pag_code;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsPagesPagWithPagCode,
					valueField: "_id",
					displayField: "pag_code",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'com_id',
				dataIndex: 'com_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsComponentsComWithComCode.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.com_code;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsComponentsComWithComCode,
					valueField: "_id",
					displayField: "com_code",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'pag_com_par_status_id',
				dataIndex: 'pag_com_par_status_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsPagComParStatusWithParCod.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.par_cod;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsParamsPagComParStatusWithParCod,
					valueField: "_id",
					displayField: "par_cod",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'createdById',
				dataIndex: 'createdById',
				renderer: (val, metaData, r) => {
                	let items = storeEsUsersCreatedByWithUsrUsername.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.usr_username;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsUsersCreatedByWithUsrUsername,
					valueField: "_id",
					displayField: "usr_username",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'updatedById',
				dataIndex: 'updatedById',
				renderer: (val, metaData, r) => {
                	let items = storeEsUsersUpdatedByWithUsrUsername.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.usr_username;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsUsersUpdatedByWithUsrUsername,
					valueField: "_id",
					displayField: "usr_username",
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
							var count = Ext.getStore('esPageComponents').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('esPageComponents').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('esPageComponents').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('esPageComponents').getAt(count).set('id',nextId+1);
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
