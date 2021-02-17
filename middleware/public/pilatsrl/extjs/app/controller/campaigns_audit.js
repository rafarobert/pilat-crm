/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:08 GMT-0400 (Bolivia Time)
 * Time: 2:42:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:8
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.campaignsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'campaigns-audit.List',
		'campaigns-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'campaigns_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'campaignsAuditList',
			selector: 'campaignsAuditList'
		},
		{
			ref: 'campaignsAuditAdd',
			selector: 'campaignsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'campaignsAuditList > toolbar > button#add': {
				click: me.onCampaignsAuditAddClick
			},
			'campaignsAuditList':{
				removeRow: me.removeRow
			},
			'campaignsAuditAdd > form > button#save': {
				click: me.onCampaignsAuditAddSaveClick
			},
			'campaignsAuditAdd > form > button#cancel': {
				click: me.onCampaignsAuditAddCancelClick
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
	onCampaignsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCampaignsAuditAdd().destroy();
		//</es-section>
	},
	onCampaignsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCampaignsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCampaignsAuditList().getStore().add(rec);

			me.getCampaignsAuditAdd().destroy();
		}
		//</es-section>
	},
	onCampaignsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('campaignsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.campaignsAudit());
		//</es-section>
	}
});
