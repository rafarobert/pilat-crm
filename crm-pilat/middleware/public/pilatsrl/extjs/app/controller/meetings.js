/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:11 GMT-0400 (Bolivia Time)
 * Time: 2:43:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:11 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:11
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.meetings', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'meetings.List',
		'meetings.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'meetings'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'meetingsList',
			selector: 'meetingsList'
		},
		{
			ref: 'meetingsAdd',
			selector: 'meetingsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'meetingsList > toolbar > button#add': {
				click: me.onMeetingsAddClick
			},
			'meetingsList':{
				removeRow: me.removeRow
			},
			'meetingsAdd > form > button#save': {
				click: me.onMeetingsAddSaveClick
			},
			'meetingsAdd > form > button#cancel': {
				click: me.onMeetingsAddCancelClick
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
	onMeetingsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getMeetingsAdd().destroy();
		//</es-section>
	},
	onMeetingsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getMeetingsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getMeetingsList().getStore().add(rec);

			me.getMeetingsAdd().destroy();
		}
		//</es-section>
	},
	onMeetingsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('meetingsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.meetings());
		//</es-section>
	}
});
