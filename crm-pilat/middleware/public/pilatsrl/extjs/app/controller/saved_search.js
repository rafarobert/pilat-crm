/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:02 GMT-0400 (Bolivia Time)
 * Time: 2:44:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.savedSearch', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'saved-search.List',
		'saved-search.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'saved_search'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'savedSearchList',
			selector: 'savedSearchList'
		},
		{
			ref: 'savedSearchAdd',
			selector: 'savedSearchAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'savedSearchList > toolbar > button#add': {
				click: me.onSavedSearchAddClick
			},
			'savedSearchList':{
				removeRow: me.removeRow
			},
			'savedSearchAdd > form > button#save': {
				click: me.onSavedSearchAddSaveClick
			},
			'savedSearchAdd > form > button#cancel': {
				click: me.onSavedSearchAddCancelClick
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
	onSavedSearchAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSavedSearchAdd().destroy();
		//</es-section>
	},
	onSavedSearchAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSavedSearchAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSavedSearchList().getStore().add(rec);

			me.getSavedSearchAdd().destroy();
		}
		//</es-section>
	},
	onSavedSearchAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('savedSearchAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.savedSearch());
		//</es-section>
	}
});
