/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:06 GMT-0400 (Bolivia Time)
 * Time: 2:41:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:6
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.amTasktemplatesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-tasktemplates-audit.List',
		'am-tasktemplates-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_tasktemplates_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amTasktemplatesAuditList',
			selector: 'amTasktemplatesAuditList'
		},
		{
			ref: 'amTasktemplatesAuditAdd',
			selector: 'amTasktemplatesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amTasktemplatesAuditList > toolbar > button#add': {
				click: me.onAmTasktemplatesAuditAddClick
			},
			'amTasktemplatesAuditList':{
				removeRow: me.removeRow
			},
			'amTasktemplatesAuditAdd > form > button#save': {
				click: me.onAmTasktemplatesAuditAddSaveClick
			},
			'amTasktemplatesAuditAdd > form > button#cancel': {
				click: me.onAmTasktemplatesAuditAddCancelClick
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
	onAmTasktemplatesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmTasktemplatesAuditAdd().destroy();
		//</es-section>
	},
	onAmTasktemplatesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmTasktemplatesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmTasktemplatesAuditList().getStore().add(rec);

			me.getAmTasktemplatesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAmTasktemplatesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amTasktemplatesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amTasktemplatesAudit());
		//</es-section>
	}
});
