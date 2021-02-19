/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:26 GMT-0400 (Bolivia Time)
 * Time: 2:44:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:26
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.usersSignatures', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'users-signatures.List',
		'users-signatures.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'users_signatures'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'usersSignaturesList',
			selector: 'usersSignaturesList'
		},
		{
			ref: 'usersSignaturesAdd',
			selector: 'usersSignaturesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'usersSignaturesList > toolbar > button#add': {
				click: me.onUsersSignaturesAddClick
			},
			'usersSignaturesList':{
				removeRow: me.removeRow
			},
			'usersSignaturesAdd > form > button#save': {
				click: me.onUsersSignaturesAddSaveClick
			},
			'usersSignaturesAdd > form > button#cancel': {
				click: me.onUsersSignaturesAddCancelClick
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
	onUsersSignaturesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUsersSignaturesAdd().destroy();
		//</es-section>
	},
	onUsersSignaturesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUsersSignaturesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUsersSignaturesList().getStore().add(rec);

			me.getUsersSignaturesAdd().destroy();
		}
		//</es-section>
	},
	onUsersSignaturesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('usersSignaturesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.usersSignatures());
		//</es-section>
	}
});
