/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:15 GMT-0400 (Bolivia Time)
 * Time: 2:41:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:15
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aokKnowledgebase', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aok-knowledgebase.List',
		'aok-knowledgebase.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aok_knowledgebase'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aokKnowledgebaseList',
			selector: 'aokKnowledgebaseList'
		},
		{
			ref: 'aokKnowledgebaseAdd',
			selector: 'aokKnowledgebaseAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aokKnowledgebaseList > toolbar > button#add': {
				click: me.onAokKnowledgebaseAddClick
			},
			'aokKnowledgebaseList':{
				removeRow: me.removeRow
			},
			'aokKnowledgebaseAdd > form > button#save': {
				click: me.onAokKnowledgebaseAddSaveClick
			},
			'aokKnowledgebaseAdd > form > button#cancel': {
				click: me.onAokKnowledgebaseAddCancelClick
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
	onAokKnowledgebaseAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAokKnowledgebaseAdd().destroy();
		//</es-section>
	},
	onAokKnowledgebaseAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAokKnowledgebaseAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAokKnowledgebaseList().getStore().add(rec);

			me.getAokKnowledgebaseAdd().destroy();
		}
		//</es-section>
	},
	onAokKnowledgebaseAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aokKnowledgebaseAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aokKnowledgebase());
		//</es-section>
	}
});
