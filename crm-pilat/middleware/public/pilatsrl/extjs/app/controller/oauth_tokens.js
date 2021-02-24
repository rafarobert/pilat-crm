/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Time: 2:43:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:22
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.oauthTokens', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'oauth-tokens.List',
		'oauth-tokens.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'oauth_tokens'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'oauthTokensList',
			selector: 'oauthTokensList'
		},
		{
			ref: 'oauthTokensAdd',
			selector: 'oauthTokensAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'oauthTokensList > toolbar > button#add': {
				click: me.onOauthTokensAddClick
			},
			'oauthTokensList':{
				removeRow: me.removeRow
			},
			'oauthTokensAdd > form > button#save': {
				click: me.onOauthTokensAddSaveClick
			},
			'oauthTokensAdd > form > button#cancel': {
				click: me.onOauthTokensAddCancelClick
			}
			//</es-section>
		});
	},
	removeRow: function(grid, rowIndex, colIndex){
		//<es-section>
		Ext.Msg.confirm('Confirm', 'Remove?', function(button) {
			if (button === 'yes') {
				grid.getStore().removeAt(rowIndex);
			}
		});
		//</es-section>
	},
	onOauthTokensAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOauthTokensAdd().destroy();
		//</es-section>
	},
	onOauthTokensAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOauthTokensAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOauthTokensList().getStore().add(rec);

			me.getOauthTokensAdd().destroy();
		}
		//</es-section>
	},
	onOauthTokensAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('oauthTokensAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.oauthTokens());
		//</es-section>
	}
});
