/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Time: 2:42:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:19
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.contactsCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'contacts-cstm.List',
		'contacts-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'contacts_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'contactsCstmList',
			selector: 'contactsCstmList'
		},
		{
			ref: 'contactsCstmAdd',
			selector: 'contactsCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'contactsCstmList > toolbar > button#add': {
				click: me.onContactsCstmAddClick
			},
			'contactsCstmList':{
				removeRow: me.removeRow
			},
			'contactsCstmAdd > form > button#save': {
				click: me.onContactsCstmAddSaveClick
			},
			'contactsCstmAdd > form > button#cancel': {
				click: me.onContactsCstmAddCancelClick
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
	onContactsCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getContactsCstmAdd().destroy();
		//</es-section>
	},
	onContactsCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getContactsCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getContactsCstmList().getStore().add(rec);

			me.getContactsCstmAdd().destroy();
		}
		//</es-section>
	},
	onContactsCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('contactsCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.contactsCstm());
		//</es-section>
	}
});
