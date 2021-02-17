/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Time: 2:25:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esPersonAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-person-attribute-instances.List',
		'es-person-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esPersonAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esPersonAttributeInstancesList',
			selector: 'esPersonAttributeInstancesList'
		},
		{
			ref: 'esPersonAttributeInstancesAdd',
			selector: 'esPersonAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esPersonAttributeInstancesList > toolbar > button#add': {
				click: me.onEsPersonAttributeInstancesAddClick
			},
			'esPersonAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esPersonAttributeInstancesAdd > form > button#save': {
				click: me.onEsPersonAttributeInstancesAddSaveClick
			},
			'esPersonAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsPersonAttributeInstancesAddCancelClick
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
	onEsPersonAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsPersonAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsPersonAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsPersonAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsPersonAttributeInstancesList().getStore().add(rec);

			me.getEsPersonAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsPersonAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esPersonAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esPersonAttributeInstances());
		//</es-section>
	}
});
