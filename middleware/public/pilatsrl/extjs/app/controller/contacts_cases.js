/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:18 GMT-0400 (Bolivia Time)
 * Time: 2:42:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:18
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.contactsCases', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'contacts-cases.List',
		'contacts-cases.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'contacts_cases'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'contactsCasesList',
			selector: 'contactsCasesList'
		},
		{
			ref: 'contactsCasesAdd',
			selector: 'contactsCasesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'contactsCasesList > toolbar > button#add': {
				click: me.onContactsCasesAddClick
			},
			'contactsCasesList':{
				removeRow: me.removeRow
			},
			'contactsCasesAdd > form > button#save': {
				click: me.onContactsCasesAddSaveClick
			},
			'contactsCasesAdd > form > button#cancel': {
				click: me.onContactsCasesAddCancelClick
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
	onContactsCasesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getContactsCasesAdd().destroy();
		//</es-section>
	},
	onContactsCasesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getContactsCasesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getContactsCasesList().getStore().add(rec);

			me.getContactsCasesAdd().destroy();
		}
		//</es-section>
	},
	onContactsCasesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('contactsCasesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.contactsCases());
		//</es-section>
	}
});
