/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Time: 2:25:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esJobs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-jobs.List',
		'es-jobs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esJobs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esJobsList',
			selector: 'esJobsList'
		},
		{
			ref: 'esJobsAdd',
			selector: 'esJobsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esJobsList > toolbar > button#add': {
				click: me.onEsJobsAddClick
			},
			'esJobsList':{
				removeRow: me.removeRow
			},
			'esJobsAdd > form > button#save': {
				click: me.onEsJobsAddSaveClick
			},
			'esJobsAdd > form > button#cancel': {
				click: me.onEsJobsAddCancelClick
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
	onEsJobsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsJobsAdd().destroy();
		//</es-section>
	},
	onEsJobsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsJobsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsJobsList().getStore().add(rec);

			me.getEsJobsAdd().destroy();
		}
		//</es-section>
	},
	onEsJobsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esJobsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esJobs());
		//</es-section>
	}
});
