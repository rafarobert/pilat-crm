/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:58 GMT-0400 (Bolivia Time)
 * Time: 2:43:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:58
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.remindersInvitees', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'reminders-invitees.List',
		'reminders-invitees.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'reminders_invitees'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'remindersInviteesList',
			selector: 'remindersInviteesList'
		},
		{
			ref: 'remindersInviteesAdd',
			selector: 'remindersInviteesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'remindersInviteesList > toolbar > button#add': {
				click: me.onRemindersInviteesAddClick
			},
			'remindersInviteesList':{
				removeRow: me.removeRow
			},
			'remindersInviteesAdd > form > button#save': {
				click: me.onRemindersInviteesAddSaveClick
			},
			'remindersInviteesAdd > form > button#cancel': {
				click: me.onRemindersInviteesAddCancelClick
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
	onRemindersInviteesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getRemindersInviteesAdd().destroy();
		//</es-section>
	},
	onRemindersInviteesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getRemindersInviteesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getRemindersInviteesList().getStore().add(rec);

			me.getRemindersInviteesAdd().destroy();
		}
		//</es-section>
	},
	onRemindersInviteesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('remindersInviteesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.remindersInvitees());
		//</es-section>
	}
});
