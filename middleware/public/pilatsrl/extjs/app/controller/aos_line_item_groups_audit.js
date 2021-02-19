/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:37 GMT-0400 (Bolivia Time)
 * Time: 2:41:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosLineItemGroupsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-line-item-groups-audit.List',
		'aos-line-item-groups-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_line_item_groups_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosLineItemGroupsAuditList',
			selector: 'aosLineItemGroupsAuditList'
		},
		{
			ref: 'aosLineItemGroupsAuditAdd',
			selector: 'aosLineItemGroupsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosLineItemGroupsAuditList > toolbar > button#add': {
				click: me.onAosLineItemGroupsAuditAddClick
			},
			'aosLineItemGroupsAuditList':{
				removeRow: me.removeRow
			},
			'aosLineItemGroupsAuditAdd > form > button#save': {
				click: me.onAosLineItemGroupsAuditAddSaveClick
			},
			'aosLineItemGroupsAuditAdd > form > button#cancel': {
				click: me.onAosLineItemGroupsAuditAddCancelClick
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
	onAosLineItemGroupsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosLineItemGroupsAuditAdd().destroy();
		//</es-section>
	},
	onAosLineItemGroupsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosLineItemGroupsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosLineItemGroupsAuditList().getStore().add(rec);

			me.getAosLineItemGroupsAuditAdd().destroy();
		}
		//</es-section>
	},
	onAosLineItemGroupsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosLineItemGroupsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosLineItemGroupsAudit());
		//</es-section>
	}
});
