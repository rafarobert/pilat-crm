/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:12 GMT-0400 (Bolivia Time)
 * Time: 2:41:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:12
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aodIndexeventAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aod-indexevent-audit.List',
		'aod-indexevent-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aod_indexevent_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aodIndexeventAuditList',
			selector: 'aodIndexeventAuditList'
		},
		{
			ref: 'aodIndexeventAuditAdd',
			selector: 'aodIndexeventAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aodIndexeventAuditList > toolbar > button#add': {
				click: me.onAodIndexeventAuditAddClick
			},
			'aodIndexeventAuditList':{
				removeRow: me.removeRow
			},
			'aodIndexeventAuditAdd > form > button#save': {
				click: me.onAodIndexeventAuditAddSaveClick
			},
			'aodIndexeventAuditAdd > form > button#cancel': {
				click: me.onAodIndexeventAuditAddCancelClick
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
	onAodIndexeventAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAodIndexeventAuditAdd().destroy();
		//</es-section>
	},
	onAodIndexeventAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAodIndexeventAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAodIndexeventAuditList().getStore().add(rec);

			me.getAodIndexeventAuditAdd().destroy();
		}
		//</es-section>
	},
	onAodIndexeventAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aodIndexeventAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aodIndexeventAudit());
		//</es-section>
	}
});
