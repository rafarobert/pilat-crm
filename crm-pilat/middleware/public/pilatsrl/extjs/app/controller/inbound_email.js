/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:53 GMT-0400 (Bolivia Time)
 * Time: 2:42:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:53
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.inboundEmail', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'inbound-email.List',
		'inbound-email.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'inbound_email'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'inboundEmailList',
			selector: 'inboundEmailList'
		},
		{
			ref: 'inboundEmailAdd',
			selector: 'inboundEmailAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'inboundEmailList > toolbar > button#add': {
				click: me.onInboundEmailAddClick
			},
			'inboundEmailList':{
				removeRow: me.removeRow
			},
			'inboundEmailAdd > form > button#save': {
				click: me.onInboundEmailAddSaveClick
			},
			'inboundEmailAdd > form > button#cancel': {
				click: me.onInboundEmailAddCancelClick
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
	onInboundEmailAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getInboundEmailAdd().destroy();
		//</es-section>
	},
	onInboundEmailAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getInboundEmailAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getInboundEmailList().getStore().add(rec);

			me.getInboundEmailAdd().destroy();
		}
		//</es-section>
	},
	onInboundEmailAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('inboundEmailAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.inboundEmail());
		//</es-section>
	}
});
