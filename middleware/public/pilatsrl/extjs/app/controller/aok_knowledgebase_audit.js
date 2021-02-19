/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Time: 2:41:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:16
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aokKnowledgebaseAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aok-knowledgebase-audit.List',
		'aok-knowledgebase-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aok_knowledgebase_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aokKnowledgebaseAuditList',
			selector: 'aokKnowledgebaseAuditList'
		},
		{
			ref: 'aokKnowledgebaseAuditAdd',
			selector: 'aokKnowledgebaseAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aokKnowledgebaseAuditList > toolbar > button#add': {
				click: me.onAokKnowledgebaseAuditAddClick
			},
			'aokKnowledgebaseAuditList':{
				removeRow: me.removeRow
			},
			'aokKnowledgebaseAuditAdd > form > button#save': {
				click: me.onAokKnowledgebaseAuditAddSaveClick
			},
			'aokKnowledgebaseAuditAdd > form > button#cancel': {
				click: me.onAokKnowledgebaseAuditAddCancelClick
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
	onAokKnowledgebaseAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAokKnowledgebaseAuditAdd().destroy();
		//</es-section>
	},
	onAokKnowledgebaseAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAokKnowledgebaseAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAokKnowledgebaseAuditList().getStore().add(rec);

			me.getAokKnowledgebaseAuditAdd().destroy();
		}
		//</es-section>
	},
	onAokKnowledgebaseAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aokKnowledgebaseAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aokKnowledgebaseAudit());
		//</es-section>
	}
});
