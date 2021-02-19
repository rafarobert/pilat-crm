/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Time: 2:42:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:38
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.erpCliente', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'erp-cliente.List',
		'erp-cliente.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'erp_cliente'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'erpClienteList',
			selector: 'erpClienteList'
		},
		{
			ref: 'erpClienteAdd',
			selector: 'erpClienteAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'erpClienteList > toolbar > button#add': {
				click: me.onErpClienteAddClick
			},
			'erpClienteList':{
				removeRow: me.removeRow
			},
			'erpClienteAdd > form > button#save': {
				click: me.onErpClienteAddSaveClick
			},
			'erpClienteAdd > form > button#cancel': {
				click: me.onErpClienteAddCancelClick
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
	onErpClienteAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getErpClienteAdd().destroy();
		//</es-section>
	},
	onErpClienteAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getErpClienteAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getErpClienteList().getStore().add(rec);

			me.getErpClienteAdd().destroy();
		}
		//</es-section>
	},
	onErpClienteAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('erpClienteAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.erpCliente());
		//</es-section>
	}
});
