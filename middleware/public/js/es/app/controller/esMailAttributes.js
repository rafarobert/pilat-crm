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

Ext.define('es.controller.esMailAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-mail-attributes.List',
		'es-mail-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esMailAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esMailAttributesList',
			selector: 'esMailAttributesList'
		},
		{
			ref: 'esMailAttributesAdd',
			selector: 'esMailAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esMailAttributesList > toolbar > button#add': {
				click: me.onEsMailAttributesAddClick
			},
			'esMailAttributesList':{
				removeRow: me.removeRow
			},
			'esMailAttributesAdd > form > button#save': {
				click: me.onEsMailAttributesAddSaveClick
			},
			'esMailAttributesAdd > form > button#cancel': {
				click: me.onEsMailAttributesAddCancelClick
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
	onEsMailAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsMailAttributesAdd().destroy();
		//</es-section>
	},
	onEsMailAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsMailAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsMailAttributesList().getStore().add(rec);

			me.getEsMailAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsMailAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esMailAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esMailAttributes());
		//</es-section>
	}
});
