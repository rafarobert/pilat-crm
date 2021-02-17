/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:25 GMT-0400 (Bolivia Time)
 * Time: 4:42:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:25 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:25
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.aos-quotes-cstm.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'aosQuotesCstmList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'aos_quotes_cstm',
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
							var count = Ext.getStore('aosQuotesCstm').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosQuotesCstm').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosQuotesCstm').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosQuotesCstm').getAt(count).set('id',nextId+1);
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
				store: 'aosQuotesCstm'
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
				text: 'ubicacion_c',
				dataIndex: 'ubicacion_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'lbl_tipoventa_c',
				dataIndex: 'lbl_tipoventa_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'term_years_c',
				dataIndex: 'term_years_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'tipo_pago_c',
				dataIndex: 'tipo_pago_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'link_terreno_c',
				dataIndex: 'link_terreno_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			{
				text: 'lbl_superficie_c',
				dataIndex: 'lbl_superficie_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'lbl_cuotainicial_c',
				dataIndex: 'lbl_cuotainicial_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'saldo_cuota_inical_c',
				dataIndex: 'saldo_cuota_inical_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'precio_mcuadrado_c',
				dataIndex: 'precio_mcuadrado_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'saldo_c',
				dataIndex: 'saldo_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'cuota_mensual_c',
				dataIndex: 'cuota_mensual_c',
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
				text: 'metro_cuadrado_c',
				dataIndex: 'metro_cuadrado_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'frente_metros_c',
				dataIndex: 'frente_metros_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'fondo_metros_c',
				dataIndex: 'fondo_metros_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'fecha_envio_programada_c',
				dataIndex: 'fecha_envio_programada_c',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'fecha_envio_programada_c',
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
							var count = Ext.getStore('aosQuotesCstm').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('aosQuotesCstm').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('aosQuotesCstm').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('aosQuotesCstm').getAt(count).set('id',nextId+1);
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
