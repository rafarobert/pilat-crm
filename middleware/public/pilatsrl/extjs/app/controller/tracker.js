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

Ext.define('es.controller.tracker', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'tracker.List',
		'tracker.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'tracker'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'trackerList',
			selector: 'trackerList'
		},
		{
			ref: 'trackerAdd',
			selector: 'trackerAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'trackerList > toolbar > button#add': {
				click: me.onTrackerAddClick
			},
			'trackerList':{
				removeRow: me.removeRow
			},
			'trackerAdd > form > button#save': {
				click: me.onTrackerAddSaveClick
			},
			'trackerAdd > form > button#cancel': {
				click: me.onTrackerAddCancelClick
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
	onTrackerAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getTrackerAdd().destroy();
		//</es-section>
	},
	onTrackerAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getTrackerAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getTrackerList().getStore().add(rec);

			me.getTrackerAdd().destroy();
		}
		//</es-section>
	},
	onTrackerAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('trackerAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.tracker());
		//</es-section>
	}
});
