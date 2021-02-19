/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:18 GMT-0400 (Bolivia Time)
 * Time: 2:43:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:18
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.oauth2tokens', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'oauth2tokens.List',
		'oauth2tokens.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'oauth2tokens'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'oauth2tokensList',
			selector: 'oauth2tokensList'
		},
		{
			ref: 'oauth2tokensAdd',
			selector: 'oauth2tokensAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'oauth2tokensList > toolbar > button#add': {
				click: me.onOauth2tokensAddClick
			},
			'oauth2tokensList':{
				removeRow: me.removeRow
			},
			'oauth2tokensAdd > form > button#save': {
				click: me.onOauth2tokensAddSaveClick
			},
			'oauth2tokensAdd > form > button#cancel': {
				click: me.onOauth2tokensAddCancelClick
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
	onOauth2tokensAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOauth2tokensAdd().destroy();
		//</es-section>
	},
	onOauth2tokensAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOauth2tokensAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOauth2tokensList().getStore().add(rec);

			me.getOauth2tokensAdd().destroy();
		}
		//</es-section>
	},
	onOauth2tokensAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('oauth2tokensAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.oauth2tokens());
		//</es-section>
	}
});
