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

Ext.define('es.controller.esFlowAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-flow-attributes.List',
		'es-flow-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esFlowAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esFlowAttributesList',
			selector: 'esFlowAttributesList'
		},
		{
			ref: 'esFlowAttributesAdd',
			selector: 'esFlowAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esFlowAttributesList > toolbar > button#add': {
				click: me.onEsFlowAttributesAddClick
			},
			'esFlowAttributesList':{
				removeRow: me.removeRow
			},
			'esFlowAttributesAdd > form > button#save': {
				click: me.onEsFlowAttributesAddSaveClick
			},
			'esFlowAttributesAdd > form > button#cancel': {
				click: me.onEsFlowAttributesAddCancelClick
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
	onEsFlowAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsFlowAttributesAdd().destroy();
		//</es-section>
	},
	onEsFlowAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsFlowAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsFlowAttributesList().getStore().add(rec);

			me.getEsFlowAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsFlowAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esFlowAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esFlowAttributes());
		//</es-section>
	}
});
