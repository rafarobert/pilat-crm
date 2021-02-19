/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:02 GMT-0400 (Bolivia Time)
 * Time: 2:44:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.schedulers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'schedulers.List',
		'schedulers.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'schedulers'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'schedulersList',
			selector: 'schedulersList'
		},
		{
			ref: 'schedulersAdd',
			selector: 'schedulersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'schedulersList > toolbar > button#add': {
				click: me.onSchedulersAddClick
			},
			'schedulersList':{
				removeRow: me.removeRow
			},
			'schedulersAdd > form > button#save': {
				click: me.onSchedulersAddSaveClick
			},
			'schedulersAdd > form > button#cancel': {
				click: me.onSchedulersAddCancelClick
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
	onSchedulersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSchedulersAdd().destroy();
		//</es-section>
	},
	onSchedulersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSchedulersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSchedulersList().getStore().add(rec);

			me.getSchedulersAdd().destroy();
		}
		//</es-section>
	},
	onSchedulersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('schedulersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.schedulers());
		//</es-section>
	}
});
