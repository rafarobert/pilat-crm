/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:12 GMT-0400 (Bolivia Time)
 * Time: 2:43:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:12
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.meetingsContacts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'meetings-contacts.List',
		'meetings-contacts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'meetings_contacts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'meetingsContactsList',
			selector: 'meetingsContactsList'
		},
		{
			ref: 'meetingsContactsAdd',
			selector: 'meetingsContactsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'meetingsContactsList > toolbar > button#add': {
				click: me.onMeetingsContactsAddClick
			},
			'meetingsContactsList':{
				removeRow: me.removeRow
			},
			'meetingsContactsAdd > form > button#save': {
				click: me.onMeetingsContactsAddSaveClick
			},
			'meetingsContactsAdd > form > button#cancel': {
				click: me.onMeetingsContactsAddCancelClick
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
	onMeetingsContactsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getMeetingsContactsAdd().destroy();
		//</es-section>
	},
	onMeetingsContactsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getMeetingsContactsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getMeetingsContactsList().getStore().add(rec);

			me.getMeetingsContactsAdd().destroy();
		}
		//</es-section>
	},
	onMeetingsContactsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('meetingsContactsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.meetingsContacts());
		//</es-section>
	}
});
