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

Ext.define('es.controller.emailsText', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'emails-text.List',
		'emails-text.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'emails_text'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailsTextList',
			selector: 'emailsTextList'
		},
		{
			ref: 'emailsTextAdd',
			selector: 'emailsTextAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailsTextList > toolbar > button#add': {
				click: me.onEmailsTextAddClick
			},
			'emailsTextList':{
				removeRow: me.removeRow
			},
			'emailsTextAdd > form > button#save': {
				click: me.onEmailsTextAddSaveClick
			},
			'emailsTextAdd > form > button#cancel': {
				click: me.onEmailsTextAddCancelClick
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
	onEmailsTextAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailsTextAdd().destroy();
		//</es-section>
	},
	onEmailsTextAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailsTextAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailsTextList().getStore().add(rec);

			me.getEmailsTextAdd().destroy();
		}
		//</es-section>
	},
	onEmailsTextAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailsTextAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailsText());
		//</es-section>
	}
});
