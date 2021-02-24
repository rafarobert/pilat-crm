/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:07 GMT-0400 (Bolivia Time)
 * Time: 2:43:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:7
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.leadsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'leads-audit.List',
		'leads-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'leads_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'leadsAuditList',
			selector: 'leadsAuditList'
		},
		{
			ref: 'leadsAuditAdd',
			selector: 'leadsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'leadsAuditList > toolbar > button#add': {
				click: me.onLeadsAuditAddClick
			},
			'leadsAuditList':{
				removeRow: me.removeRow
			},
			'leadsAuditAdd > form > button#save': {
				click: me.onLeadsAuditAddSaveClick
			},
			'leadsAuditAdd > form > button#cancel': {
				click: me.onLeadsAuditAddCancelClick
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
	onLeadsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getLeadsAuditAdd().destroy();
		//</es-section>
	},
	onLeadsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getLeadsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getLeadsAuditList().getStore().add(rec);

			me.getLeadsAuditAdd().destroy();
		}
		//</es-section>
	},
	onLeadsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('leadsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.leadsAudit());
		//</es-section>
	}
});
