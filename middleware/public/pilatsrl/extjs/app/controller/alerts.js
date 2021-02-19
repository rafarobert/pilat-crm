/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:56 GMT-0400 (Bolivia Time)
 * Time: 2:40:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:56
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.alerts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'alerts.List',
		'alerts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'alerts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'alertsList',
			selector: 'alertsList'
		},
		{
			ref: 'alertsAdd',
			selector: 'alertsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'alertsList > toolbar > button#add': {
				click: me.onAlertsAddClick
			},
			'alertsList':{
				removeRow: me.removeRow
			},
			'alertsAdd > form > button#save': {
				click: me.onAlertsAddSaveClick
			},
			'alertsAdd > form > button#cancel': {
				click: me.onAlertsAddCancelClick
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
	onAlertsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAlertsAdd().destroy();
		//</es-section>
	},
	onAlertsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAlertsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAlertsList().getStore().add(rec);

			me.getAlertsAdd().destroy();
		}
		//</es-section>
	},
	onAlertsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('alertsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.alerts());
		//</es-section>
	}
});
