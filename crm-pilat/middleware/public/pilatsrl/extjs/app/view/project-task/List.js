/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:24 GMT-0400 (Bolivia Time)
 * Time: 18:38:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:24 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:24
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.project-task.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'projectTaskList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'project_task',
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
							var count = Ext.getStore('projectTask').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('projectTask').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('projectTask').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('projectTask').getAt(count).set('id',nextId+1);
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
				store: 'projectTask'
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
				text: 'name',
				dataIndex: 'name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'status',
				dataIndex: 'status',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'relationship_type',
				dataIndex: 'relationship_type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'priority',
				dataIndex: 'priority',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			{
				text: 'description',
				dataIndex: 'description',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'predecessors',
				dataIndex: 'predecessors',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'duration_unit',
				dataIndex: 'duration_unit',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			{
				text: 'project_id',
				dataIndex: 'project_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'assigned_user_id',
				dataIndex: 'assigned_user_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'modified_user_id',
				dataIndex: 'modified_user_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'created_by',
				dataIndex: 'created_by',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'milestone_flag',
				dataIndex: 'milestone_flag',
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
				text: 'project_task_id',
				dataIndex: 'project_task_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'time_start',
				dataIndex: 'time_start',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'time_finish',
				dataIndex: 'time_finish',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'duration',
				dataIndex: 'duration',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'actual_duration',
				dataIndex: 'actual_duration',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'percent_complete',
				dataIndex: 'percent_complete',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'parent_task_id',
				dataIndex: 'parent_task_id',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'order_number',
				dataIndex: 'order_number',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'task_number',
				dataIndex: 'task_number',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'estimated_effort',
				dataIndex: 'estimated_effort',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'actual_effort',
				dataIndex: 'actual_effort',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'utilization',
				dataIndex: 'utilization',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			{
				text: 'date_entered',
				dataIndex: 'date_entered',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'date_entered',
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
			
			{
				text: 'date_start',
				dataIndex: 'date_start',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'date_start',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'date_finish',
				dataIndex: 'date_finish',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'date_finish',
					editable: true,
					format: 'yy/m/d H:i:s',
					//minValue: new Date(),
				}
			},
			
			{
				text: 'date_due',
				dataIndex: 'date_due',
				width: 160,
				hidden:false,
				editor: {
					xtype: 'datefield',
					value: 'date_due',
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
							var count = Ext.getStore('projectTask').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('projectTask').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('projectTask').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('projectTask').getAt(count).set('id',nextId+1);
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
