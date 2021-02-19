/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:17 GMT-0400 (Bolivia Time)
 * Time: 2:41:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aokKnowledgeBaseCategories', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aok-knowledge-base-categories.List',
		'aok-knowledge-base-categories.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aok_knowledge_base_categories'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aokKnowledgeBaseCategoriesList',
			selector: 'aokKnowledgeBaseCategoriesList'
		},
		{
			ref: 'aokKnowledgeBaseCategoriesAdd',
			selector: 'aokKnowledgeBaseCategoriesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aokKnowledgeBaseCategoriesList > toolbar > button#add': {
				click: me.onAokKnowledgeBaseCategoriesAddClick
			},
			'aokKnowledgeBaseCategoriesList':{
				removeRow: me.removeRow
			},
			'aokKnowledgeBaseCategoriesAdd > form > button#save': {
				click: me.onAokKnowledgeBaseCategoriesAddSaveClick
			},
			'aokKnowledgeBaseCategoriesAdd > form > button#cancel': {
				click: me.onAokKnowledgeBaseCategoriesAddCancelClick
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
	onAokKnowledgeBaseCategoriesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAokKnowledgeBaseCategoriesAdd().destroy();
		//</es-section>
	},
	onAokKnowledgeBaseCategoriesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAokKnowledgeBaseCategoriesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAokKnowledgeBaseCategoriesList().getStore().add(rec);

			me.getAokKnowledgeBaseCategoriesAdd().destroy();
		}
		//</es-section>
	},
	onAokKnowledgeBaseCategoriesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aokKnowledgeBaseCategoriesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aokKnowledgeBaseCategories());
		//</es-section>
	}
});
