/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:07 GMT-0400 (Bolivia Time)
 * Time: 2:44:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:7
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.spots', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'spots.List',
		'spots.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'spots'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'spotsList',
			selector: 'spotsList'
		},
		{
			ref: 'spotsAdd',
			selector: 'spotsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'spotsList > toolbar > button#add': {
				click: me.onSpotsAddClick
			},
			'spotsList':{
				removeRow: me.removeRow
			},
			'spotsAdd > form > button#save': {
				click: me.onSpotsAddSaveClick
			},
			'spotsAdd > form > button#cancel': {
				click: me.onSpotsAddCancelClick
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
	onSpotsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSpotsAdd().destroy();
		//</es-section>
	},
	onSpotsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSpotsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSpotsList().getStore().add(rec);

			me.getSpotsAdd().destroy();
		}
		//</es-section>
	},
	onSpotsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('spotsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.spots());
		//</es-section>
	}
});
