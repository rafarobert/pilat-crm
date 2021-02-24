/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:21 GMT-0400 (Bolivia Time)
 * Time: 2:43:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:21
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.oauthNonce', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'oauth-nonce.List',
		'oauth-nonce.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'oauth_nonce'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'oauthNonceList',
			selector: 'oauthNonceList'
		},
		{
			ref: 'oauthNonceAdd',
			selector: 'oauthNonceAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'oauthNonceList > toolbar > button#add': {
				click: me.onOauthNonceAddClick
			},
			'oauthNonceList':{
				removeRow: me.removeRow
			},
			'oauthNonceAdd > form > button#save': {
				click: me.onOauthNonceAddSaveClick
			},
			'oauthNonceAdd > form > button#cancel': {
				click: me.onOauthNonceAddCancelClick
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
	onOauthNonceAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOauthNonceAdd().destroy();
		//</es-section>
	},
	onOauthNonceAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOauthNonceAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOauthNonceList().getStore().add(rec);

			me.getOauthNonceAdd().destroy();
		}
		//</es-section>
	},
	onOauthNonceAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('oauthNonceAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.oauthNonce());
		//</es-section>
	}
});
