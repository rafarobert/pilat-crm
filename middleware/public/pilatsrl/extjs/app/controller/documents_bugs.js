/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:24 GMT-0400 (Bolivia Time)
 * Time: 2:42:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:24
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.documentsBugs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'documents-bugs.List',
		'documents-bugs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'documents_bugs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'documentsBugsList',
			selector: 'documentsBugsList'
		},
		{
			ref: 'documentsBugsAdd',
			selector: 'documentsBugsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'documentsBugsList > toolbar > button#add': {
				click: me.onDocumentsBugsAddClick
			},
			'documentsBugsList':{
				removeRow: me.removeRow
			},
			'documentsBugsAdd > form > button#save': {
				click: me.onDocumentsBugsAddSaveClick
			},
			'documentsBugsAdd > form > button#cancel': {
				click: me.onDocumentsBugsAddCancelClick
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
	onDocumentsBugsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getDocumentsBugsAdd().destroy();
		//</es-section>
	},
	onDocumentsBugsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getDocumentsBugsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getDocumentsBugsList().getStore().add(rec);

			me.getDocumentsBugsAdd().destroy();
		}
		//</es-section>
	},
	onDocumentsBugsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('documentsBugsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.documentsBugs());
		//</es-section>
	}
});
