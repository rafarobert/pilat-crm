/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:14 GMT-0400 (Bolivia Time)
 * Time: 2:43:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:14
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.meetingsUsers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'meetings-users.List',
		'meetings-users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'meetings_users'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'meetingsUsersList',
			selector: 'meetingsUsersList'
		},
		{
			ref: 'meetingsUsersAdd',
			selector: 'meetingsUsersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'meetingsUsersList > toolbar > button#add': {
				click: me.onMeetingsUsersAddClick
			},
			'meetingsUsersList':{
				removeRow: me.removeRow
			},
			'meetingsUsersAdd > form > button#save': {
				click: me.onMeetingsUsersAddSaveClick
			},
			'meetingsUsersAdd > form > button#cancel': {
				click: me.onMeetingsUsersAddCancelClick
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
	onMeetingsUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getMeetingsUsersAdd().destroy();
		//</es-section>
	},
	onMeetingsUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getMeetingsUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getMeetingsUsersList().getStore().add(rec);

			me.getMeetingsUsersAdd().destroy();
		}
		//</es-section>
	},
	onMeetingsUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('meetingsUsersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.meetingsUsers());
		//</es-section>
	}
});
