/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:13 GMT-0400 (Bolivia Time)
 * Time: 2:42:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:13 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:13
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.casesCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'cases-cstm.List',
		'cases-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'cases_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'casesCstmList',
			selector: 'casesCstmList'
		},
		{
			ref: 'casesCstmAdd',
			selector: 'casesCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'casesCstmList > toolbar > button#add': {
				click: me.onCasesCstmAddClick
			},
			'casesCstmList':{
				removeRow: me.removeRow
			},
			'casesCstmAdd > form > button#save': {
				click: me.onCasesCstmAddSaveClick
			},
			'casesCstmAdd > form > button#cancel': {
				click: me.onCasesCstmAddCancelClick
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
	onCasesCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCasesCstmAdd().destroy();
		//</es-section>
	},
	onCasesCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCasesCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCasesCstmList().getStore().add(rec);

			me.getCasesCstmAdd().destroy();
		}
		//</es-section>
	},
	onCasesCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('casesCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.casesCstm());
		//</es-section>
	}
});
