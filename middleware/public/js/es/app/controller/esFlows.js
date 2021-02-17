/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Time: 2:25:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esFlows', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-flows.List',
		'es-flows.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esFlows'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esFlowsList',
			selector: 'esFlowsList'
		},
		{
			ref: 'esFlowsAdd',
			selector: 'esFlowsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esFlowsList > toolbar > button#add': {
				click: me.onEsFlowsAddClick
			},
			'esFlowsList':{
				removeRow: me.removeRow
			},
			'esFlowsAdd > form > button#save': {
				click: me.onEsFlowsAddSaveClick
			},
			'esFlowsAdd > form > button#cancel': {
				click: me.onEsFlowsAddCancelClick
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
	onEsFlowsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsFlowsAdd().destroy();
		//</es-section>
	},
	onEsFlowsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsFlowsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsFlowsList().getStore().add(rec);

			me.getEsFlowsAdd().destroy();
		}
		//</es-section>
	},
	onEsFlowsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esFlowsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esFlows());
		//</es-section>
	}
});
