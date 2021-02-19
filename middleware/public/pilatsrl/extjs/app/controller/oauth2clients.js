/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:17 GMT-0400 (Bolivia Time)
 * Time: 2:43:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.oauth2clients', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'oauth2clients.List',
		'oauth2clients.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'oauth2clients'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'oauth2clientsList',
			selector: 'oauth2clientsList'
		},
		{
			ref: 'oauth2clientsAdd',
			selector: 'oauth2clientsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'oauth2clientsList > toolbar > button#add': {
				click: me.onOauth2clientsAddClick
			},
			'oauth2clientsList':{
				removeRow: me.removeRow
			},
			'oauth2clientsAdd > form > button#save': {
				click: me.onOauth2clientsAddSaveClick
			},
			'oauth2clientsAdd > form > button#cancel': {
				click: me.onOauth2clientsAddCancelClick
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
	onOauth2clientsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOauth2clientsAdd().destroy();
		//</es-section>
	},
	onOauth2clientsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOauth2clientsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOauth2clientsList().getStore().add(rec);

			me.getOauth2clientsAdd().destroy();
		}
		//</es-section>
	},
	onOauth2clientsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('oauth2clientsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.oauth2clients());
		//</es-section>
	}
});
