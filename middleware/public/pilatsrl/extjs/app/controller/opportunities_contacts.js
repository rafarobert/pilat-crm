/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:28 GMT-0400 (Bolivia Time)
 * Time: 2:43:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:28
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.opportunitiesContacts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'opportunities-contacts.List',
		'opportunities-contacts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'opportunities_contacts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'opportunitiesContactsList',
			selector: 'opportunitiesContactsList'
		},
		{
			ref: 'opportunitiesContactsAdd',
			selector: 'opportunitiesContactsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'opportunitiesContactsList > toolbar > button#add': {
				click: me.onOpportunitiesContactsAddClick
			},
			'opportunitiesContactsList':{
				removeRow: me.removeRow
			},
			'opportunitiesContactsAdd > form > button#save': {
				click: me.onOpportunitiesContactsAddSaveClick
			},
			'opportunitiesContactsAdd > form > button#cancel': {
				click: me.onOpportunitiesContactsAddCancelClick
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
	onOpportunitiesContactsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOpportunitiesContactsAdd().destroy();
		//</es-section>
	},
	onOpportunitiesContactsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOpportunitiesContactsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOpportunitiesContactsList().getStore().add(rec);

			me.getOpportunitiesContactsAdd().destroy();
		}
		//</es-section>
	},
	onOpportunitiesContactsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('opportunitiesContactsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.opportunitiesContacts());
		//</es-section>
	}
});
