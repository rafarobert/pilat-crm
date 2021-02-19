/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:01 GMT-0400 (Bolivia Time)
 * Time: 2:44:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:1
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.saiClientes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'sai-clientes.List',
		'sai-clientes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'sai_clientes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'saiClientesList',
			selector: 'saiClientesList'
		},
		{
			ref: 'saiClientesAdd',
			selector: 'saiClientesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'saiClientesList > toolbar > button#add': {
				click: me.onSaiClientesAddClick
			},
			'saiClientesList':{
				removeRow: me.removeRow
			},
			'saiClientesAdd > form > button#save': {
				click: me.onSaiClientesAddSaveClick
			},
			'saiClientesAdd > form > button#cancel': {
				click: me.onSaiClientesAddCancelClick
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
	onSaiClientesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSaiClientesAdd().destroy();
		//</es-section>
	},
	onSaiClientesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSaiClientesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSaiClientesList().getStore().add(rec);

			me.getSaiClientesAdd().destroy();
		}
		//</es-section>
	},
	onSaiClientesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('saiClientesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.saiClientes());
		//</es-section>
	}
});
