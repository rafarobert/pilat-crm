/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Time: 2:43:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:8
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.leadsImport', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'leads-import.List',
		'leads-import.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'leads_import'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'leadsImportList',
			selector: 'leadsImportList'
		},
		{
			ref: 'leadsImportAdd',
			selector: 'leadsImportAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'leadsImportList > toolbar > button#add': {
				click: me.onLeadsImportAddClick
			},
			'leadsImportList':{
				removeRow: me.removeRow
			},
			'leadsImportAdd > form > button#save': {
				click: me.onLeadsImportAddSaveClick
			},
			'leadsImportAdd > form > button#cancel': {
				click: me.onLeadsImportAddCancelClick
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
	onLeadsImportAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getLeadsImportAdd().destroy();
		//</es-section>
	},
	onLeadsImportAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getLeadsImportAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getLeadsImportList().getStore().add(rec);

			me.getLeadsImportAdd().destroy();
		}
		//</es-section>
	},
	onLeadsImportAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('leadsImportAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.leadsImport());
		//</es-section>
	}
});
