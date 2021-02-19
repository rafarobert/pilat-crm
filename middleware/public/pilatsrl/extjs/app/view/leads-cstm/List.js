/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:46 GMT-0400 (Bolivia Time)
 * Time: 18:37:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:46 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:46
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.leads-cstm.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'leadsCstmList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'leads_cstm',
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
							var count = Ext.getStore('leadsCstm').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('leadsCstm').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('leadsCstm').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('leadsCstm').getAt(count).set('id',nextId+1);
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
				store: 'leadsCstm'
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
				text: 'extension_documento_c',
				dataIndex: 'extension_documento_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'genero_c',
				dataIndex: 'genero_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'etapas_c',
				dataIndex: 'etapas_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'numero_documento_c',
				dataIndex: 'numero_documento_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'sec_email_c',
				dataIndex: 'sec_email_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'nombre_empresa_c',
				dataIndex: 'nombre_empresa_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'nombre_contacto_c',
				dataIndex: 'nombre_contacto_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'nit_empresa_c',
				dataIndex: 'nit_empresa_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'email_empresa_c',
				dataIndex: 'email_empresa_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_mobil_2_c',
				dataIndex: 'phone_mobil_2_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'phone_mobil_3_c',
				dataIndex: 'phone_mobil_3_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'asesor_negocio_c',
				dataIndex: 'asesor_negocio_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'tipo_lead_c',
				dataIndex: 'tipo_lead_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'rubro_c',
				dataIndex: 'rubro_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'tipo_cliente_c',
				dataIndex: 'tipo_cliente_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'sexo_c',
				dataIndex: 'sexo_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'ciudad_c',
				dataIndex: 'ciudad_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'departamento_c',
				dataIndex: 'departamento_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'pais_c',
				dataIndex: 'pais_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'direccion_c',
				dataIndex: 'direccion_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'actividad_c',
				dataIndex: 'actividad_c',
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
				text: 'superficie_c',
				dataIndex: 'superficie_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'actividad_llamar_c',
				dataIndex: 'actividad_llamar_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'tiene_whatsapp_c',
				dataIndex: 'tiene_whatsapp_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'correo_principal_c',
				dataIndex: 'correo_principal_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'correo_alternativo_c',
				dataIndex: 'correo_alternativo_c',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			{
				text: 'actividad_llamar_fecha_c',
				dataIndex: 'actividad_llamar_fecha_c',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'actividad_llamar_fecha_c',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'fecha_validex_c',
				dataIndex: 'fecha_validex_c',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'fecha_validex_c',
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
							var count = Ext.getStore('leadsCstm').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('leadsCstm').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('leadsCstm').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('leadsCstm').getAt(count).set('id',nextId+1);
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
