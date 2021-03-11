/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 09 2021 00:05:05 GMT-0400 (Bolivia Time)
 * Time: 0:5:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 09 2021 00:05:05 GMT-0400 (Bolivia Time)
 * Last time updated: 0:5:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.pilatLogs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'pilat-logs.List',
		'pilat-logs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'pilat_logs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'pilatLogsList',
			selector: 'pilatLogsList'
		},
		{
			ref: 'pilatLogsAdd',
			selector: 'pilatLogsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'pilatLogsList > toolbar > button#add': {
				click: me.onPilatLogsAddClick
			},
			'pilatLogsList':{
				removeRow: me.removeRow
			},
			'pilatLogsAdd > form > button#save': {
				click: me.onPilatLogsAddSaveClick
			},
			'pilatLogsAdd > form > button#cancel': {
				click: me.onPilatLogsAddCancelClick
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
	onPilatLogsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getPilatLogsAdd().destroy();
		//</es-section>
	},
	onPilatLogsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getPilatLogsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getPilatLogsList().getStore().add(rec);

			me.getPilatLogsAdd().destroy();
		}
		//</es-section>
	},
	onPilatLogsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('pilatLogsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.pilatLogs());
		//</es-section>
	}
});
