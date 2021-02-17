/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Time: 2:42:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.callsUsers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'calls-users.List',
		'calls-users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'calls_users'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'callsUsersList',
			selector: 'callsUsersList'
		},
		{
			ref: 'callsUsersAdd',
			selector: 'callsUsersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'callsUsersList > toolbar > button#add': {
				click: me.onCallsUsersAddClick
			},
			'callsUsersList':{
				removeRow: me.removeRow
			},
			'callsUsersAdd > form > button#save': {
				click: me.onCallsUsersAddSaveClick
			},
			'callsUsersAdd > form > button#cancel': {
				click: me.onCallsUsersAddCancelClick
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
	onCallsUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCallsUsersAdd().destroy();
		//</es-section>
	},
	onCallsUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCallsUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCallsUsersList().getStore().add(rec);

			me.getCallsUsersAdd().destroy();
		}
		//</es-section>
	},
	onCallsUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('callsUsersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.callsUsers());
		//</es-section>
	}
});
