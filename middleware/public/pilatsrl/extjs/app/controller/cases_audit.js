/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:12 GMT-0400 (Bolivia Time)
 * Time: 2:42:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:12
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.casesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'cases-audit.List',
		'cases-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'cases_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'casesAuditList',
			selector: 'casesAuditList'
		},
		{
			ref: 'casesAuditAdd',
			selector: 'casesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'casesAuditList > toolbar > button#add': {
				click: me.onCasesAuditAddClick
			},
			'casesAuditList':{
				removeRow: me.removeRow
			},
			'casesAuditAdd > form > button#save': {
				click: me.onCasesAuditAddSaveClick
			},
			'casesAuditAdd > form > button#cancel': {
				click: me.onCasesAuditAddCancelClick
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
	onCasesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCasesAuditAdd().destroy();
		//</es-section>
	},
	onCasesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCasesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCasesAuditList().getStore().add(rec);

			me.getCasesAuditAdd().destroy();
		}
		//</es-section>
	},
	onCasesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('casesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.casesAudit());
		//</es-section>
	}
});
