/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Time: 2:25:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:32
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esParams', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-params.List',
		'es-params.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esParams'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esParamsList',
			selector: 'esParamsList'
		},
		{
			ref: 'esParamsAdd',
			selector: 'esParamsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esParamsList > toolbar > button#add': {
				click: me.onEsParamsAddClick
			},
			'esParamsList':{
				removeRow: me.removeRow
			},
			'esParamsAdd > form > button#save': {
				click: me.onEsParamsAddSaveClick
			},
			'esParamsAdd > form > button#cancel': {
				click: me.onEsParamsAddCancelClick
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
	onEsParamsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsParamsAdd().destroy();
		//</es-section>
	},
	onEsParamsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsParamsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsParamsList().getStore().add(rec);

			me.getEsParamsAdd().destroy();
		}
		//</es-section>
	},
	onEsParamsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esParamsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esParams());
		//</es-section>
	}
});
