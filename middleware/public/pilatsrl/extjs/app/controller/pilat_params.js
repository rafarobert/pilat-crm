/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:36 GMT-0400 (Bolivia Time)
 * Time: 2:43:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.pilatParams', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'pilat-params.List',
		'pilat-params.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'pilat_params'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'pilatParamsList',
			selector: 'pilatParamsList'
		},
		{
			ref: 'pilatParamsAdd',
			selector: 'pilatParamsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'pilatParamsList > toolbar > button#add': {
				click: me.onPilatParamsAddClick
			},
			'pilatParamsList':{
				removeRow: me.removeRow
			},
			'pilatParamsAdd > form > button#save': {
				click: me.onPilatParamsAddSaveClick
			},
			'pilatParamsAdd > form > button#cancel': {
				click: me.onPilatParamsAddCancelClick
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
	onPilatParamsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getPilatParamsAdd().destroy();
		//</es-section>
	},
	onPilatParamsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getPilatParamsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getPilatParamsList().getStore().add(rec);

			me.getPilatParamsAdd().destroy();
		}
		//</es-section>
	},
	onPilatParamsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('pilatParamsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.pilatParams());
		//</es-section>
	}
});
