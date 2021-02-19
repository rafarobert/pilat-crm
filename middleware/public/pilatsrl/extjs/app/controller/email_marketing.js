/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:36 GMT-0400 (Bolivia Time)
 * Time: 2:42:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailMarketing', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-marketing.List',
		'email-marketing.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_marketing'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailMarketingList',
			selector: 'emailMarketingList'
		},
		{
			ref: 'emailMarketingAdd',
			selector: 'emailMarketingAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailMarketingList > toolbar > button#add': {
				click: me.onEmailMarketingAddClick
			},
			'emailMarketingList':{
				removeRow: me.removeRow
			},
			'emailMarketingAdd > form > button#save': {
				click: me.onEmailMarketingAddSaveClick
			},
			'emailMarketingAdd > form > button#cancel': {
				click: me.onEmailMarketingAddCancelClick
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
	onEmailMarketingAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailMarketingAdd().destroy();
		//</es-section>
	},
	onEmailMarketingAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailMarketingAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailMarketingList().getStore().add(rec);

			me.getEmailMarketingAdd().destroy();
		}
		//</es-section>
	},
	onEmailMarketingAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailMarketingAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailMarketing());
		//</es-section>
	}
});
