/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:06 GMT-0400 (Bolivia Time)
 * Time: 2:42:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:6
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.campaigns', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'campaigns.List',
		'campaigns.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'campaigns'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'campaignsList',
			selector: 'campaignsList'
		},
		{
			ref: 'campaignsAdd',
			selector: 'campaignsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'campaignsList > toolbar > button#add': {
				click: me.onCampaignsAddClick
			},
			'campaignsList':{
				removeRow: me.removeRow
			},
			'campaignsAdd > form > button#save': {
				click: me.onCampaignsAddSaveClick
			},
			'campaignsAdd > form > button#cancel': {
				click: me.onCampaignsAddCancelClick
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
	onCampaignsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCampaignsAdd().destroy();
		//</es-section>
	},
	onCampaignsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCampaignsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCampaignsList().getStore().add(rec);

			me.getCampaignsAdd().destroy();
		}
		//</es-section>
	},
	onCampaignsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('campaignsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.campaigns());
		//</es-section>
	}
});
