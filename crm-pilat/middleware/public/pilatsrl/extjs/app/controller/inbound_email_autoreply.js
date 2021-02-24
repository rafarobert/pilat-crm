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

Ext.define('es.controller.inboundEmailAutoreply', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'inbound-email-autoreply.List',
		'inbound-email-autoreply.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'inbound_email_autoreply'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'inboundEmailAutoreplyList',
			selector: 'inboundEmailAutoreplyList'
		},
		{
			ref: 'inboundEmailAutoreplyAdd',
			selector: 'inboundEmailAutoreplyAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'inboundEmailAutoreplyList > toolbar > button#add': {
				click: me.onInboundEmailAutoreplyAddClick
			},
			'inboundEmailAutoreplyList':{
				removeRow: me.removeRow
			},
			'inboundEmailAutoreplyAdd > form > button#save': {
				click: me.onInboundEmailAutoreplyAddSaveClick
			},
			'inboundEmailAutoreplyAdd > form > button#cancel': {
				click: me.onInboundEmailAutoreplyAddCancelClick
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
	onInboundEmailAutoreplyAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getInboundEmailAutoreplyAdd().destroy();
		//</es-section>
	},
	onInboundEmailAutoreplyAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getInboundEmailAutoreplyAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getInboundEmailAutoreplyList().getStore().add(rec);

			me.getInboundEmailAutoreplyAdd().destroy();
		}
		//</es-section>
	},
	onInboundEmailAutoreplyAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('inboundEmailAutoreplyAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.inboundEmailAutoreply());
		//</es-section>
	}
});
