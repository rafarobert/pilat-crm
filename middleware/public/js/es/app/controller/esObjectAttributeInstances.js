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

Ext.define('es.controller.esObjectAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-object-attribute-instances.List',
		'es-object-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esObjectAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esObjectAttributeInstancesList',
			selector: 'esObjectAttributeInstancesList'
		},
		{
			ref: 'esObjectAttributeInstancesAdd',
			selector: 'esObjectAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esObjectAttributeInstancesList > toolbar > button#add': {
				click: me.onEsObjectAttributeInstancesAddClick
			},
			'esObjectAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esObjectAttributeInstancesAdd > form > button#save': {
				click: me.onEsObjectAttributeInstancesAddSaveClick
			},
			'esObjectAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsObjectAttributeInstancesAddCancelClick
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
	onEsObjectAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsObjectAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsObjectAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsObjectAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsObjectAttributeInstancesList().getStore().add(rec);

			me.getEsObjectAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsObjectAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esObjectAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esObjectAttributeInstances());
		//</es-section>
	}
});
