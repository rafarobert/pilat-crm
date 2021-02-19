/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:50 GMT-0400 (Bolivia Time)
 * Time: 2:40:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:50
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.accountsCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'accounts-cstm.List',
		'accounts-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'accounts_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'accountsCstmList',
			selector: 'accountsCstmList'
		},
		{
			ref: 'accountsCstmAdd',
			selector: 'accountsCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'accountsCstmList > toolbar > button#add': {
				click: me.onAccountsCstmAddClick
			},
			'accountsCstmList':{
				removeRow: me.removeRow
			},
			'accountsCstmAdd > form > button#save': {
				click: me.onAccountsCstmAddSaveClick
			},
			'accountsCstmAdd > form > button#cancel': {
				click: me.onAccountsCstmAddCancelClick
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
	onAccountsCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAccountsCstmAdd().destroy();
		//</es-section>
	},
	onAccountsCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAccountsCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAccountsCstmList().getStore().add(rec);

			me.getAccountsCstmAdd().destroy();
		}
		//</es-section>
	},
	onAccountsCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('accountsCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.accountsCstm());
		//</es-section>
	}
});
