/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:53 GMT-0400 (Bolivia Time)
 * Time: 2:43:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:53
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.prospectListsProspects', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'prospect-lists-prospects.List',
		'prospect-lists-prospects.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'prospect_lists_prospects'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'prospectListsProspectsList',
			selector: 'prospectListsProspectsList'
		},
		{
			ref: 'prospectListsProspectsAdd',
			selector: 'prospectListsProspectsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'prospectListsProspectsList > toolbar > button#add': {
				click: me.onProspectListsProspectsAddClick
			},
			'prospectListsProspectsList':{
				removeRow: me.removeRow
			},
			'prospectListsProspectsAdd > form > button#save': {
				click: me.onProspectListsProspectsAddSaveClick
			},
			'prospectListsProspectsAdd > form > button#cancel': {
				click: me.onProspectListsProspectsAddCancelClick
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
	onProspectListsProspectsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProspectListsProspectsAdd().destroy();
		//</es-section>
	},
	onProspectListsProspectsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProspectListsProspectsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProspectListsProspectsList().getStore().add(rec);

			me.getProspectListsProspectsAdd().destroy();
		}
		//</es-section>
	},
	onProspectListsProspectsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('prospectListsProspectsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.prospectListsProspects());
		//</es-section>
	}
});
