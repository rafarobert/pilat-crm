/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Time: 2:44:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:4
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.securitygroupsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'securitygroups-audit.List',
		'securitygroups-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'securitygroups_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'securitygroupsAuditList',
			selector: 'securitygroupsAuditList'
		},
		{
			ref: 'securitygroupsAuditAdd',
			selector: 'securitygroupsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'securitygroupsAuditList > toolbar > button#add': {
				click: me.onSecuritygroupsAuditAddClick
			},
			'securitygroupsAuditList':{
				removeRow: me.removeRow
			},
			'securitygroupsAuditAdd > form > button#save': {
				click: me.onSecuritygroupsAuditAddSaveClick
			},
			'securitygroupsAuditAdd > form > button#cancel': {
				click: me.onSecuritygroupsAuditAddCancelClick
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
	onSecuritygroupsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSecuritygroupsAuditAdd().destroy();
		//</es-section>
	},
	onSecuritygroupsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSecuritygroupsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSecuritygroupsAuditList().getStore().add(rec);

			me.getSecuritygroupsAuditAdd().destroy();
		}
		//</es-section>
	},
	onSecuritygroupsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('securitygroupsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.securitygroupsAudit());
		//</es-section>
	}
});
