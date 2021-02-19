/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:22 GMT-0400 (Bolivia Time)
 * Time: 2:42:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:22
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.documents', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'documents.List',
		'documents.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'documents'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'documentsList',
			selector: 'documentsList'
		},
		{
			ref: 'documentsAdd',
			selector: 'documentsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'documentsList > toolbar > button#add': {
				click: me.onDocumentsAddClick
			},
			'documentsList':{
				removeRow: me.removeRow
			},
			'documentsAdd > form > button#save': {
				click: me.onDocumentsAddSaveClick
			},
			'documentsAdd > form > button#cancel': {
				click: me.onDocumentsAddCancelClick
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
	onDocumentsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getDocumentsAdd().destroy();
		//</es-section>
	},
	onDocumentsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getDocumentsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getDocumentsList().getStore().add(rec);

			me.getDocumentsAdd().destroy();
		}
		//</es-section>
	},
	onDocumentsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('documentsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.documents());
		//</es-section>
	}
});
