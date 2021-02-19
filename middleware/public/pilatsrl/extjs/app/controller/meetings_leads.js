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

Ext.define('es.controller.meetingsLeads', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'meetings-leads.List',
		'meetings-leads.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'meetings_leads'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'meetingsLeadsList',
			selector: 'meetingsLeadsList'
		},
		{
			ref: 'meetingsLeadsAdd',
			selector: 'meetingsLeadsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'meetingsLeadsList > toolbar > button#add': {
				click: me.onMeetingsLeadsAddClick
			},
			'meetingsLeadsList':{
				removeRow: me.removeRow
			},
			'meetingsLeadsAdd > form > button#save': {
				click: me.onMeetingsLeadsAddSaveClick
			},
			'meetingsLeadsAdd > form > button#cancel': {
				click: me.onMeetingsLeadsAddCancelClick
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
	onMeetingsLeadsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getMeetingsLeadsAdd().destroy();
		//</es-section>
	},
	onMeetingsLeadsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getMeetingsLeadsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getMeetingsLeadsList().getStore().add(rec);

			me.getMeetingsLeadsAdd().destroy();
		}
		//</es-section>
	},
	onMeetingsLeadsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('meetingsLeadsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.meetingsLeads());
		//</es-section>
	}
});
