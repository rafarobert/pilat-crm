/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:26 GMT-0400 (Bolivia Time)
 * Time: 2:43:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:26
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.opportunitiesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'opportunities-audit.List',
		'opportunities-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'opportunities_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'opportunitiesAuditList',
			selector: 'opportunitiesAuditList'
		},
		{
			ref: 'opportunitiesAuditAdd',
			selector: 'opportunitiesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'opportunitiesAuditList > toolbar > button#add': {
				click: me.onOpportunitiesAuditAddClick
			},
			'opportunitiesAuditList':{
				removeRow: me.removeRow
			},
			'opportunitiesAuditAdd > form > button#save': {
				click: me.onOpportunitiesAuditAddSaveClick
			},
			'opportunitiesAuditAdd > form > button#cancel': {
				click: me.onOpportunitiesAuditAddCancelClick
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
	onOpportunitiesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOpportunitiesAuditAdd().destroy();
		//</es-section>
	},
	onOpportunitiesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOpportunitiesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOpportunitiesAuditList().getStore().add(rec);

			me.getOpportunitiesAuditAdd().destroy();
		}
		//</es-section>
	},
	onOpportunitiesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('opportunitiesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.opportunitiesAudit());
		//</es-section>
	}
});
