/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:55 GMT-0400 (Bolivia Time)
 * Time: 2:42:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:55
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgAddressCache', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-address-cache.List',
		'jjwg-address-cache.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_address_cache'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgAddressCacheList',
			selector: 'jjwgAddressCacheList'
		},
		{
			ref: 'jjwgAddressCacheAdd',
			selector: 'jjwgAddressCacheAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgAddressCacheList > toolbar > button#add': {
				click: me.onJjwgAddressCacheAddClick
			},
			'jjwgAddressCacheList':{
				removeRow: me.removeRow
			},
			'jjwgAddressCacheAdd > form > button#save': {
				click: me.onJjwgAddressCacheAddSaveClick
			},
			'jjwgAddressCacheAdd > form > button#cancel': {
				click: me.onJjwgAddressCacheAddCancelClick
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
	onJjwgAddressCacheAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgAddressCacheAdd().destroy();
		//</es-section>
	},
	onJjwgAddressCacheAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgAddressCacheAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgAddressCacheList().getStore().add(rec);

			me.getJjwgAddressCacheAdd().destroy();
		}
		//</es-section>
	},
	onJjwgAddressCacheAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgAddressCacheAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgAddressCache());
		//</es-section>
	}
});
