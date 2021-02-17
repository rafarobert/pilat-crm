/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:33 GMT-0400 (Bolivia Time)
 * Time: 2:42:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:33
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailAddresses', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-addresses.List',
		'email-addresses.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_addresses'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailAddressesList',
			selector: 'emailAddressesList'
		},
		{
			ref: 'emailAddressesAdd',
			selector: 'emailAddressesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailAddressesList > toolbar > button#add': {
				click: me.onEmailAddressesAddClick
			},
			'emailAddressesList':{
				removeRow: me.removeRow
			},
			'emailAddressesAdd > form > button#save': {
				click: me.onEmailAddressesAddSaveClick
			},
			'emailAddressesAdd > form > button#cancel': {
				click: me.onEmailAddressesAddCancelClick
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
	onEmailAddressesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailAddressesAdd().destroy();
		//</es-section>
	},
	onEmailAddressesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailAddressesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailAddressesList().getStore().add(rec);

			me.getEmailAddressesAdd().destroy();
		}
		//</es-section>
	},
	onEmailAddressesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailAddressesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailAddresses());
		//</es-section>
	}
});
