/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:10:43 GMT-0400 (Bolivia Time)
 * Time: 14:10:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:10:43 GMT-0400 (Bolivia Time)
 * Last time updated: 14:10:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.oauth-nonce.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.oauthNonceAdd',
	id: 'oauth-nonce-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add OauthNonce',
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
					id:'oauth-nonce-form',
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
							fieldLabel: 'conskey',
							name: 'conskey',
						},
						
						{
							fieldLabel: 'nonce',
							name: 'nonce',
						},
						
						
          				{
     		        		fieldLabel: 'nonce_ts',
    						name: 'nonce_ts',
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
