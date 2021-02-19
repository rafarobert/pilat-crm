/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:01 GMT-0400 (Bolivia Time)
 * Time: 2:41:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:1
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.amProjecttemplatesContacts1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-projecttemplates-contacts-1-c.List',
		'am-projecttemplates-contacts-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_projecttemplates_contacts_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amProjecttemplatesContacts1CList',
			selector: 'amProjecttemplatesContacts1CList'
		},
		{
			ref: 'amProjecttemplatesContacts1CAdd',
			selector: 'amProjecttemplatesContacts1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amProjecttemplatesContacts1CList > toolbar > button#add': {
				click: me.onAmProjecttemplatesContacts1CAddClick
			},
			'amProjecttemplatesContacts1CList':{
				removeRow: me.removeRow
			},
			'amProjecttemplatesContacts1CAdd > form > button#save': {
				click: me.onAmProjecttemplatesContacts1CAddSaveClick
			},
			'amProjecttemplatesContacts1CAdd > form > button#cancel': {
				click: me.onAmProjecttemplatesContacts1CAddCancelClick
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
	onAmProjecttemplatesContacts1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmProjecttemplatesContacts1CAdd().destroy();
		//</es-section>
	},
	onAmProjecttemplatesContacts1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmProjecttemplatesContacts1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmProjecttemplatesContacts1CList().getStore().add(rec);

			me.getAmProjecttemplatesContacts1CAdd().destroy();
		}
		//</es-section>
	},
	onAmProjecttemplatesContacts1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amProjecttemplatesContacts1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amProjecttemplatesContacts1C());
		//</es-section>
	}
});
