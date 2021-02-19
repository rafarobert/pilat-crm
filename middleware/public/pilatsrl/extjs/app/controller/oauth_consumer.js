/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:20 GMT-0400 (Bolivia Time)
 * Time: 2:43:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:20
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.oauthConsumer', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'oauth-consumer.List',
		'oauth-consumer.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'oauth_consumer'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'oauthConsumerList',
			selector: 'oauthConsumerList'
		},
		{
			ref: 'oauthConsumerAdd',
			selector: 'oauthConsumerAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'oauthConsumerList > toolbar > button#add': {
				click: me.onOauthConsumerAddClick
			},
			'oauthConsumerList':{
				removeRow: me.removeRow
			},
			'oauthConsumerAdd > form > button#save': {
				click: me.onOauthConsumerAddSaveClick
			},
			'oauthConsumerAdd > form > button#cancel': {
				click: me.onOauthConsumerAddCancelClick
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
	onOauthConsumerAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOauthConsumerAdd().destroy();
		//</es-section>
	},
	onOauthConsumerAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOauthConsumerAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOauthConsumerList().getStore().add(rec);

			me.getOauthConsumerAdd().destroy();
		}
		//</es-section>
	},
	onOauthConsumerAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('oauthConsumerAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.oauthConsumer());
		//</es-section>
	}
});
