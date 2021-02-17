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

Ext.define('es.controller.documentsOpportunities', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'documents-opportunities.List',
		'documents-opportunities.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'documents_opportunities'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'documentsOpportunitiesList',
			selector: 'documentsOpportunitiesList'
		},
		{
			ref: 'documentsOpportunitiesAdd',
			selector: 'documentsOpportunitiesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'documentsOpportunitiesList > toolbar > button#add': {
				click: me.onDocumentsOpportunitiesAddClick
			},
			'documentsOpportunitiesList':{
				removeRow: me.removeRow
			},
			'documentsOpportunitiesAdd > form > button#save': {
				click: me.onDocumentsOpportunitiesAddSaveClick
			},
			'documentsOpportunitiesAdd > form > button#cancel': {
				click: me.onDocumentsOpportunitiesAddCancelClick
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
	onDocumentsOpportunitiesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getDocumentsOpportunitiesAdd().destroy();
		//</es-section>
	},
	onDocumentsOpportunitiesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getDocumentsOpportunitiesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getDocumentsOpportunitiesList().getStore().add(rec);

			me.getDocumentsOpportunitiesAdd().destroy();
		}
		//</es-section>
	},
	onDocumentsOpportunitiesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('documentsOpportunitiesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.documentsOpportunities());
		//</es-section>
	}
});
