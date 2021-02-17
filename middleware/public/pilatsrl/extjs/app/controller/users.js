/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:23 GMT-0400 (Bolivia Time)
 * Time: 2:44:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:23 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:23
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.users', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'users.List',
		'users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'users'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'usersList',
			selector: 'usersList'
		},
		{
			ref: 'usersAdd',
			selector: 'usersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'usersList > toolbar > button#add': {
				click: me.onUsersAddClick
			},
			'usersList':{
				removeRow: me.removeRow
			},
			'usersAdd > form > button#save': {
				click: me.onUsersAddSaveClick
			},
			'usersAdd > form > button#cancel': {
				click: me.onUsersAddCancelClick
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
	onUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUsersAdd().destroy();
		//</es-section>
	},
	onUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUsersList().getStore().add(rec);

			me.getUsersAdd().destroy();
		}
		//</es-section>
	},
	onUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('usersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.users());
		//</es-section>
	}
});
