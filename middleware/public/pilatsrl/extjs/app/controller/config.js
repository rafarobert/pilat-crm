/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:14 GMT-0400 (Bolivia Time)
 * Time: 2:42:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:14
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.config', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'config.List',
		'config.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'config'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'configList',
			selector: 'configList'
		},
		{
			ref: 'configAdd',
			selector: 'configAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'configList > toolbar > button#add': {
				click: me.onConfigAddClick
			},
			'configList':{
				removeRow: me.removeRow
			},
			'configAdd > form > button#save': {
				click: me.onConfigAddSaveClick
			},
			'configAdd > form > button#cancel': {
				click: me.onConfigAddCancelClick
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
	onConfigAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getConfigAdd().destroy();
		//</es-section>
	},
	onConfigAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getConfigAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getConfigList().getStore().add(rec);

			me.getConfigAdd().destroy();
		}
		//</es-section>
	},
	onConfigAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('configAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.config());
		//</es-section>
	}
});
