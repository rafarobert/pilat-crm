/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Time: 2:43:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:9
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.linkedDocuments', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'linked-documents.List',
		'linked-documents.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'linked_documents'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'linkedDocumentsList',
			selector: 'linkedDocumentsList'
		},
		{
			ref: 'linkedDocumentsAdd',
			selector: 'linkedDocumentsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'linkedDocumentsList > toolbar > button#add': {
				click: me.onLinkedDocumentsAddClick
			},
			'linkedDocumentsList':{
				removeRow: me.removeRow
			},
			'linkedDocumentsAdd > form > button#save': {
				click: me.onLinkedDocumentsAddSaveClick
			},
			'linkedDocumentsAdd > form > button#cancel': {
				click: me.onLinkedDocumentsAddCancelClick
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
	onLinkedDocumentsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getLinkedDocumentsAdd().destroy();
		//</es-section>
	},
	onLinkedDocumentsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getLinkedDocumentsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getLinkedDocumentsList().getStore().add(rec);

			me.getLinkedDocumentsAdd().destroy();
		}
		//</es-section>
	},
	onLinkedDocumentsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('linkedDocumentsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.linkedDocuments());
		//</es-section>
	}
});
