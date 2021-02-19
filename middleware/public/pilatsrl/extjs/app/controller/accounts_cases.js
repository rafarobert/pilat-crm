/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:48 GMT-0400 (Bolivia Time)
 * Time: 2:40:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.accountsCases', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'accounts-cases.List',
		'accounts-cases.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'accounts_cases'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'accountsCasesList',
			selector: 'accountsCasesList'
		},
		{
			ref: 'accountsCasesAdd',
			selector: 'accountsCasesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'accountsCasesList > toolbar > button#add': {
				click: me.onAccountsCasesAddClick
			},
			'accountsCasesList':{
				removeRow: me.removeRow
			},
			'accountsCasesAdd > form > button#save': {
				click: me.onAccountsCasesAddSaveClick
			},
			'accountsCasesAdd > form > button#cancel': {
				click: me.onAccountsCasesAddCancelClick
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
	onAccountsCasesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAccountsCasesAdd().destroy();
		//</es-section>
	},
	onAccountsCasesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAccountsCasesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAccountsCasesList().getStore().add(rec);

			me.getAccountsCasesAdd().destroy();
		}
		//</es-section>
	},
	onAccountsCasesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('accountsCasesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.accountsCases());
		//</es-section>
	}
});
