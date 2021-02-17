/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:03 GMT-0400 (Bolivia Time)
 * Time: 2:43:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:3
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jobQueue', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'job-queue.List',
		'job-queue.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'job_queue'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jobQueueList',
			selector: 'jobQueueList'
		},
		{
			ref: 'jobQueueAdd',
			selector: 'jobQueueAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jobQueueList > toolbar > button#add': {
				click: me.onJobQueueAddClick
			},
			'jobQueueList':{
				removeRow: me.removeRow
			},
			'jobQueueAdd > form > button#save': {
				click: me.onJobQueueAddSaveClick
			},
			'jobQueueAdd > form > button#cancel': {
				click: me.onJobQueueAddCancelClick
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
	onJobQueueAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJobQueueAdd().destroy();
		//</es-section>
	},
	onJobQueueAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJobQueueAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJobQueueList().getStore().add(rec);

			me.getJobQueueAdd().destroy();
		}
		//</es-section>
	},
	onJobQueueAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jobQueueAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jobQueue());
		//</es-section>
	}
});
