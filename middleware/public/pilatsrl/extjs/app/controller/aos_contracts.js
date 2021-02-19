/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:29 GMT-0400 (Bolivia Time)
 * Time: 2:41:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:29 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:29
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosContracts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-contracts.List',
		'aos-contracts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_contracts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosContractsList',
			selector: 'aosContractsList'
		},
		{
			ref: 'aosContractsAdd',
			selector: 'aosContractsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosContractsList > toolbar > button#add': {
				click: me.onAosContractsAddClick
			},
			'aosContractsList':{
				removeRow: me.removeRow
			},
			'aosContractsAdd > form > button#save': {
				click: me.onAosContractsAddSaveClick
			},
			'aosContractsAdd > form > button#cancel': {
				click: me.onAosContractsAddCancelClick
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
	onAosContractsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosContractsAdd().destroy();
		//</es-section>
	},
	onAosContractsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosContractsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosContractsList().getStore().add(rec);

			me.getAosContractsAdd().destroy();
		}
		//</es-section>
	},
	onAosContractsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosContractsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosContracts());
		//</es-section>
	}
});
