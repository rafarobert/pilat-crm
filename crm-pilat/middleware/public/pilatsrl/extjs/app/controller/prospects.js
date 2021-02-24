/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:49 GMT-0400 (Bolivia Time)
 * Time: 2:43:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.prospects', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'prospects.List',
		'prospects.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'prospects'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'prospectsList',
			selector: 'prospectsList'
		},
		{
			ref: 'prospectsAdd',
			selector: 'prospectsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'prospectsList > toolbar > button#add': {
				click: me.onProspectsAddClick
			},
			'prospectsList':{
				removeRow: me.removeRow
			},
			'prospectsAdd > form > button#save': {
				click: me.onProspectsAddSaveClick
			},
			'prospectsAdd > form > button#cancel': {
				click: me.onProspectsAddCancelClick
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
	onProspectsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProspectsAdd().destroy();
		//</es-section>
	},
	onProspectsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProspectsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProspectsList().getStore().add(rec);

			me.getProspectsAdd().destroy();
		}
		//</es-section>
	},
	onProspectsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('prospectsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.prospects());
		//</es-section>
	}
});
