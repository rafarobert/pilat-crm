/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:39 GMT-0400 (Bolivia Time)
 * Time: 2:43:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectsBugs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'projects-bugs.List',
		'projects-bugs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'projects_bugs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectsBugsList',
			selector: 'projectsBugsList'
		},
		{
			ref: 'projectsBugsAdd',
			selector: 'projectsBugsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectsBugsList > toolbar > button#add': {
				click: me.onProjectsBugsAddClick
			},
			'projectsBugsList':{
				removeRow: me.removeRow
			},
			'projectsBugsAdd > form > button#save': {
				click: me.onProjectsBugsAddSaveClick
			},
			'projectsBugsAdd > form > button#cancel': {
				click: me.onProjectsBugsAddCancelClick
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
	onProjectsBugsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectsBugsAdd().destroy();
		//</es-section>
	},
	onProjectsBugsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectsBugsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectsBugsList().getStore().add(rec);

			me.getProjectsBugsAdd().destroy();
		}
		//</es-section>
	},
	onProjectsBugsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectsBugsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectsBugs());
		//</es-section>
	}
});
