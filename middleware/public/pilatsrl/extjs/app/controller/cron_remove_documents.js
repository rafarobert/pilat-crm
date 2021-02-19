/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:20 GMT-0400 (Bolivia Time)
 * Time: 2:42:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:20
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.cronRemoveDocuments', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'cron-remove-documents.List',
		'cron-remove-documents.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'cron_remove_documents'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'cronRemoveDocumentsList',
			selector: 'cronRemoveDocumentsList'
		},
		{
			ref: 'cronRemoveDocumentsAdd',
			selector: 'cronRemoveDocumentsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'cronRemoveDocumentsList > toolbar > button#add': {
				click: me.onCronRemoveDocumentsAddClick
			},
			'cronRemoveDocumentsList':{
				removeRow: me.removeRow
			},
			'cronRemoveDocumentsAdd > form > button#save': {
				click: me.onCronRemoveDocumentsAddSaveClick
			},
			'cronRemoveDocumentsAdd > form > button#cancel': {
				click: me.onCronRemoveDocumentsAddCancelClick
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
	onCronRemoveDocumentsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCronRemoveDocumentsAdd().destroy();
		//</es-section>
	},
	onCronRemoveDocumentsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCronRemoveDocumentsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCronRemoveDocumentsList().getStore().add(rec);

			me.getCronRemoveDocumentsAdd().destroy();
		}
		//</es-section>
	},
	onCronRemoveDocumentsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('cronRemoveDocumentsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.cronRemoveDocuments());
		//</es-section>
	}
});
