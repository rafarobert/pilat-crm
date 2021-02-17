/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:39 GMT-0400 (Bolivia Time)
 * Time: 2:25:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esComponentFieldAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-component-field-attribute-instances.List',
		'es-component-field-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esComponentFieldAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esComponentFieldAttributeInstancesList',
			selector: 'esComponentFieldAttributeInstancesList'
		},
		{
			ref: 'esComponentFieldAttributeInstancesAdd',
			selector: 'esComponentFieldAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esComponentFieldAttributeInstancesList > toolbar > button#add': {
				click: me.onEsComponentFieldAttributeInstancesAddClick
			},
			'esComponentFieldAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esComponentFieldAttributeInstancesAdd > form > button#save': {
				click: me.onEsComponentFieldAttributeInstancesAddSaveClick
			},
			'esComponentFieldAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsComponentFieldAttributeInstancesAddCancelClick
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
	onEsComponentFieldAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsComponentFieldAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsComponentFieldAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsComponentFieldAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsComponentFieldAttributeInstancesList().getStore().add(rec);

			me.getEsComponentFieldAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsComponentFieldAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esComponentFieldAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esComponentFieldAttributeInstances());
		//</es-section>
	}
});
