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

Ext.define('es.controller.casesBugs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'cases-bugs.List',
		'cases-bugs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'cases_bugs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'casesBugsList',
			selector: 'casesBugsList'
		},
		{
			ref: 'casesBugsAdd',
			selector: 'casesBugsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'casesBugsList > toolbar > button#add': {
				click: me.onCasesBugsAddClick
			},
			'casesBugsList':{
				removeRow: me.removeRow
			},
			'casesBugsAdd > form > button#save': {
				click: me.onCasesBugsAddSaveClick
			},
			'casesBugsAdd > form > button#cancel': {
				click: me.onCasesBugsAddCancelClick
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
	onCasesBugsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCasesBugsAdd().destroy();
		//</es-section>
	},
	onCasesBugsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCasesBugsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCasesBugsList().getStore().add(rec);

			me.getCasesBugsAdd().destroy();
		}
		//</es-section>
	},
	onCasesBugsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('casesBugsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.casesBugs());
		//</es-section>
	}
});
