/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:32 GMT-0400 (Bolivia Time)
 * Time: 2:41:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:32
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosContractsDocuments', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-contracts-documents.List',
		'aos-contracts-documents.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_contracts_documents'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosContractsDocumentsList',
			selector: 'aosContractsDocumentsList'
		},
		{
			ref: 'aosContractsDocumentsAdd',
			selector: 'aosContractsDocumentsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosContractsDocumentsList > toolbar > button#add': {
				click: me.onAosContractsDocumentsAddClick
			},
			'aosContractsDocumentsList':{
				removeRow: me.removeRow
			},
			'aosContractsDocumentsAdd > form > button#save': {
				click: me.onAosContractsDocumentsAddSaveClick
			},
			'aosContractsDocumentsAdd > form > button#cancel': {
				click: me.onAosContractsDocumentsAddCancelClick
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
	onAosContractsDocumentsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosContractsDocumentsAdd().destroy();
		//</es-section>
	},
	onAosContractsDocumentsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosContractsDocumentsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosContractsDocumentsList().getStore().add(rec);

			me.getAosContractsDocumentsAdd().destroy();
		}
		//</es-section>
	},
	onAosContractsDocumentsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosContractsDocumentsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosContractsDocuments());
		//</es-section>
	}
});
