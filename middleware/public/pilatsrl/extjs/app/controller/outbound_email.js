/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:31 GMT-0400 (Bolivia Time)
 * Time: 2:43:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:31
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.outboundEmail', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'outbound-email.List',
		'outbound-email.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'outbound_email'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'outboundEmailList',
			selector: 'outboundEmailList'
		},
		{
			ref: 'outboundEmailAdd',
			selector: 'outboundEmailAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'outboundEmailList > toolbar > button#add': {
				click: me.onOutboundEmailAddClick
			},
			'outboundEmailList':{
				removeRow: me.removeRow
			},
			'outboundEmailAdd > form > button#save': {
				click: me.onOutboundEmailAddSaveClick
			},
			'outboundEmailAdd > form > button#cancel': {
				click: me.onOutboundEmailAddCancelClick
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
	onOutboundEmailAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOutboundEmailAdd().destroy();
		//</es-section>
	},
	onOutboundEmailAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOutboundEmailAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOutboundEmailList().getStore().add(rec);

			me.getOutboundEmailAdd().destroy();
		}
		//</es-section>
	},
	onOutboundEmailAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('outboundEmailAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.outboundEmail());
		//</es-section>
	}
});
