/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:49 GMT-0400 (Bolivia Time)
 * Time: 2:42:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEventLocationsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-event-locations-audit.List',
		'fp-event-locations-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_event_locations_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventLocationsAuditList',
			selector: 'fpEventLocationsAuditList'
		},
		{
			ref: 'fpEventLocationsAuditAdd',
			selector: 'fpEventLocationsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventLocationsAuditList > toolbar > button#add': {
				click: me.onFpEventLocationsAuditAddClick
			},
			'fpEventLocationsAuditList':{
				removeRow: me.removeRow
			},
			'fpEventLocationsAuditAdd > form > button#save': {
				click: me.onFpEventLocationsAuditAddSaveClick
			},
			'fpEventLocationsAuditAdd > form > button#cancel': {
				click: me.onFpEventLocationsAuditAddCancelClick
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
	onFpEventLocationsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventLocationsAuditAdd().destroy();
		//</es-section>
	},
	onFpEventLocationsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventLocationsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventLocationsAuditList().getStore().add(rec);

			me.getFpEventLocationsAuditAdd().destroy();
		}
		//</es-section>
	},
	onFpEventLocationsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventLocationsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventLocationsAudit());
		//</es-section>
	}
});
