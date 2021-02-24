/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:40 GMT-0400 (Bolivia Time)
 * Time: 2:43:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectsCases', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'projects-cases.List',
		'projects-cases.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'projects_cases'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectsCasesList',
			selector: 'projectsCasesList'
		},
		{
			ref: 'projectsCasesAdd',
			selector: 'projectsCasesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectsCasesList > toolbar > button#add': {
				click: me.onProjectsCasesAddClick
			},
			'projectsCasesList':{
				removeRow: me.removeRow
			},
			'projectsCasesAdd > form > button#save': {
				click: me.onProjectsCasesAddSaveClick
			},
			'projectsCasesAdd > form > button#cancel': {
				click: me.onProjectsCasesAddCancelClick
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
	onProjectsCasesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectsCasesAdd().destroy();
		//</es-section>
	},
	onProjectsCasesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectsCasesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectsCasesList().getStore().add(rec);

			me.getProjectsCasesAdd().destroy();
		}
		//</es-section>
	},
	onProjectsCasesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectsCasesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectsCases());
		//</es-section>
	}
});
