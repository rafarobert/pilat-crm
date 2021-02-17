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

Ext.define('es.controller.esMailAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-mail-attribute-instances.List',
		'es-mail-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esMailAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esMailAttributeInstancesList',
			selector: 'esMailAttributeInstancesList'
		},
		{
			ref: 'esMailAttributeInstancesAdd',
			selector: 'esMailAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esMailAttributeInstancesList > toolbar > button#add': {
				click: me.onEsMailAttributeInstancesAddClick
			},
			'esMailAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esMailAttributeInstancesAdd > form > button#save': {
				click: me.onEsMailAttributeInstancesAddSaveClick
			},
			'esMailAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsMailAttributeInstancesAddCancelClick
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
	onEsMailAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsMailAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsMailAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsMailAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsMailAttributeInstancesList().getStore().add(rec);

			me.getEsMailAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsMailAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esMailAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esMailAttributeInstances());
		//</es-section>
	}
});
