/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:13 GMT-0400 (Bolivia Time)
 * Time: 2:43:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:13 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:13
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.meetingsCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'meetings-cstm.List',
		'meetings-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'meetings_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'meetingsCstmList',
			selector: 'meetingsCstmList'
		},
		{
			ref: 'meetingsCstmAdd',
			selector: 'meetingsCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'meetingsCstmList > toolbar > button#add': {
				click: me.onMeetingsCstmAddClick
			},
			'meetingsCstmList':{
				removeRow: me.removeRow
			},
			'meetingsCstmAdd > form > button#save': {
				click: me.onMeetingsCstmAddSaveClick
			},
			'meetingsCstmAdd > form > button#cancel': {
				click: me.onMeetingsCstmAddCancelClick
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
	onMeetingsCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getMeetingsCstmAdd().destroy();
		//</es-section>
	},
	onMeetingsCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getMeetingsCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getMeetingsCstmList().getStore().add(rec);

			me.getMeetingsCstmAdd().destroy();
		}
		//</es-section>
	},
	onMeetingsCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('meetingsCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.meetingsCstm());
		//</es-section>
	}
});
