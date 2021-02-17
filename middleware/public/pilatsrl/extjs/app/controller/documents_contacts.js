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

Ext.define('es.controller.documentsContacts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'documents-contacts.List',
		'documents-contacts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'documents_contacts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'documentsContactsList',
			selector: 'documentsContactsList'
		},
		{
			ref: 'documentsContactsAdd',
			selector: 'documentsContactsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'documentsContactsList > toolbar > button#add': {
				click: me.onDocumentsContactsAddClick
			},
			'documentsContactsList':{
				removeRow: me.removeRow
			},
			'documentsContactsAdd > form > button#save': {
				click: me.onDocumentsContactsAddSaveClick
			},
			'documentsContactsAdd > form > button#cancel': {
				click: me.onDocumentsContactsAddCancelClick
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
	onDocumentsContactsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getDocumentsContactsAdd().destroy();
		//</es-section>
	},
	onDocumentsContactsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getDocumentsContactsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getDocumentsContactsList().getStore().add(rec);

			me.getDocumentsContactsAdd().destroy();
		}
		//</es-section>
	},
	onDocumentsContactsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('documentsContactsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.documentsContacts());
		//</es-section>
	}
});
