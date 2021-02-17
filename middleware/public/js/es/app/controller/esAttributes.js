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

Ext.define('es.controller.esAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-attributes.List',
		'es-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esAttributesList',
			selector: 'esAttributesList'
		},
		{
			ref: 'esAttributesAdd',
			selector: 'esAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esAttributesList > toolbar > button#add': {
				click: me.onEsAttributesAddClick
			},
			'esAttributesList':{
				removeRow: me.removeRow
			},
			'esAttributesAdd > form > button#save': {
				click: me.onEsAttributesAddSaveClick
			},
			'esAttributesAdd > form > button#cancel': {
				click: me.onEsAttributesAddCancelClick
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
	onEsAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsAttributesAdd().destroy();
		//</es-section>
	},
	onEsAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsAttributesList().getStore().add(rec);

			me.getEsAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esAttributes());
		//</es-section>
	}
});
