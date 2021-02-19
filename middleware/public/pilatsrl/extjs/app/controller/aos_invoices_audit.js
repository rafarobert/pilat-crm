/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:35 GMT-0400 (Bolivia Time)
 * Time: 2:41:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosInvoicesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-invoices-audit.List',
		'aos-invoices-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_invoices_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosInvoicesAuditList',
			selector: 'aosInvoicesAuditList'
		},
		{
			ref: 'aosInvoicesAuditAdd',
			selector: 'aosInvoicesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosInvoicesAuditList > toolbar > button#add': {
				click: me.onAosInvoicesAuditAddClick
			},
			'aosInvoicesAuditList':{
				removeRow: me.removeRow
			},
			'aosInvoicesAuditAdd > form > button#save': {
				click: me.onAosInvoicesAuditAddSaveClick
			},
			'aosInvoicesAuditAdd > form > button#cancel': {
				click: me.onAosInvoicesAuditAddCancelClick
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
	onAosInvoicesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosInvoicesAuditAdd().destroy();
		//</es-section>
	},
	onAosInvoicesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosInvoicesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosInvoicesAuditList().getStore().add(rec);

			me.getAosInvoicesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAosInvoicesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosInvoicesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosInvoicesAudit());
		//</es-section>
	}
});
