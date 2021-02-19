/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Time: 2:44:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:24
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.usersCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'users-cstm.List',
		'users-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'users_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'usersCstmList',
			selector: 'usersCstmList'
		},
		{
			ref: 'usersCstmAdd',
			selector: 'usersCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'usersCstmList > toolbar > button#add': {
				click: me.onUsersCstmAddClick
			},
			'usersCstmList':{
				removeRow: me.removeRow
			},
			'usersCstmAdd > form > button#save': {
				click: me.onUsersCstmAddSaveClick
			},
			'usersCstmAdd > form > button#cancel': {
				click: me.onUsersCstmAddCancelClick
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
	onUsersCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUsersCstmAdd().destroy();
		//</es-section>
	},
	onUsersCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUsersCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUsersCstmList().getStore().add(rec);

			me.getUsersCstmAdd().destroy();
		}
		//</es-section>
	},
	onUsersCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('usersCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.usersCstm());
		//</es-section>
	}
});
