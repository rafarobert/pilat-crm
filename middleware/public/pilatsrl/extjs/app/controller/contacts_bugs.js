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

Ext.define('es.controller.contactsBugs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'contacts-bugs.List',
		'contacts-bugs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'contacts_bugs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'contactsBugsList',
			selector: 'contactsBugsList'
		},
		{
			ref: 'contactsBugsAdd',
			selector: 'contactsBugsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'contactsBugsList > toolbar > button#add': {
				click: me.onContactsBugsAddClick
			},
			'contactsBugsList':{
				removeRow: me.removeRow
			},
			'contactsBugsAdd > form > button#save': {
				click: me.onContactsBugsAddSaveClick
			},
			'contactsBugsAdd > form > button#cancel': {
				click: me.onContactsBugsAddCancelClick
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
	onContactsBugsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getContactsBugsAdd().destroy();
		//</es-section>
	},
	onContactsBugsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getContactsBugsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getContactsBugsList().getStore().add(rec);

			me.getContactsBugsAdd().destroy();
		}
		//</es-section>
	},
	onContactsBugsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('contactsBugsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.contactsBugs());
		//</es-section>
	}
});
