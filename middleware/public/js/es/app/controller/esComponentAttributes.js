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

Ext.define('es.controller.esComponentAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-component-attributes.List',
		'es-component-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esComponentAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esComponentAttributesList',
			selector: 'esComponentAttributesList'
		},
		{
			ref: 'esComponentAttributesAdd',
			selector: 'esComponentAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esComponentAttributesList > toolbar > button#add': {
				click: me.onEsComponentAttributesAddClick
			},
			'esComponentAttributesList':{
				removeRow: me.removeRow
			},
			'esComponentAttributesAdd > form > button#save': {
				click: me.onEsComponentAttributesAddSaveClick
			},
			'esComponentAttributesAdd > form > button#cancel': {
				click: me.onEsComponentAttributesAddCancelClick
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
	onEsComponentAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsComponentAttributesAdd().destroy();
		//</es-section>
	},
	onEsComponentAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsComponentAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsComponentAttributesList().getStore().add(rec);

			me.getEsComponentAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsComponentAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esComponentAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esComponentAttributes());
		//</es-section>
	}
});
