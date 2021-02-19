/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:32 GMT-0400 (Bolivia Time)
 * Time: 2:42:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:32
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailsEmailAddrRel', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'emails-email-addr-rel.List',
		'emails-email-addr-rel.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'emails_email_addr_rel'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailsEmailAddrRelList',
			selector: 'emailsEmailAddrRelList'
		},
		{
			ref: 'emailsEmailAddrRelAdd',
			selector: 'emailsEmailAddrRelAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailsEmailAddrRelList > toolbar > button#add': {
				click: me.onEmailsEmailAddrRelAddClick
			},
			'emailsEmailAddrRelList':{
				removeRow: me.removeRow
			},
			'emailsEmailAddrRelAdd > form > button#save': {
				click: me.onEmailsEmailAddrRelAddSaveClick
			},
			'emailsEmailAddrRelAdd > form > button#cancel': {
				click: me.onEmailsEmailAddrRelAddCancelClick
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
	onEmailsEmailAddrRelAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailsEmailAddrRelAdd().destroy();
		//</es-section>
	},
	onEmailsEmailAddrRelAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailsEmailAddrRelAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailsEmailAddrRelList().getStore().add(rec);

			me.getEmailsEmailAddrRelAdd().destroy();
		}
		//</es-section>
	},
	onEmailsEmailAddrRelAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailsEmailAddrRelAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailsEmailAddrRel());
		//</es-section>
	}
});
