/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Time: 2:42:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:54
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.inboundEmailCacheTs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'inbound-email-cache-ts.List',
		'inbound-email-cache-ts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'inbound_email_cache_ts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'inboundEmailCacheTsList',
			selector: 'inboundEmailCacheTsList'
		},
		{
			ref: 'inboundEmailCacheTsAdd',
			selector: 'inboundEmailCacheTsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'inboundEmailCacheTsList > toolbar > button#add': {
				click: me.onInboundEmailCacheTsAddClick
			},
			'inboundEmailCacheTsList':{
				removeRow: me.removeRow
			},
			'inboundEmailCacheTsAdd > form > button#save': {
				click: me.onInboundEmailCacheTsAddSaveClick
			},
			'inboundEmailCacheTsAdd > form > button#cancel': {
				click: me.onInboundEmailCacheTsAddCancelClick
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
	onInboundEmailCacheTsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getInboundEmailCacheTsAdd().destroy();
		//</es-section>
	},
	onInboundEmailCacheTsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getInboundEmailCacheTsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getInboundEmailCacheTsList().getStore().add(rec);

			me.getInboundEmailCacheTsAdd().destroy();
		}
		//</es-section>
	},
	onInboundEmailCacheTsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('inboundEmailCacheTsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.inboundEmailCacheTs());
		//</es-section>
	}
});
