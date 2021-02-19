/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:10 GMT-0400 (Bolivia Time)
 * Time: 2:42:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:10
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.campaignTrkrs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'campaign-trkrs.List',
		'campaign-trkrs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'campaign_trkrs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'campaignTrkrsList',
			selector: 'campaignTrkrsList'
		},
		{
			ref: 'campaignTrkrsAdd',
			selector: 'campaignTrkrsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'campaignTrkrsList > toolbar > button#add': {
				click: me.onCampaignTrkrsAddClick
			},
			'campaignTrkrsList':{
				removeRow: me.removeRow
			},
			'campaignTrkrsAdd > form > button#save': {
				click: me.onCampaignTrkrsAddSaveClick
			},
			'campaignTrkrsAdd > form > button#cancel': {
				click: me.onCampaignTrkrsAddCancelClick
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
	onCampaignTrkrsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCampaignTrkrsAdd().destroy();
		//</es-section>
	},
	onCampaignTrkrsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCampaignTrkrsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCampaignTrkrsList().getStore().add(rec);

			me.getCampaignTrkrsAdd().destroy();
		}
		//</es-section>
	},
	onCampaignTrkrsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('campaignTrkrsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.campaignTrkrs());
		//</es-section>
	}
});
