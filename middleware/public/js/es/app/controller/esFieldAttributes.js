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

Ext.define('es.controller.esFieldAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-field-attributes.List',
		'es-field-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esFieldAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esFieldAttributesList',
			selector: 'esFieldAttributesList'
		},
		{
			ref: 'esFieldAttributesAdd',
			selector: 'esFieldAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esFieldAttributesList > toolbar > button#add': {
				click: me.onEsFieldAttributesAddClick
			},
			'esFieldAttributesList':{
				removeRow: me.removeRow
			},
			'esFieldAttributesAdd > form > button#save': {
				click: me.onEsFieldAttributesAddSaveClick
			},
			'esFieldAttributesAdd > form > button#cancel': {
				click: me.onEsFieldAttributesAddCancelClick
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
	onEsFieldAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsFieldAttributesAdd().destroy();
		//</es-section>
	},
	onEsFieldAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsFieldAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsFieldAttributesList().getStore().add(rec);

			me.getEsFieldAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsFieldAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esFieldAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esFieldAttributes());
		//</es-section>
	}
});
