/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 14:00:22 GMT-0400 (Bolivia Time)
 * Time: 14:0:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 14:00:22 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:22
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.oauth-tokens.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.oauthTokensAdd',
	id: 'oauth-tokens-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add OauthToken',
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
					id:'oauth-tokens-form',
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
							fieldLabel: 'id',
							name: 'id',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
          				{
     		        		fieldLabel: 'token_ts',
    						name: 'token_ts',
     					},
                        
						
						
						
						{
							fieldLabel: 'secret',
							name: 'secret',
						},
						
						{
							fieldLabel: 'tstate',
							name: 'tstate',
						},
						
						{
							fieldLabel: 'verify',
							name: 'verify',
						},
						
						{
							fieldLabel: 'callback_url',
							name: 'callback_url',
						},
						
						
						
						
						{
							fieldLabel: 'consumer',
							name: 'consumer',
						},
						
						{
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
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
