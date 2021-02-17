/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 02:51:17 GMT-0400 (Bolivia Time)
 * Time: 2:51:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 02:51:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:51:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.slow-log.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.slowLogAdd',
	id: 'slow-log-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add SlowLog',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'slow-log-form',
					bodyPadding: 20,
					title: '',
					defaults: { // defaults are applied to items, not the container
						allowBlank: false,
						allowOnlyWhitespace: false,
						msgTarget: 'side',
						xtype: 'textfield',
						anchor: '100%'
					},
					items: [
						//<es-section>
						
						
          				{
     		        		fieldLabel: 'thread_id',
    						name: 'thread_id',
     					},
                        
						
						
						{
							fieldLabel: 'rows_sent',
							name: 'rows_sent',
						},
						
						{
							fieldLabel: 'rows_examined',
							name: 'rows_examined',
						},
						
						{
							fieldLabel: 'last_insert_id',
							name: 'last_insert_id',
						},
						
						{
							fieldLabel: 'insert_id',
							name: 'insert_id',
						},
						
						{
							fieldLabel: 'server_id',
							name: 'server_id',
						},
						
						
						{
							fieldLabel: 'db',
							name: 'db',
						},
						
						
						{
							fieldLabel: 'user_host',
							name: 'user_host',
						},
						
						{
							fieldLabel: 'sql_text',
							name: 'sql_text',
						},
						
						
						
						
						
						
						
						//</es-section>
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'save',
							text: 'Save'
						},
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'cancel',
							text: 'Cancel'
						}
					]
				}
			]
		});

		me.callParent(arguments);
	},
});
