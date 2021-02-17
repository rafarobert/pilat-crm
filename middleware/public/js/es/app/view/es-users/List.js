/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 14:11:40 GMT-0400 (Bolivia Time)
 * Time: 14:11:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 14:11:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:40
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

var storeEsParamsUsrParAuthStrategyWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-users/findEsParamsUsrParAuthStrategyWithParCod',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'par_cod'],
	root: 'data',
	autoLoad: true
});

var storeEsRolesUsrRolWithRolCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-users/findEsRolesUsrRolWithRolCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'rol_code'],
	root: 'data',
	autoLoad: true
});

var storeEsModulesUsrModWithModCode = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-users/findEsModulesUsrModWithModCode',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'mod_code'],
	root: 'data',
	autoLoad: true
});

var storeEsPeopleUsrPersonWithPerFirstName = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-users/findEsPeopleUsrPersonWithPerFirstName',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'per_first_name'],
	root: 'data',
	autoLoad: true
});

var storeEsFilesUsrFilImgWithFilRute = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-users/findEsFilesUsrFilImgWithFilRute',
		reader: {
			type: 'json',
			root: 'data'
		},
	},
	fields: ['_id', 'fil_rute'],
	root: 'data',
	autoLoad: true
});

var storeEsParamsUsrParStatusWithParCod = new Ext.data.JsonStore({
	proxy: {
		type: 'ajax',
		url : '/api-esvender/es-users/findEsParamsUsrParStatusWithParCod',
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
		url : '/api-esvender/es-users/findEsUsersCreatedByWithUsrUsername',
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
		url : '/api-esvender/es-users/findEsUsersUpdatedByWithUsrUsername',
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

Ext.define('es.view.es-users.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'esUsersList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'esUsers',
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
							var count = Ext.getStore('esUsers').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('esUsers').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('esUsers').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('esUsers').getAt(count).set('id',nextId+1);
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
				store: 'esUsers'
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
				text: 'usr_id',
				dataIndex: 'usr_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'usr_username',
				dataIndex: 'usr_username',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'usr_password',
				dataIndex: 'usr_password',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'usr_mail',
				dataIndex: 'usr_mail',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'usr_token',
				dataIndex: 'usr_token',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'usr_name',
				dataIndex: 'usr_name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'usr_lastname',
				dataIndex: 'usr_lastname',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'usr_group',
				dataIndex: 'usr_group',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			{
				text: 'usr_pwd_change',
				dataIndex: 'usr_pwd_change',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'usr_accept_terms',
				dataIndex: 'usr_accept_terms',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'usr_accept_terms',
				dataIndex: 'usr_accept_terms',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'usr_par_auth_strategy_id',
				dataIndex: 'usr_par_auth_strategy_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsUsrParAuthStrategyWithParCod.data.items;
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
					store: storeEsParamsUsrParAuthStrategyWithParCod,
					valueField: "_id",
					displayField: "par_cod",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'usr_rol_id',
				dataIndex: 'usr_rol_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsRolesUsrRolWithRolCode.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.rol_code;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsRolesUsrRolWithRolCode,
					valueField: "_id",
					displayField: "rol_code",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'usr_mod_id',
				dataIndex: 'usr_mod_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsModulesUsrModWithModCode.data.items;
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
					store: storeEsModulesUsrModWithModCode,
					valueField: "_id",
					displayField: "mod_code",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'usr_person_id',
				dataIndex: 'usr_person_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsPeopleUsrPersonWithPerFirstName.data.items;
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
					store: storeEsPeopleUsrPersonWithPerFirstName,
					valueField: "_id",
					displayField: "per_first_name",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'usr_fil_img_id',
				dataIndex: 'usr_fil_img_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsFilesUsrFilImgWithFilRute.data.items;
                	let label;
                	for (let i = 0 ; i < items.length ; i++) {
                		let item = items[i];
                		if(item.raw._id == val) {
                			label = item.raw.fil_rute;
                		}
                	}
                	return label;
                },
				width: 160,
				editor:  new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: storeEsFilesUsrFilImgWithFilRute,
					valueField: "_id",
					displayField: "fil_rute",
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			},
			
			{
				text: 'usr_par_status_id',
				dataIndex: 'usr_par_status_id',
				renderer: (val, metaData, r) => {
                	let items = storeEsParamsUsrParStatusWithParCod.data.items;
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
					store: storeEsParamsUsrParStatusWithParCod,
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
				text: 'usr_last_login',
				dataIndex: 'usr_last_login',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'usr_last_login',
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
							var count = Ext.getStore('esUsers').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('esUsers').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('esUsers').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('esUsers').getAt(count).set('id',nextId+1);
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
