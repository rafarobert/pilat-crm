/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:54 GMT-0400 (Bolivia Time)
 * Time: 2:43:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:54
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.prospectListCampaigns', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'prospect-list-campaigns.List',
		'prospect-list-campaigns.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'prospect_list_campaigns'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'prospectListCampaignsList',
			selector: 'prospectListCampaignsList'
		},
		{
			ref: 'prospectListCampaignsAdd',
			selector: 'prospectListCampaignsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'prospectListCampaignsList > toolbar > button#add': {
				click: me.onProspectListCampaignsAddClick
			},
			'prospectListCampaignsList':{
				removeRow: me.removeRow
			},
			'prospectListCampaignsAdd > form > button#save': {
				click: me.onProspectListCampaignsAddSaveClick
			},
			'prospectListCampaignsAdd > form > button#cancel': {
				click: me.onProspectListCampaignsAddCancelClick
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
	onProspectListCampaignsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProspectListCampaignsAdd().destroy();
		//</es-section>
	},
	onProspectListCampaignsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProspectListCampaignsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProspectListCampaignsList().getStore().add(rec);

			me.getProspectListCampaignsAdd().destroy();
		}
		//</es-section>
	},
	onProspectListCampaignsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('prospectListCampaignsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.prospectListCampaigns());
		//</es-section>
	}
});
