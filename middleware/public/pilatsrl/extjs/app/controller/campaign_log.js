/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:09 GMT-0400 (Bolivia Time)
 * Time: 2:42:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:9
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.campaignLog', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'campaign-log.List',
		'campaign-log.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'campaign_log'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'campaignLogList',
			selector: 'campaignLogList'
		},
		{
			ref: 'campaignLogAdd',
			selector: 'campaignLogAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'campaignLogList > toolbar > button#add': {
				click: me.onCampaignLogAddClick
			},
			'campaignLogList':{
				removeRow: me.removeRow
			},
			'campaignLogAdd > form > button#save': {
				click: me.onCampaignLogAddSaveClick
			},
			'campaignLogAdd > form > button#cancel': {
				click: me.onCampaignLogAddCancelClick
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
	onCampaignLogAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCampaignLogAdd().destroy();
		//</es-section>
	},
	onCampaignLogAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCampaignLogAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCampaignLogList().getStore().add(rec);

			me.getCampaignLogAdd().destroy();
		}
		//</es-section>
	},
	onCampaignLogAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('campaignLogAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.campaignLog());
		//</es-section>
	}
});
