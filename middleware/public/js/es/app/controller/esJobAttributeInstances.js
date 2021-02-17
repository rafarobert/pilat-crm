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

Ext.define('es.controller.esJobAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-job-attribute-instances.List',
		'es-job-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esJobAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esJobAttributeInstancesList',
			selector: 'esJobAttributeInstancesList'
		},
		{
			ref: 'esJobAttributeInstancesAdd',
			selector: 'esJobAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esJobAttributeInstancesList > toolbar > button#add': {
				click: me.onEsJobAttributeInstancesAddClick
			},
			'esJobAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esJobAttributeInstancesAdd > form > button#save': {
				click: me.onEsJobAttributeInstancesAddSaveClick
			},
			'esJobAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsJobAttributeInstancesAddCancelClick
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
	onEsJobAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsJobAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsJobAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsJobAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsJobAttributeInstancesList().getStore().add(rec);

			me.getEsJobAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsJobAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esJobAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esJobAttributeInstances());
		//</es-section>
	}
});
