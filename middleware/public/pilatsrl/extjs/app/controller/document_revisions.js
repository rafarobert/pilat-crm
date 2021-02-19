/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:26 GMT-0400 (Bolivia Time)
 * Time: 2:42:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:26
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.documentRevisions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'document-revisions.List',
		'document-revisions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'document_revisions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'documentRevisionsList',
			selector: 'documentRevisionsList'
		},
		{
			ref: 'documentRevisionsAdd',
			selector: 'documentRevisionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'documentRevisionsList > toolbar > button#add': {
				click: me.onDocumentRevisionsAddClick
			},
			'documentRevisionsList':{
				removeRow: me.removeRow
			},
			'documentRevisionsAdd > form > button#save': {
				click: me.onDocumentRevisionsAddSaveClick
			},
			'documentRevisionsAdd > form > button#cancel': {
				click: me.onDocumentRevisionsAddCancelClick
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
	onDocumentRevisionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getDocumentRevisionsAdd().destroy();
		//</es-section>
	},
	onDocumentRevisionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getDocumentRevisionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getDocumentRevisionsList().getStore().add(rec);

			me.getDocumentRevisionsAdd().destroy();
		}
		//</es-section>
	},
	onDocumentRevisionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('documentRevisionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.documentRevisions());
		//</es-section>
	}
});
