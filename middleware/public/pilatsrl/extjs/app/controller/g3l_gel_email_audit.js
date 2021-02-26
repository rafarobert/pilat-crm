/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Time: 0:23:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.g3lGelEmailAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'g3l-gel-email-audit.List',
		'g3l-gel-email-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'g3l_gel_email_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'g3lGelEmailAuditList',
			selector: 'g3lGelEmailAuditList'
		},
		{
			ref: 'g3lGelEmailAuditAdd',
			selector: 'g3lGelEmailAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'g3lGelEmailAuditList > toolbar > button#add': {
				click: me.onG3lGelEmailAuditAddClick
			},
			'g3lGelEmailAuditList':{
				removeRow: me.removeRow
			},
			'g3lGelEmailAuditAdd > form > button#save': {
				click: me.onG3lGelEmailAuditAddSaveClick
			},
			'g3lGelEmailAuditAdd > form > button#cancel': {
				click: me.onG3lGelEmailAuditAddCancelClick
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
	onG3lGelEmailAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getG3lGelEmailAuditAdd().destroy();
		//</es-section>
	},
	onG3lGelEmailAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getG3lGelEmailAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getG3lGelEmailAuditList().getStore().add(rec);

			me.getG3lGelEmailAuditAdd().destroy();
		}
		//</es-section>
	},
	onG3lGelEmailAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('g3lGelEmailAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.g3lGelEmailAudit());
		//</es-section>
	}
});
