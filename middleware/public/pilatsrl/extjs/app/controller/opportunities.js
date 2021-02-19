/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:24 GMT-0400 (Bolivia Time)
 * Time: 2:43:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:24
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.opportunities', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'opportunities.List',
		'opportunities.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'opportunities'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'opportunitiesList',
			selector: 'opportunitiesList'
		},
		{
			ref: 'opportunitiesAdd',
			selector: 'opportunitiesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'opportunitiesList > toolbar > button#add': {
				click: me.onOpportunitiesAddClick
			},
			'opportunitiesList':{
				removeRow: me.removeRow
			},
			'opportunitiesAdd > form > button#save': {
				click: me.onOpportunitiesAddSaveClick
			},
			'opportunitiesAdd > form > button#cancel': {
				click: me.onOpportunitiesAddCancelClick
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
	onOpportunitiesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOpportunitiesAdd().destroy();
		//</es-section>
	},
	onOpportunitiesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOpportunitiesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOpportunitiesList().getStore().add(rec);

			me.getOpportunitiesAdd().destroy();
		}
		//</es-section>
	},
	onOpportunitiesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('opportunitiesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.opportunities());
		//</es-section>
	}
});
