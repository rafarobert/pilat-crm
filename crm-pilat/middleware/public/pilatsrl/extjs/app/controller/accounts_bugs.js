/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:48 GMT-0400 (Bolivia Time)
 * Time: 2:40:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.accountsBugs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'accounts-bugs.List',
		'accounts-bugs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'accounts_bugs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'accountsBugsList',
			selector: 'accountsBugsList'
		},
		{
			ref: 'accountsBugsAdd',
			selector: 'accountsBugsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'accountsBugsList > toolbar > button#add': {
				click: me.onAccountsBugsAddClick
			},
			'accountsBugsList':{
				removeRow: me.removeRow
			},
			'accountsBugsAdd > form > button#save': {
				click: me.onAccountsBugsAddSaveClick
			},
			'accountsBugsAdd > form > button#cancel': {
				click: me.onAccountsBugsAddCancelClick
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
	onAccountsBugsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAccountsBugsAdd().destroy();
		//</es-section>
	},
	onAccountsBugsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAccountsBugsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAccountsBugsList().getStore().add(rec);

			me.getAccountsBugsAdd().destroy();
		}
		//</es-section>
	},
	onAccountsBugsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('accountsBugsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.accountsBugs());
		//</es-section>
	}
});
