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

Ext.define('es.controller.emailMarketingProspectLists', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-marketing-prospect-lists.List',
		'email-marketing-prospect-lists.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_marketing_prospect_lists'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailMarketingProspectListsList',
			selector: 'emailMarketingProspectListsList'
		},
		{
			ref: 'emailMarketingProspectListsAdd',
			selector: 'emailMarketingProspectListsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailMarketingProspectListsList > toolbar > button#add': {
				click: me.onEmailMarketingProspectListsAddClick
			},
			'emailMarketingProspectListsList':{
				removeRow: me.removeRow
			},
			'emailMarketingProspectListsAdd > form > button#save': {
				click: me.onEmailMarketingProspectListsAddSaveClick
			},
			'emailMarketingProspectListsAdd > form > button#cancel': {
				click: me.onEmailMarketingProspectListsAddCancelClick
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
	onEmailMarketingProspectListsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailMarketingProspectListsAdd().destroy();
		//</es-section>
	},
	onEmailMarketingProspectListsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailMarketingProspectListsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailMarketingProspectListsList().getStore().add(rec);

			me.getEmailMarketingProspectListsAdd().destroy();
		}
		//</es-section>
	},
	onEmailMarketingProspectListsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailMarketingProspectListsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailMarketingProspectLists());
		//</es-section>
	}
});
