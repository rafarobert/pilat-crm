/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Time: 2:44:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.securitygroupsRecords', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'securitygroups-records.List',
		'securitygroups-records.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'securitygroups_records'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'securitygroupsRecordsList',
			selector: 'securitygroupsRecordsList'
		},
		{
			ref: 'securitygroupsRecordsAdd',
			selector: 'securitygroupsRecordsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'securitygroupsRecordsList > toolbar > button#add': {
				click: me.onSecuritygroupsRecordsAddClick
			},
			'securitygroupsRecordsList':{
				removeRow: me.removeRow
			},
			'securitygroupsRecordsAdd > form > button#save': {
				click: me.onSecuritygroupsRecordsAddSaveClick
			},
			'securitygroupsRecordsAdd > form > button#cancel': {
				click: me.onSecuritygroupsRecordsAddCancelClick
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
	onSecuritygroupsRecordsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSecuritygroupsRecordsAdd().destroy();
		//</es-section>
	},
	onSecuritygroupsRecordsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSecuritygroupsRecordsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSecuritygroupsRecordsList().getStore().add(rec);

			me.getSecuritygroupsRecordsAdd().destroy();
		}
		//</es-section>
	},
	onSecuritygroupsRecordsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('securitygroupsRecordsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.securitygroupsRecords());
		//</es-section>
	}
});
