/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:37 GMT-0400 (Bolivia Time)
 * Time: 2:42:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailTemplates', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-templates.List',
		'email-templates.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_templates'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailTemplatesList',
			selector: 'emailTemplatesList'
		},
		{
			ref: 'emailTemplatesAdd',
			selector: 'emailTemplatesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailTemplatesList > toolbar > button#add': {
				click: me.onEmailTemplatesAddClick
			},
			'emailTemplatesList':{
				removeRow: me.removeRow
			},
			'emailTemplatesAdd > form > button#save': {
				click: me.onEmailTemplatesAddSaveClick
			},
			'emailTemplatesAdd > form > button#cancel': {
				click: me.onEmailTemplatesAddCancelClick
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
	onEmailTemplatesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailTemplatesAdd().destroy();
		//</es-section>
	},
	onEmailTemplatesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailTemplatesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailTemplatesList().getStore().add(rec);

			me.getEmailTemplatesAdd().destroy();
		}
		//</es-section>
	},
	onEmailTemplatesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailTemplatesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailTemplates());
		//</es-section>
	}
});
