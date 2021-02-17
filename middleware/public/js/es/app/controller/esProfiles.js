/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Time: 2:25:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esProfiles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-profiles.List',
		'es-profiles.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esProfiles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esProfilesList',
			selector: 'esProfilesList'
		},
		{
			ref: 'esProfilesAdd',
			selector: 'esProfilesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esProfilesList > toolbar > button#add': {
				click: me.onEsProfilesAddClick
			},
			'esProfilesList':{
				removeRow: me.removeRow
			},
			'esProfilesAdd > form > button#save': {
				click: me.onEsProfilesAddSaveClick
			},
			'esProfilesAdd > form > button#cancel': {
				click: me.onEsProfilesAddCancelClick
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
	onEsProfilesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsProfilesAdd().destroy();
		//</es-section>
	},
	onEsProfilesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsProfilesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsProfilesList().getStore().add(rec);

			me.getEsProfilesAdd().destroy();
		}
		//</es-section>
	},
	onEsProfilesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esProfilesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esProfiles());
		//</es-section>
	}
});
