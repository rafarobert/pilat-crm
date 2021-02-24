/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:26 GMT-0400 (Bolivia Time)
 * Time: 2:44:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:26
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.usersPasswordLink', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'users-password-link.List',
		'users-password-link.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'users_password_link'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'usersPasswordLinkList',
			selector: 'usersPasswordLinkList'
		},
		{
			ref: 'usersPasswordLinkAdd',
			selector: 'usersPasswordLinkAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'usersPasswordLinkList > toolbar > button#add': {
				click: me.onUsersPasswordLinkAddClick
			},
			'usersPasswordLinkList':{
				removeRow: me.removeRow
			},
			'usersPasswordLinkAdd > form > button#save': {
				click: me.onUsersPasswordLinkAddSaveClick
			},
			'usersPasswordLinkAdd > form > button#cancel': {
				click: me.onUsersPasswordLinkAddCancelClick
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
	onUsersPasswordLinkAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUsersPasswordLinkAdd().destroy();
		//</es-section>
	},
	onUsersPasswordLinkAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUsersPasswordLinkAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUsersPasswordLinkList().getStore().add(rec);

			me.getUsersPasswordLinkAdd().destroy();
		}
		//</es-section>
	},
	onUsersPasswordLinkAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('usersPasswordLinkAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.usersPasswordLink());
		//</es-section>
	}
});
