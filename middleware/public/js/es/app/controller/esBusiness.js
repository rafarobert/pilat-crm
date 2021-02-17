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

Ext.define('es.controller.esBusiness', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-business.List',
		'es-business.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esBusiness'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esBusinessList',
			selector: 'esBusinessList'
		},
		{
			ref: 'esBusinessAdd',
			selector: 'esBusinessAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esBusinessList > toolbar > button#add': {
				click: me.onEsBusinessAddClick
			},
			'esBusinessList':{
				removeRow: me.removeRow
			},
			'esBusinessAdd > form > button#save': {
				click: me.onEsBusinessAddSaveClick
			},
			'esBusinessAdd > form > button#cancel': {
				click: me.onEsBusinessAddCancelClick
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
	onEsBusinessAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsBusinessAdd().destroy();
		//</es-section>
	},
	onEsBusinessAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsBusinessAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsBusinessList().getStore().add(rec);

			me.getEsBusinessAdd().destroy();
		}
		//</es-section>
	},
	onEsBusinessAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esBusinessAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esBusiness());
		//</es-section>
	}
});
