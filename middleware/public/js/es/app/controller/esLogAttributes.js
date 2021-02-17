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

Ext.define('es.controller.esLogAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-log-attributes.List',
		'es-log-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esLogAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esLogAttributesList',
			selector: 'esLogAttributesList'
		},
		{
			ref: 'esLogAttributesAdd',
			selector: 'esLogAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esLogAttributesList > toolbar > button#add': {
				click: me.onEsLogAttributesAddClick
			},
			'esLogAttributesList':{
				removeRow: me.removeRow
			},
			'esLogAttributesAdd > form > button#save': {
				click: me.onEsLogAttributesAddSaveClick
			},
			'esLogAttributesAdd > form > button#cancel': {
				click: me.onEsLogAttributesAddCancelClick
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
	onEsLogAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsLogAttributesAdd().destroy();
		//</es-section>
	},
	onEsLogAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsLogAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsLogAttributesList().getStore().add(rec);

			me.getEsLogAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsLogAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esLogAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esLogAttributes());
		//</es-section>
	}
});
