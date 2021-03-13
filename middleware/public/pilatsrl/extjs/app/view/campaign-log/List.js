/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Mar 13 2021 00:25:39 GMT-0400 (Bolivia Time)
 * Time: 0:25:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Mar 13 2021 00:25:39 GMT-0400 (Bolivia Time)
 * Last time updated: 0:25:39
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.campaign-log.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'campaignLogList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'campaign_log',
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
							var count = Ext.getStore('campaignLog').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('campaignLog').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('campaignLog').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('campaignLog').getAt(count).set('id',nextId+1);
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
				store: 'campaignLog'
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
				text: 'target_tracker_key',
				dataIndex: 'target_tracker_key',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'target_id',
				dataIndex: 'target_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'target_type',
				dataIndex: 'target_type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'activity_type',
				dataIndex: 'activity_type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'related_id',
				dataIndex: 'related_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'related_type',
				dataIndex: 'related_type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'more_information',
				dataIndex: 'more_information',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			{
				text: 'campaign_id',
				dataIndex: 'campaign_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'list_id',
				dataIndex: 'list_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'marketing_id',
				dataIndex: 'marketing_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'archived',
				dataIndex: 'archived',
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
				text: 'hits',
				dataIndex: 'hits',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'activity_date',
				dataIndex: 'activity_date',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'activity_date',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
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
							var count = Ext.getStore('campaignLog').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('campaignLog').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('campaignLog').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('campaignLog').getAt(count).set('id',nextId+1);
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
