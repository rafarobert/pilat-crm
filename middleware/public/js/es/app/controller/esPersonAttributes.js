/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:34 GMT-0400 (Bolivia Time)
 * Time: 2:25:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esPersonAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-person-attributes.List',
		'es-person-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esPersonAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esPersonAttributesList',
			selector: 'esPersonAttributesList'
		},
		{
			ref: 'esPersonAttributesAdd',
			selector: 'esPersonAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esPersonAttributesList > toolbar > button#add': {
				click: me.onEsPersonAttributesAddClick
			},
			'esPersonAttributesList':{
				removeRow: me.removeRow
			},
			'esPersonAttributesAdd > form > button#save': {
				click: me.onEsPersonAttributesAddSaveClick
			},
			'esPersonAttributesAdd > form > button#cancel': {
				click: me.onEsPersonAttributesAddCancelClick
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
	onEsPersonAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsPersonAttributesAdd().destroy();
		//</es-section>
	},
	onEsPersonAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsPersonAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsPersonAttributesList().getStore().add(rec);

			me.getEsPersonAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsPersonAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esPersonAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esPersonAttributes());
		//</es-section>
	}
});
