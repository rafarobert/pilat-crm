/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Time: 2:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailAddrBeanRel', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-addr-bean-rel.List',
		'email-addr-bean-rel.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_addr_bean_rel'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailAddrBeanRelList',
			selector: 'emailAddrBeanRelList'
		},
		{
			ref: 'emailAddrBeanRelAdd',
			selector: 'emailAddrBeanRelAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailAddrBeanRelList > toolbar > button#add': {
				click: me.onEmailAddrBeanRelAddClick
			},
			'emailAddrBeanRelList':{
				removeRow: me.removeRow
			},
			'emailAddrBeanRelAdd > form > button#save': {
				click: me.onEmailAddrBeanRelAddSaveClick
			},
			'emailAddrBeanRelAdd > form > button#cancel': {
				click: me.onEmailAddrBeanRelAddCancelClick
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
	onEmailAddrBeanRelAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailAddrBeanRelAdd().destroy();
		//</es-section>
	},
	onEmailAddrBeanRelAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailAddrBeanRelAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailAddrBeanRelList().getStore().add(rec);

			me.getEmailAddrBeanRelAdd().destroy();
		}
		//</es-section>
	},
	onEmailAddrBeanRelAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailAddrBeanRelAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailAddrBeanRel());
		//</es-section>
	}
});
