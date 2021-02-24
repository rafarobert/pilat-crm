/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:38 GMT-0400 (Bolivia Time)
 * Time: 2:43:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:38
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.project', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'project.List',
		'project.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'project'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectList',
			selector: 'projectList'
		},
		{
			ref: 'projectAdd',
			selector: 'projectAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectList > toolbar > button#add': {
				click: me.onProjectAddClick
			},
			'projectList':{
				removeRow: me.removeRow
			},
			'projectAdd > form > button#save': {
				click: me.onProjectAddSaveClick
			},
			'projectAdd > form > button#cancel': {
				click: me.onProjectAddCancelClick
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
	onProjectAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectAdd().destroy();
		//</es-section>
	},
	onProjectAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectList().getStore().add(rec);

			me.getProjectAdd().destroy();
		}
		//</es-section>
	},
	onProjectAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.project());
		//</es-section>
	}
});
