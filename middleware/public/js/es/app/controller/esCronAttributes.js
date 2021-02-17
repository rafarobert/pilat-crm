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

Ext.define('es.controller.esCronAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-cron-attributes.List',
		'es-cron-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esCronAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esCronAttributesList',
			selector: 'esCronAttributesList'
		},
		{
			ref: 'esCronAttributesAdd',
			selector: 'esCronAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esCronAttributesList > toolbar > button#add': {
				click: me.onEsCronAttributesAddClick
			},
			'esCronAttributesList':{
				removeRow: me.removeRow
			},
			'esCronAttributesAdd > form > button#save': {
				click: me.onEsCronAttributesAddSaveClick
			},
			'esCronAttributesAdd > form > button#cancel': {
				click: me.onEsCronAttributesAddCancelClick
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
	onEsCronAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsCronAttributesAdd().destroy();
		//</es-section>
	},
	onEsCronAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsCronAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsCronAttributesList().getStore().add(rec);

			me.getEsCronAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsCronAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esCronAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esCronAttributes());
		//</es-section>
	}
});
