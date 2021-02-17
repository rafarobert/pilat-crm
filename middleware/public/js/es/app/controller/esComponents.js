/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Time: 2:25:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esComponents', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-components.List',
		'es-components.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esComponents'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esComponentsList',
			selector: 'esComponentsList'
		},
		{
			ref: 'esComponentsAdd',
			selector: 'esComponentsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esComponentsList > toolbar > button#add': {
				click: me.onEsComponentsAddClick
			},
			'esComponentsList':{
				removeRow: me.removeRow
			},
			'esComponentsAdd > form > button#save': {
				click: me.onEsComponentsAddSaveClick
			},
			'esComponentsAdd > form > button#cancel': {
				click: me.onEsComponentsAddCancelClick
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
	onEsComponentsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsComponentsAdd().destroy();
		//</es-section>
	},
	onEsComponentsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsComponentsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsComponentsList().getStore().add(rec);

			me.getEsComponentsAdd().destroy();
		}
		//</es-section>
	},
	onEsComponentsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esComponentsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esComponents());
		//</es-section>
	}
});
