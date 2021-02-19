/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Time: 2:44:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:24
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.usersFeeds', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'users-feeds.List',
		'users-feeds.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'users_feeds'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'usersFeedsList',
			selector: 'usersFeedsList'
		},
		{
			ref: 'usersFeedsAdd',
			selector: 'usersFeedsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'usersFeedsList > toolbar > button#add': {
				click: me.onUsersFeedsAddClick
			},
			'usersFeedsList':{
				removeRow: me.removeRow
			},
			'usersFeedsAdd > form > button#save': {
				click: me.onUsersFeedsAddSaveClick
			},
			'usersFeedsAdd > form > button#cancel': {
				click: me.onUsersFeedsAddCancelClick
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
	onUsersFeedsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUsersFeedsAdd().destroy();
		//</es-section>
	},
	onUsersFeedsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUsersFeedsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUsersFeedsList().getStore().add(rec);

			me.getUsersFeedsAdd().destroy();
		}
		//</es-section>
	},
	onUsersFeedsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('usersFeedsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.usersFeeds());
		//</es-section>
	}
});
