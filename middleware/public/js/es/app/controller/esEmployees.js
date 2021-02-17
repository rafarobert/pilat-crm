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

Ext.define('es.controller.esEmployees', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-employees.List',
		'es-employees.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esEmployees'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esEmployeesList',
			selector: 'esEmployeesList'
		},
		{
			ref: 'esEmployeesAdd',
			selector: 'esEmployeesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esEmployeesList > toolbar > button#add': {
				click: me.onEsEmployeesAddClick
			},
			'esEmployeesList':{
				removeRow: me.removeRow
			},
			'esEmployeesAdd > form > button#save': {
				click: me.onEsEmployeesAddSaveClick
			},
			'esEmployeesAdd > form > button#cancel': {
				click: me.onEsEmployeesAddCancelClick
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
	onEsEmployeesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsEmployeesAdd().destroy();
		//</es-section>
	},
	onEsEmployeesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsEmployeesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsEmployeesList().getStore().add(rec);

			me.getEsEmployeesAdd().destroy();
		}
		//</es-section>
	},
	onEsEmployeesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esEmployeesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esEmployees());
		//</es-section>
	}
});
