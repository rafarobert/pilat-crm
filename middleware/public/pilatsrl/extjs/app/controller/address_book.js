/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:55 GMT-0400 (Bolivia Time)
 * Time: 2:40:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:55
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.addressBook', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'address-book.List',
		'address-book.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'address_book'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'addressBookList',
			selector: 'addressBookList'
		},
		{
			ref: 'addressBookAdd',
			selector: 'addressBookAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'addressBookList > toolbar > button#add': {
				click: me.onAddressBookAddClick
			},
			'addressBookList':{
				removeRow: me.removeRow
			},
			'addressBookAdd > form > button#save': {
				click: me.onAddressBookAddSaveClick
			},
			'addressBookAdd > form > button#cancel': {
				click: me.onAddressBookAddCancelClick
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
	onAddressBookAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAddressBookAdd().destroy();
		//</es-section>
	},
	onAddressBookAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAddressBookAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAddressBookList().getStore().add(rec);

			me.getAddressBookAdd().destroy();
		}
		//</es-section>
	},
	onAddressBookAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('addressBookAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.addressBook());
		//</es-section>
	}
});
