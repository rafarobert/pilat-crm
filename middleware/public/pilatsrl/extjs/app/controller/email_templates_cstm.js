/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Time: 2:42:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:38
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailTemplatesCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-templates-cstm.List',
		'email-templates-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_templates_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailTemplatesCstmList',
			selector: 'emailTemplatesCstmList'
		},
		{
			ref: 'emailTemplatesCstmAdd',
			selector: 'emailTemplatesCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailTemplatesCstmList > toolbar > button#add': {
				click: me.onEmailTemplatesCstmAddClick
			},
			'emailTemplatesCstmList':{
				removeRow: me.removeRow
			},
			'emailTemplatesCstmAdd > form > button#save': {
				click: me.onEmailTemplatesCstmAddSaveClick
			},
			'emailTemplatesCstmAdd > form > button#cancel': {
				click: me.onEmailTemplatesCstmAddCancelClick
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
	onEmailTemplatesCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailTemplatesCstmAdd().destroy();
		//</es-section>
	},
	onEmailTemplatesCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailTemplatesCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailTemplatesCstmList().getStore().add(rec);

			me.getEmailTemplatesCstmAdd().destroy();
		}
		//</es-section>
	},
	onEmailTemplatesCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailTemplatesCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailTemplatesCstm());
		//</es-section>
	}
});
