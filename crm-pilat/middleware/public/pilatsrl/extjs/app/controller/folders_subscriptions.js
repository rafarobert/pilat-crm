/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:43 GMT-0400 (Bolivia Time)
 * Time: 2:42:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:43 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:43
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.foldersSubscriptions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'folders-subscriptions.List',
		'folders-subscriptions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'folders_subscriptions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'foldersSubscriptionsList',
			selector: 'foldersSubscriptionsList'
		},
		{
			ref: 'foldersSubscriptionsAdd',
			selector: 'foldersSubscriptionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'foldersSubscriptionsList > toolbar > button#add': {
				click: me.onFoldersSubscriptionsAddClick
			},
			'foldersSubscriptionsList':{
				removeRow: me.removeRow
			},
			'foldersSubscriptionsAdd > form > button#save': {
				click: me.onFoldersSubscriptionsAddSaveClick
			},
			'foldersSubscriptionsAdd > form > button#cancel': {
				click: me.onFoldersSubscriptionsAddCancelClick
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
	onFoldersSubscriptionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFoldersSubscriptionsAdd().destroy();
		//</es-section>
	},
	onFoldersSubscriptionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFoldersSubscriptionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFoldersSubscriptionsList().getStore().add(rec);

			me.getFoldersSubscriptionsAdd().destroy();
		}
		//</es-section>
	},
	onFoldersSubscriptionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('foldersSubscriptionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.foldersSubscriptions());
		//</es-section>
	}
});
