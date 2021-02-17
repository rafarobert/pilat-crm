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

Ext.define('es.controller.esObjectAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-object-attributes.List',
		'es-object-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esObjectAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esObjectAttributesList',
			selector: 'esObjectAttributesList'
		},
		{
			ref: 'esObjectAttributesAdd',
			selector: 'esObjectAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esObjectAttributesList > toolbar > button#add': {
				click: me.onEsObjectAttributesAddClick
			},
			'esObjectAttributesList':{
				removeRow: me.removeRow
			},
			'esObjectAttributesAdd > form > button#save': {
				click: me.onEsObjectAttributesAddSaveClick
			},
			'esObjectAttributesAdd > form > button#cancel': {
				click: me.onEsObjectAttributesAddCancelClick
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
	onEsObjectAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsObjectAttributesAdd().destroy();
		//</es-section>
	},
	onEsObjectAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsObjectAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsObjectAttributesList().getStore().add(rec);

			me.getEsObjectAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsObjectAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esObjectAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esObjectAttributes());
		//</es-section>
	}
});
