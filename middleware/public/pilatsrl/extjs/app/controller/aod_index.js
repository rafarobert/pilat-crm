/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:10 GMT-0400 (Bolivia Time)
 * Time: 2:41:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:10
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aodIndex', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aod-index.List',
		'aod-index.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aod_index'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aodIndexList',
			selector: 'aodIndexList'
		},
		{
			ref: 'aodIndexAdd',
			selector: 'aodIndexAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aodIndexList > toolbar > button#add': {
				click: me.onAodIndexAddClick
			},
			'aodIndexList':{
				removeRow: me.removeRow
			},
			'aodIndexAdd > form > button#save': {
				click: me.onAodIndexAddSaveClick
			},
			'aodIndexAdd > form > button#cancel': {
				click: me.onAodIndexAddCancelClick
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
	onAodIndexAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAodIndexAdd().destroy();
		//</es-section>
	},
	onAodIndexAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAodIndexAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAodIndexList().getStore().add(rec);

			me.getAodIndexAdd().destroy();
		}
		//</es-section>
	},
	onAodIndexAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aodIndexAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aodIndex());
		//</es-section>
	}
});
