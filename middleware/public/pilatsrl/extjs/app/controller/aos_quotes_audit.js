/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Time: 2:41:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:50
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosQuotesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-quotes-audit.List',
		'aos-quotes-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_quotes_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosQuotesAuditList',
			selector: 'aosQuotesAuditList'
		},
		{
			ref: 'aosQuotesAuditAdd',
			selector: 'aosQuotesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosQuotesAuditList > toolbar > button#add': {
				click: me.onAosQuotesAuditAddClick
			},
			'aosQuotesAuditList':{
				removeRow: me.removeRow
			},
			'aosQuotesAuditAdd > form > button#save': {
				click: me.onAosQuotesAuditAddSaveClick
			},
			'aosQuotesAuditAdd > form > button#cancel': {
				click: me.onAosQuotesAuditAddCancelClick
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
	onAosQuotesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosQuotesAuditAdd().destroy();
		//</es-section>
	},
	onAosQuotesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosQuotesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosQuotesAuditList().getStore().add(rec);

			me.getAosQuotesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAosQuotesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosQuotesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosQuotesAudit());
		//</es-section>
	}
});
