/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:11 GMT-0400 (Bolivia Time)
 * Time: 2:42:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:11 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:11
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.cases', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'cases.List',
		'cases.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'cases'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'casesList',
			selector: 'casesList'
		},
		{
			ref: 'casesAdd',
			selector: 'casesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'casesList > toolbar > button#add': {
				click: me.onCasesAddClick
			},
			'casesList':{
				removeRow: me.removeRow
			},
			'casesAdd > form > button#save': {
				click: me.onCasesAddSaveClick
			},
			'casesAdd > form > button#cancel': {
				click: me.onCasesAddCancelClick
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
	onCasesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCasesAdd().destroy();
		//</es-section>
	},
	onCasesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCasesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCasesList().getStore().add(rec);

			me.getCasesAdd().destroy();
		}
		//</es-section>
	},
	onCasesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('casesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.cases());
		//</es-section>
	}
});
