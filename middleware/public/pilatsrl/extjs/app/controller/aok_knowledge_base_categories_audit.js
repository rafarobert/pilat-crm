/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Time: 2:41:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:18
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aokKnowledgeBaseCategoriesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aok-knowledge-base-categories-audit.List',
		'aok-knowledge-base-categories-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aok_knowledge_base_categories_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aokKnowledgeBaseCategoriesAuditList',
			selector: 'aokKnowledgeBaseCategoriesAuditList'
		},
		{
			ref: 'aokKnowledgeBaseCategoriesAuditAdd',
			selector: 'aokKnowledgeBaseCategoriesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aokKnowledgeBaseCategoriesAuditList > toolbar > button#add': {
				click: me.onAokKnowledgeBaseCategoriesAuditAddClick
			},
			'aokKnowledgeBaseCategoriesAuditList':{
				removeRow: me.removeRow
			},
			'aokKnowledgeBaseCategoriesAuditAdd > form > button#save': {
				click: me.onAokKnowledgeBaseCategoriesAuditAddSaveClick
			},
			'aokKnowledgeBaseCategoriesAuditAdd > form > button#cancel': {
				click: me.onAokKnowledgeBaseCategoriesAuditAddCancelClick
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
	onAokKnowledgeBaseCategoriesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAokKnowledgeBaseCategoriesAuditAdd().destroy();
		//</es-section>
	},
	onAokKnowledgeBaseCategoriesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAokKnowledgeBaseCategoriesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAokKnowledgeBaseCategoriesAuditList().getStore().add(rec);

			me.getAokKnowledgeBaseCategoriesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAokKnowledgeBaseCategoriesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aokKnowledgeBaseCategoriesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aokKnowledgeBaseCategoriesAudit());
		//</es-section>
	}
});
