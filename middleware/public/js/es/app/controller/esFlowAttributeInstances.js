/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:38 GMT-0400 (Bolivia Time)
 * Time: 2:25:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:38
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esFlowAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-flow-attribute-instances.List',
		'es-flow-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esFlowAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esFlowAttributeInstancesList',
			selector: 'esFlowAttributeInstancesList'
		},
		{
			ref: 'esFlowAttributeInstancesAdd',
			selector: 'esFlowAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esFlowAttributeInstancesList > toolbar > button#add': {
				click: me.onEsFlowAttributeInstancesAddClick
			},
			'esFlowAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esFlowAttributeInstancesAdd > form > button#save': {
				click: me.onEsFlowAttributeInstancesAddSaveClick
			},
			'esFlowAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsFlowAttributeInstancesAddCancelClick
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
	onEsFlowAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsFlowAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsFlowAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsFlowAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsFlowAttributeInstancesList().getStore().add(rec);

			me.getEsFlowAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsFlowAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esFlowAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esFlowAttributeInstances());
		//</es-section>
	}
});
