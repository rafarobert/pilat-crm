/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:52 GMT-0400 (Bolivia Time)
 * Time: 2:43:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:52
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.prospectLists', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'prospect-lists.List',
		'prospect-lists.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'prospect_lists'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'prospectListsList',
			selector: 'prospectListsList'
		},
		{
			ref: 'prospectListsAdd',
			selector: 'prospectListsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'prospectListsList > toolbar > button#add': {
				click: me.onProspectListsAddClick
			},
			'prospectListsList':{
				removeRow: me.removeRow
			},
			'prospectListsAdd > form > button#save': {
				click: me.onProspectListsAddSaveClick
			},
			'prospectListsAdd > form > button#cancel': {
				click: me.onProspectListsAddCancelClick
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
	onProspectListsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProspectListsAdd().destroy();
		//</es-section>
	},
	onProspectListsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProspectListsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProspectListsList().getStore().add(rec);

			me.getProspectListsAdd().destroy();
		}
		//</es-section>
	},
	onProspectListsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('prospectListsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.prospectLists());
		//</es-section>
	}
});
