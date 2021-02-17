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

Ext.define('es.controller.esLogAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-log-attribute-instances.List',
		'es-log-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esLogAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esLogAttributeInstancesList',
			selector: 'esLogAttributeInstancesList'
		},
		{
			ref: 'esLogAttributeInstancesAdd',
			selector: 'esLogAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esLogAttributeInstancesList > toolbar > button#add': {
				click: me.onEsLogAttributeInstancesAddClick
			},
			'esLogAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esLogAttributeInstancesAdd > form > button#save': {
				click: me.onEsLogAttributeInstancesAddSaveClick
			},
			'esLogAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsLogAttributeInstancesAddCancelClick
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
	onEsLogAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsLogAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsLogAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsLogAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsLogAttributeInstancesList().getStore().add(rec);

			me.getEsLogAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsLogAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esLogAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esLogAttributeInstances());
		//</es-section>
	}
});
