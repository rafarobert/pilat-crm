/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:33 GMT-0400 (Bolivia Time)
 * Time: 2:43:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:33
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.outboundEmailAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'outbound-email-audit.List',
		'outbound-email-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'outbound_email_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'outboundEmailAuditList',
			selector: 'outboundEmailAuditList'
		},
		{
			ref: 'outboundEmailAuditAdd',
			selector: 'outboundEmailAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'outboundEmailAuditList > toolbar > button#add': {
				click: me.onOutboundEmailAuditAddClick
			},
			'outboundEmailAuditList':{
				removeRow: me.removeRow
			},
			'outboundEmailAuditAdd > form > button#save': {
				click: me.onOutboundEmailAuditAddSaveClick
			},
			'outboundEmailAuditAdd > form > button#cancel': {
				click: me.onOutboundEmailAuditAddCancelClick
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
	onOutboundEmailAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOutboundEmailAuditAdd().destroy();
		//</es-section>
	},
	onOutboundEmailAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOutboundEmailAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOutboundEmailAuditList().getStore().add(rec);

			me.getOutboundEmailAuditAdd().destroy();
		}
		//</es-section>
	},
	onOutboundEmailAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('outboundEmailAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.outboundEmailAudit());
		//</es-section>
	}
});
