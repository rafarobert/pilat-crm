/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:14 GMT-0400 (Bolivia Time)
 * Time: 2:41:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:14
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aodIndexAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aod-index-audit.List',
		'aod-index-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aod_index_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aodIndexAuditList',
			selector: 'aodIndexAuditList'
		},
		{
			ref: 'aodIndexAuditAdd',
			selector: 'aodIndexAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aodIndexAuditList > toolbar > button#add': {
				click: me.onAodIndexAuditAddClick
			},
			'aodIndexAuditList':{
				removeRow: me.removeRow
			},
			'aodIndexAuditAdd > form > button#save': {
				click: me.onAodIndexAuditAddSaveClick
			},
			'aodIndexAuditAdd > form > button#cancel': {
				click: me.onAodIndexAuditAddCancelClick
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
	onAodIndexAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAodIndexAuditAdd().destroy();
		//</es-section>
	},
	onAodIndexAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAodIndexAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAodIndexAuditList().getStore().add(rec);

			me.getAodIndexAuditAdd().destroy();
		}
		//</es-section>
	},
	onAodIndexAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aodIndexAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aodIndexAudit());
		//</es-section>
	}
});
