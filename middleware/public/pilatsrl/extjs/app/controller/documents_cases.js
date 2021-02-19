/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:25 GMT-0400 (Bolivia Time)
 * Time: 2:42:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:25
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.documentsCases', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'documents-cases.List',
		'documents-cases.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'documents_cases'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'documentsCasesList',
			selector: 'documentsCasesList'
		},
		{
			ref: 'documentsCasesAdd',
			selector: 'documentsCasesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'documentsCasesList > toolbar > button#add': {
				click: me.onDocumentsCasesAddClick
			},
			'documentsCasesList':{
				removeRow: me.removeRow
			},
			'documentsCasesAdd > form > button#save': {
				click: me.onDocumentsCasesAddSaveClick
			},
			'documentsCasesAdd > form > button#cancel': {
				click: me.onDocumentsCasesAddCancelClick
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
	onDocumentsCasesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getDocumentsCasesAdd().destroy();
		//</es-section>
	},
	onDocumentsCasesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getDocumentsCasesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getDocumentsCasesList().getStore().add(rec);

			me.getDocumentsCasesAdd().destroy();
		}
		//</es-section>
	},
	onDocumentsCasesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('documentsCasesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.documentsCases());
		//</es-section>
	}
});
