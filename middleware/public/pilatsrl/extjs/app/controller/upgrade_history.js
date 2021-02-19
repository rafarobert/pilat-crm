/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:21 GMT-0400 (Bolivia Time)
 * Time: 2:44:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:21
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.upgradeHistory', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'upgrade-history.List',
		'upgrade-history.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'upgrade_history'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'upgradeHistoryList',
			selector: 'upgradeHistoryList'
		},
		{
			ref: 'upgradeHistoryAdd',
			selector: 'upgradeHistoryAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'upgradeHistoryList > toolbar > button#add': {
				click: me.onUpgradeHistoryAddClick
			},
			'upgradeHistoryList':{
				removeRow: me.removeRow
			},
			'upgradeHistoryAdd > form > button#save': {
				click: me.onUpgradeHistoryAddSaveClick
			},
			'upgradeHistoryAdd > form > button#cancel': {
				click: me.onUpgradeHistoryAddCancelClick
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
	onUpgradeHistoryAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUpgradeHistoryAdd().destroy();
		//</es-section>
	},
	onUpgradeHistoryAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUpgradeHistoryAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUpgradeHistoryList().getStore().add(rec);

			me.getUpgradeHistoryAdd().destroy();
		}
		//</es-section>
	},
	onUpgradeHistoryAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('upgradeHistoryAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.upgradeHistory());
		//</es-section>
	}
});
