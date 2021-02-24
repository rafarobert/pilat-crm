/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Time: 2:42:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:31
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailsBeans', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'emails-beans.List',
		'emails-beans.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'emails_beans'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailsBeansList',
			selector: 'emailsBeansList'
		},
		{
			ref: 'emailsBeansAdd',
			selector: 'emailsBeansAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailsBeansList > toolbar > button#add': {
				click: me.onEmailsBeansAddClick
			},
			'emailsBeansList':{
				removeRow: me.removeRow
			},
			'emailsBeansAdd > form > button#save': {
				click: me.onEmailsBeansAddSaveClick
			},
			'emailsBeansAdd > form > button#cancel': {
				click: me.onEmailsBeansAddCancelClick
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
	onEmailsBeansAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailsBeansAdd().destroy();
		//</es-section>
	},
	onEmailsBeansAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailsBeansAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailsBeansList().getStore().add(rec);

			me.getEmailsBeansAdd().destroy();
		}
		//</es-section>
	},
	onEmailsBeansAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailsBeansAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailsBeans());
		//</es-section>
	}
});
