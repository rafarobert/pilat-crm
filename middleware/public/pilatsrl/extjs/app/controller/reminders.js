/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:57 GMT-0400 (Bolivia Time)
 * Time: 2:43:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:57
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.reminders', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'reminders.List',
		'reminders.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'reminders'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'remindersList',
			selector: 'remindersList'
		},
		{
			ref: 'remindersAdd',
			selector: 'remindersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'remindersList > toolbar > button#add': {
				click: me.onRemindersAddClick
			},
			'remindersList':{
				removeRow: me.removeRow
			},
			'remindersAdd > form > button#save': {
				click: me.onRemindersAddSaveClick
			},
			'remindersAdd > form > button#cancel': {
				click: me.onRemindersAddCancelClick
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
	onRemindersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getRemindersAdd().destroy();
		//</es-section>
	},
	onRemindersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getRemindersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getRemindersList().getStore().add(rec);

			me.getRemindersAdd().destroy();
		}
		//</es-section>
	},
	onRemindersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('remindersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.reminders());
		//</es-section>
	}
});
