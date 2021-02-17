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

Ext.define('es.controller.esFields', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-fields.List',
		'es-fields.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esFields'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esFieldsList',
			selector: 'esFieldsList'
		},
		{
			ref: 'esFieldsAdd',
			selector: 'esFieldsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esFieldsList > toolbar > button#add': {
				click: me.onEsFieldsAddClick
			},
			'esFieldsList':{
				removeRow: me.removeRow
			},
			'esFieldsAdd > form > button#save': {
				click: me.onEsFieldsAddSaveClick
			},
			'esFieldsAdd > form > button#cancel': {
				click: me.onEsFieldsAddCancelClick
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
	onEsFieldsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsFieldsAdd().destroy();
		//</es-section>
	},
	onEsFieldsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsFieldsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsFieldsList().getStore().add(rec);

			me.getEsFieldsAdd().destroy();
		}
		//</es-section>
	},
	onEsFieldsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esFieldsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esFields());
		//</es-section>
	}
});
