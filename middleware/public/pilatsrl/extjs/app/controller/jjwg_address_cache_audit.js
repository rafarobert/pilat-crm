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

Ext.define('es.controller.jjwgAddressCacheAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-address-cache-audit.List',
		'jjwg-address-cache-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_address_cache_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgAddressCacheAuditList',
			selector: 'jjwgAddressCacheAuditList'
		},
		{
			ref: 'jjwgAddressCacheAuditAdd',
			selector: 'jjwgAddressCacheAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgAddressCacheAuditList > toolbar > button#add': {
				click: me.onJjwgAddressCacheAuditAddClick
			},
			'jjwgAddressCacheAuditList':{
				removeRow: me.removeRow
			},
			'jjwgAddressCacheAuditAdd > form > button#save': {
				click: me.onJjwgAddressCacheAuditAddSaveClick
			},
			'jjwgAddressCacheAuditAdd > form > button#cancel': {
				click: me.onJjwgAddressCacheAuditAddCancelClick
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
	onJjwgAddressCacheAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgAddressCacheAuditAdd().destroy();
		//</es-section>
	},
	onJjwgAddressCacheAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgAddressCacheAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgAddressCacheAuditList().getStore().add(rec);

			me.getJjwgAddressCacheAuditAdd().destroy();
		}
		//</es-section>
	},
	onJjwgAddressCacheAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgAddressCacheAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgAddressCacheAudit());
		//</es-section>
	}
});
