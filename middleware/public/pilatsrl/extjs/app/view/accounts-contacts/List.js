/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 12:59:34 GMT-0400 (Bolivia Time)
 * Time: 12:59:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 12:59:34 GMT-0400 (Bolivia Time)
 * Last time updated: 12:59:34
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.accounts-contacts.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'accountsContactsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'accounts_contacts',
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
							var count = Ext.getStore('accountsContacts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('accountsContacts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('accountsContacts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('accountsContacts').getAt(count).set('id',nextId+1);
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
				store: 'accountsContacts'
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
				text: 'contact_id',
				dataIndex: 'contact_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'account_id',
				dataIndex: 'account_id',
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
							var count = Ext.getStore('accountsContacts').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('accountsContacts').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('accountsContacts').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('accountsContacts').getAt(count).set('id',nextId+1);
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
