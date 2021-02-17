/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Time: 2:25:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esPageComponents', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-page-components.List',
		'es-page-components.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esPageComponents'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esPageComponentsList',
			selector: 'esPageComponentsList'
		},
		{
			ref: 'esPageComponentsAdd',
			selector: 'esPageComponentsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esPageComponentsList > toolbar > button#add': {
				click: me.onEsPageComponentsAddClick
			},
			'esPageComponentsList':{
				removeRow: me.removeRow
			},
			'esPageComponentsAdd > form > button#save': {
				click: me.onEsPageComponentsAddSaveClick
			},
			'esPageComponentsAdd > form > button#cancel': {
				click: me.onEsPageComponentsAddCancelClick
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
	onEsPageComponentsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsPageComponentsAdd().destroy();
		//</es-section>
	},
	onEsPageComponentsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsPageComponentsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsPageComponentsList().getStore().add(rec);

			me.getEsPageComponentsAdd().destroy();
		}
		//</es-section>
	},
	onEsPageComponentsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esPageComponentsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esPageComponents());
		//</es-section>
	}
});
