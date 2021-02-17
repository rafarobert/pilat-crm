/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:11 GMT-0400 (Bolivia Time)
 * Time: 2:41:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:11 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:11
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aodIndexevent', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aod-indexevent.List',
		'aod-indexevent.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aod_indexevent'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aodIndexeventList',
			selector: 'aodIndexeventList'
		},
		{
			ref: 'aodIndexeventAdd',
			selector: 'aodIndexeventAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aodIndexeventList > toolbar > button#add': {
				click: me.onAodIndexeventAddClick
			},
			'aodIndexeventList':{
				removeRow: me.removeRow
			},
			'aodIndexeventAdd > form > button#save': {
				click: me.onAodIndexeventAddSaveClick
			},
			'aodIndexeventAdd > form > button#cancel': {
				click: me.onAodIndexeventAddCancelClick
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
	onAodIndexeventAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAodIndexeventAdd().destroy();
		//</es-section>
	},
	onAodIndexeventAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAodIndexeventAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAodIndexeventList().getStore().add(rec);

			me.getAodIndexeventAdd().destroy();
		}
		//</es-section>
	},
	onAodIndexeventAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aodIndexeventAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aodIndexevent());
		//</es-section>
	}
});
