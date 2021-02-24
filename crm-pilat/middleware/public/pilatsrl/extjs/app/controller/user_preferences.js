/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:27 GMT-0400 (Bolivia Time)
 * Time: 2:44:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:27 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:27
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.userPreferences', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'user-preferences.List',
		'user-preferences.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'user_preferences'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'userPreferencesList',
			selector: 'userPreferencesList'
		},
		{
			ref: 'userPreferencesAdd',
			selector: 'userPreferencesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'userPreferencesList > toolbar > button#add': {
				click: me.onUserPreferencesAddClick
			},
			'userPreferencesList':{
				removeRow: me.removeRow
			},
			'userPreferencesAdd > form > button#save': {
				click: me.onUserPreferencesAddSaveClick
			},
			'userPreferencesAdd > form > button#cancel': {
				click: me.onUserPreferencesAddCancelClick
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
	onUserPreferencesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUserPreferencesAdd().destroy();
		//</es-section>
	},
	onUserPreferencesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUserPreferencesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUserPreferencesList().getStore().add(rec);

			me.getUserPreferencesAdd().destroy();
		}
		//</es-section>
	},
	onUserPreferencesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('userPreferencesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.userPreferences());
		//</es-section>
	}
});
