/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:44 GMT-0400 (Bolivia Time)
 * Time: 2:43:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:44 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:44
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'project-cstm.List',
		'project-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'project_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectCstmList',
			selector: 'projectCstmList'
		},
		{
			ref: 'projectCstmAdd',
			selector: 'projectCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectCstmList > toolbar > button#add': {
				click: me.onProjectCstmAddClick
			},
			'projectCstmList':{
				removeRow: me.removeRow
			},
			'projectCstmAdd > form > button#save': {
				click: me.onProjectCstmAddSaveClick
			},
			'projectCstmAdd > form > button#cancel': {
				click: me.onProjectCstmAddCancelClick
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
	onProjectCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectCstmAdd().destroy();
		//</es-section>
	},
	onProjectCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectCstmList().getStore().add(rec);

			me.getProjectCstmAdd().destroy();
		}
		//</es-section>
	},
	onProjectCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectCstm());
		//</es-section>
	}
});
