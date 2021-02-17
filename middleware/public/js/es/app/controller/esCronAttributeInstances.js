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

Ext.define('es.controller.esCronAttributeInstances', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-cron-attribute-instances.List',
		'es-cron-attribute-instances.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esCronAttributeInstances'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esCronAttributeInstancesList',
			selector: 'esCronAttributeInstancesList'
		},
		{
			ref: 'esCronAttributeInstancesAdd',
			selector: 'esCronAttributeInstancesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esCronAttributeInstancesList > toolbar > button#add': {
				click: me.onEsCronAttributeInstancesAddClick
			},
			'esCronAttributeInstancesList':{
				removeRow: me.removeRow
			},
			'esCronAttributeInstancesAdd > form > button#save': {
				click: me.onEsCronAttributeInstancesAddSaveClick
			},
			'esCronAttributeInstancesAdd > form > button#cancel': {
				click: me.onEsCronAttributeInstancesAddCancelClick
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
	onEsCronAttributeInstancesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsCronAttributeInstancesAdd().destroy();
		//</es-section>
	},
	onEsCronAttributeInstancesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsCronAttributeInstancesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsCronAttributeInstancesList().getStore().add(rec);

			me.getEsCronAttributeInstancesAdd().destroy();
		}
		//</es-section>
	},
	onEsCronAttributeInstancesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esCronAttributeInstancesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esCronAttributeInstances());
		//</es-section>
	}
});
