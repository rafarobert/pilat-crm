/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:39 GMT-0400 (Bolivia Time)
 * Time: 14:11:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:39
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

var storeEsPeoplePerParentWithPerFirstName = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-people/findEsPeoplePerParentWithPerFirstName',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'per_first_name'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsPerParTypeDocWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-people/findEsParamsPerParTypeDocWithParCod',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_cod'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsPerParCityWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-people/findEsParamsPerParCityWithParCod',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_cod'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsPerParSexWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-people/findEsParamsPerParSexWithParCod',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_cod'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsPerParCountryWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-people/findEsParamsPerParCountryWithParCod',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_cod'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsPerParNacionalityWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-people/findEsParamsPerParNacionalityWithParCod',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_cod'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsPerParStatusWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-people/findEsParamsPerParStatusWithParCod',
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
		url : '/api-esvender/es-people/findEsUsersCreatedByWithUsrUsername',
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
		url : '/api-esvender/es-people/findEsUsersUpdatedByWithUsrUsername',
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

Ext.define('es.view.es-people.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'esPeopleList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'esPeople',
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
							var count = Ext.getStore('esPeople').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('esPeople').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('esPeople').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('esPeople').getAt(count).set('id',nextId+1);
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
				store: 'esPeople'
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
				text: 'per_first_name',
				dataIndex: 'per_first_name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_second_name',
				dataIndex: 'per_second_name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_first_lastname',
				dataIndex: 'per_first_lastname',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_second_lastname',
				dataIndex: 'per_second_lastname',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_license',
				dataIndex: 'per_license',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_license_comp',
				dataIndex: 'per_license_comp',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_home_address',
				dataIndex: 'per_home_address',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_mail',
				dataIndex: 'per_mail',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_home_phone',
				dataIndex: 'per_home_phone',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_cellphone',
				dataIndex: 'per_cellphone',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'per_group',
				dataIndex: 'per_group',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			{
				text: 'per_parent_id',
				dataIndex: 'per_parent_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsPeoplePerParentWithPerFirstName.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.per_first_name;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsPeoplePerParentWithPerFirstName,
					valueField: "_id",
					displayField: "per_first_name",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'per_par_type_doc_id',
				dataIndex: 'per_par_type_doc_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsPerParTypeDocWithParCod.data.items;
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
					store: storeEsParamsPerParTypeDocWithParCod,
					valueField: "_id",
					displayField: "par_cod",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'per_par_city_id',
				dataIndex: 'per_par_city_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsPerParCityWithParCod.data.items;
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
					store: storeEsParamsPerParCityWithParCod,
					valueField: "_id",
					displayField: "par_cod",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'per_par_sex_id',
				dataIndex: 'per_par_sex_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsPerParSexWithParCod.data.items;
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
					store: storeEsParamsPerParSexWithParCod,
					valueField: "_id",
					displayField: "par_cod",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'per_par_country_id',
				dataIndex: 'per_par_country_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsPerParCountryWithParCod.data.items;
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
					store: storeEsParamsPerParCountryWithParCod,
					valueField: "_id",
					displayField: "par_cod",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'per_par_nacionality_id',
				dataIndex: 'per_par_nacionality_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsPerParNacionalityWithParCod.data.items;
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
					store: storeEsParamsPerParNacionalityWithParCod,
					valueField: "_id",
					displayField: "par_cod",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'per_par_status_id',
				dataIndex: 'per_par_status_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsPerParStatusWithParCod.data.items;
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
					store: storeEsParamsPerParStatusWithParCod,
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
				text: 'per_birthday',
				dataIndex: 'per_birthday',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'per_birthday',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
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
							var count = Ext.getStore('esPeople').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('esPeople').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('esPeople').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('esPeople').getAt(count).set('id',nextId+1);
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
