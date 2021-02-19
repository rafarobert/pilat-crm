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

Ext.define('es.controller.aokKnowledgebaseCategories', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aok-knowledgebase-categories.List',
		'aok-knowledgebase-categories.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aok_knowledgebase_categories'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aokKnowledgebaseCategoriesList',
			selector: 'aokKnowledgebaseCategoriesList'
		},
		{
			ref: 'aokKnowledgebaseCategoriesAdd',
			selector: 'aokKnowledgebaseCategoriesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aokKnowledgebaseCategoriesList > toolbar > button#add': {
				click: me.onAokKnowledgebaseCategoriesAddClick
			},
			'aokKnowledgebaseCategoriesList':{
				removeRow: me.removeRow
			},
			'aokKnowledgebaseCategoriesAdd > form > button#save': {
				click: me.onAokKnowledgebaseCategoriesAddSaveClick
			},
			'aokKnowledgebaseCategoriesAdd > form > button#cancel': {
				click: me.onAokKnowledgebaseCategoriesAddCancelClick
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
	onAokKnowledgebaseCategoriesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAokKnowledgebaseCategoriesAdd().destroy();
		//</es-section>
	},
	onAokKnowledgebaseCategoriesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAokKnowledgebaseCategoriesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAokKnowledgebaseCategoriesList().getStore().add(rec);

			me.getAokKnowledgebaseCategoriesAdd().destroy();
		}
		//</es-section>
	},
	onAokKnowledgebaseCategoriesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aokKnowledgebaseCategoriesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aokKnowledgebaseCategories());
		//</es-section>
	}
});
