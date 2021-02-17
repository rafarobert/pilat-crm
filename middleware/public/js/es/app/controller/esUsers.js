/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Time: 2:25:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:33
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esUsers', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-users.List',
		'es-users.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esUsers'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esUsersList',
			selector: 'esUsersList'
		},
		{
			ref: 'esUsersAdd',
			selector: 'esUsersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esUsersList > toolbar > button#add': {
				click: me.onEsUsersAddClick
			},
			'esUsersList':{
				removeRow: me.removeRow
			},
			'esUsersAdd > form > button#save': {
				click: me.onEsUsersAddSaveClick
			},
			'esUsersAdd > form > button#cancel': {
				click: me.onEsUsersAddCancelClick
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
	onEsUsersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsUsersAdd().destroy();
		//</es-section>
	},
	onEsUsersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsUsersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsUsersList().getStore().add(rec);

			me.getEsUsersAdd().destroy();
		}
		//</es-section>
	},
	onEsUsersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esUsersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esUsers());
		//</es-section>
	}
});
