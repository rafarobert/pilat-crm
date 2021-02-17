/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:00 GMT-0400 (Bolivia Time)
 * Time: 2:41:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:0
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.amProjecttemplatesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-projecttemplates-audit.List',
		'am-projecttemplates-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_projecttemplates_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amProjecttemplatesAuditList',
			selector: 'amProjecttemplatesAuditList'
		},
		{
			ref: 'amProjecttemplatesAuditAdd',
			selector: 'amProjecttemplatesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amProjecttemplatesAuditList > toolbar > button#add': {
				click: me.onAmProjecttemplatesAuditAddClick
			},
			'amProjecttemplatesAuditList':{
				removeRow: me.removeRow
			},
			'amProjecttemplatesAuditAdd > form > button#save': {
				click: me.onAmProjecttemplatesAuditAddSaveClick
			},
			'amProjecttemplatesAuditAdd > form > button#cancel': {
				click: me.onAmProjecttemplatesAuditAddCancelClick
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
	onAmProjecttemplatesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmProjecttemplatesAuditAdd().destroy();
		//</es-section>
	},
	onAmProjecttemplatesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmProjecttemplatesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmProjecttemplatesAuditList().getStore().add(rec);

			me.getAmProjecttemplatesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAmProjecttemplatesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amProjecttemplatesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amProjecttemplatesAudit());
		//</es-section>
	}
});
