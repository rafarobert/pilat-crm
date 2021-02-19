/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 02:50:45 GMT-0400 (Bolivia Time)
 * Time: 2:50:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 02:50:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:50:45
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.general-log.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.generalLogAdd',
	id: 'general-log-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add GeneralLog',
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
					id:'general-log-form',
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
							fieldLabel: 'server_id',
							name: 'server_id',
						},
						
						
						{
							fieldLabel: 'command_type',
							name: 'command_type',
						},
						
						
						{
							fieldLabel: 'user_host',
							name: 'user_host',
						},
						
						{
							fieldLabel: 'argument',
							name: 'argument',
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
