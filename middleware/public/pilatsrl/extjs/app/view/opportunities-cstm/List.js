/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:42 GMT-0400 (Bolivia Time)
 * Time: 4:43:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:42 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:42
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.opportunities-cstm.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'opportunitiesCstmList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'opportunities_cstm',
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
							var count = Ext.getStore('opportunitiesCstm').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('opportunitiesCstm').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('opportunitiesCstm').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('opportunitiesCstm').getAt(count).set('id',nextId+1);
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
				store: 'opportunitiesCstm'
				//</es-section>
			}
		];

		this.columns = [

			//<es-section>
			
			{
				text: 'id_c',
				width: 160,
				dataIndex: 'id_c',
				hidden: false
			},
			
			
			
			{
				text: 'jjwg_maps_geocode_status_c',
				dataIndex: 'jjwg_maps_geocode_status_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'jjwg_maps_address_c',
				dataIndex: 'jjwg_maps_address_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'lbl_tipo_pago_c',
				dataIndex: 'lbl_tipo_pago_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'ubicacion_c',
				dataIndex: 'ubicacion_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'tipo_venta_c',
				dataIndex: 'tipo_venta_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'jjwg_maps_lng_c',
				dataIndex: 'jjwg_maps_lng_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'jjwg_maps_lat_c',
				dataIndex: 'jjwg_maps_lat_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'unidad_industrial_c',
				dataIndex: 'unidad_industrial_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'manzano_c',
				dataIndex: 'manzano_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'superficie_c',
				dataIndex: 'superficie_c',
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
							var count = Ext.getStore('opportunitiesCstm').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('opportunitiesCstm').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('opportunitiesCstm').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('opportunitiesCstm').getAt(count).set('id',nextId+1);
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
