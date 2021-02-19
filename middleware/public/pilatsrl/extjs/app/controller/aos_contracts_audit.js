/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:31 GMT-0400 (Bolivia Time)
 * Time: 2:41:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:31
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosContractsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-contracts-audit.List',
		'aos-contracts-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_contracts_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosContractsAuditList',
			selector: 'aosContractsAuditList'
		},
		{
			ref: 'aosContractsAuditAdd',
			selector: 'aosContractsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosContractsAuditList > toolbar > button#add': {
				click: me.onAosContractsAuditAddClick
			},
			'aosContractsAuditList':{
				removeRow: me.removeRow
			},
			'aosContractsAuditAdd > form > button#save': {
				click: me.onAosContractsAuditAddSaveClick
			},
			'aosContractsAuditAdd > form > button#cancel': {
				click: me.onAosContractsAuditAddCancelClick
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
	onAosContractsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosContractsAuditAdd().destroy();
		//</es-section>
	},
	onAosContractsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosContractsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosContractsAuditList().getStore().add(rec);

			me.getAosContractsAuditAdd().destroy();
		}
		//</es-section>
	},
	onAosContractsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosContractsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosContractsAudit());
		//</es-section>
	}
});
