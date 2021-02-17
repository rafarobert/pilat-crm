/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esComponentFieldAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-component-field-attributes.List',
		'es-component-field-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esComponentFieldAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esComponentFieldAttributesList',
			selector: 'esComponentFieldAttributesList'
		},
		{
			ref: 'esComponentFieldAttributesAdd',
			selector: 'esComponentFieldAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esComponentFieldAttributesList > toolbar > button#add': {
				click: me.onEsComponentFieldAttributesAddClick
			},
			'esComponentFieldAttributesList':{
				removeRow: me.removeRow
			},
			'esComponentFieldAttributesAdd > form > button#save': {
				click: me.onEsComponentFieldAttributesAddSaveClick
			},
			'esComponentFieldAttributesAdd > form > button#cancel': {
				click: me.onEsComponentFieldAttributesAddCancelClick
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
	onEsComponentFieldAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsComponentFieldAttributesAdd().destroy();
		//</es-section>
	},
	onEsComponentFieldAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsComponentFieldAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsComponentFieldAttributesList().getStore().add(rec);

			me.getEsComponentFieldAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsComponentFieldAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esComponentFieldAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esComponentFieldAttributes());
		//</es-section>
	}
});
