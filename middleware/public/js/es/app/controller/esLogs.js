/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esLogs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-logs.List',
		'es-logs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esLogs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esLogsList',
			selector: 'esLogsList'
		},
		{
			ref: 'esLogsAdd',
			selector: 'esLogsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esLogsList > toolbar > button#add': {
				click: me.onEsLogsAddClick
			},
			'esLogsList':{
				removeRow: me.removeRow
			},
			'esLogsAdd > form > button#save': {
				click: me.onEsLogsAddSaveClick
			},
			'esLogsAdd > form > button#cancel': {
				click: me.onEsLogsAddCancelClick
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
	onEsLogsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsLogsAdd().destroy();
		//</es-section>
	},
	onEsLogsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsLogsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsLogsList().getStore().add(rec);

			me.getEsLogsAdd().destroy();
		}
		//</es-section>
	},
	onEsLogsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esLogsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esLogs());
		//</es-section>
	}
});
