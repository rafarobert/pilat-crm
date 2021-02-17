/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Time: 20:7:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Last time updated: 20:7:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.g3lGelWhatsappAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'g3l-gel-whatsapp-audit.List',
		'g3l-gel-whatsapp-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'g3l_gel_whatsapp_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'g3lGelWhatsappAuditList',
			selector: 'g3lGelWhatsappAuditList'
		},
		{
			ref: 'g3lGelWhatsappAuditAdd',
			selector: 'g3lGelWhatsappAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'g3lGelWhatsappAuditList > toolbar > button#add': {
				click: me.onG3lGelWhatsappAuditAddClick
			},
			'g3lGelWhatsappAuditList':{
				removeRow: me.removeRow
			},
			'g3lGelWhatsappAuditAdd > form > button#save': {
				click: me.onG3lGelWhatsappAuditAddSaveClick
			},
			'g3lGelWhatsappAuditAdd > form > button#cancel': {
				click: me.onG3lGelWhatsappAuditAddCancelClick
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
	onG3lGelWhatsappAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getG3lGelWhatsappAuditAdd().destroy();
		//</es-section>
	},
	onG3lGelWhatsappAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getG3lGelWhatsappAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getG3lGelWhatsappAuditList().getStore().add(rec);

			me.getG3lGelWhatsappAuditAdd().destroy();
		}
		//</es-section>
	},
	onG3lGelWhatsappAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('g3lGelWhatsappAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.g3lGelWhatsappAudit());
		//</es-section>
	}
});
