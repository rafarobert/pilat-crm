/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:08 GMT-0400 (Bolivia Time)
 * Time: 2:44:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:8
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.sugarfeed', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'sugarfeed.List',
		'sugarfeed.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'sugarfeed'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'sugarfeedList',
			selector: 'sugarfeedList'
		},
		{
			ref: 'sugarfeedAdd',
			selector: 'sugarfeedAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'sugarfeedList > toolbar > button#add': {
				click: me.onSugarfeedAddClick
			},
			'sugarfeedList':{
				removeRow: me.removeRow
			},
			'sugarfeedAdd > form > button#save': {
				click: me.onSugarfeedAddSaveClick
			},
			'sugarfeedAdd > form > button#cancel': {
				click: me.onSugarfeedAddCancelClick
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
	onSugarfeedAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSugarfeedAdd().destroy();
		//</es-section>
	},
	onSugarfeedAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSugarfeedAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSugarfeedList().getStore().add(rec);

			me.getSugarfeedAdd().destroy();
		}
		//</es-section>
	},
	onSugarfeedAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('sugarfeedAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.sugarfeed());
		//</es-section>
	}
});
