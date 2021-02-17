/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:39 GMT-0400 (Bolivia Time)
 * Time: 2:42:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.erpClienteAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'erp-cliente-audit.List',
		'erp-cliente-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'erp_cliente_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'erpClienteAuditList',
			selector: 'erpClienteAuditList'
		},
		{
			ref: 'erpClienteAuditAdd',
			selector: 'erpClienteAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'erpClienteAuditList > toolbar > button#add': {
				click: me.onErpClienteAuditAddClick
			},
			'erpClienteAuditList':{
				removeRow: me.removeRow
			},
			'erpClienteAuditAdd > form > button#save': {
				click: me.onErpClienteAuditAddSaveClick
			},
			'erpClienteAuditAdd > form > button#cancel': {
				click: me.onErpClienteAuditAddCancelClick
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
	onErpClienteAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getErpClienteAuditAdd().destroy();
		//</es-section>
	},
	onErpClienteAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getErpClienteAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getErpClienteAuditList().getStore().add(rec);

			me.getErpClienteAuditAdd().destroy();
		}
		//</es-section>
	},
	onErpClienteAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('erpClienteAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.erpClienteAudit());
		//</es-section>
	}
});
