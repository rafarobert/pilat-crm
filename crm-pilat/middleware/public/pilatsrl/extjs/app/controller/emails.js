/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:30 GMT-0400 (Bolivia Time)
 * Time: 2:42:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:30 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:30
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emails', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'emails.List',
		'emails.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'emails'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailsList',
			selector: 'emailsList'
		},
		{
			ref: 'emailsAdd',
			selector: 'emailsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailsList > toolbar > button#add': {
				click: me.onEmailsAddClick
			},
			'emailsList':{
				removeRow: me.removeRow
			},
			'emailsAdd > form > button#save': {
				click: me.onEmailsAddSaveClick
			},
			'emailsAdd > form > button#cancel': {
				click: me.onEmailsAddCancelClick
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
	onEmailsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailsAdd().destroy();
		//</es-section>
	},
	onEmailsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailsList().getStore().add(rec);

			me.getEmailsAdd().destroy();
		}
		//</es-section>
	},
	onEmailsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emails());
		//</es-section>
	}
});
