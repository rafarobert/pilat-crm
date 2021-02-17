/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esRoleProfiles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-role-profiles.List',
		'es-role-profiles.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esRoleProfiles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esRoleProfilesList',
			selector: 'esRoleProfilesList'
		},
		{
			ref: 'esRoleProfilesAdd',
			selector: 'esRoleProfilesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esRoleProfilesList > toolbar > button#add': {
				click: me.onEsRoleProfilesAddClick
			},
			'esRoleProfilesList':{
				removeRow: me.removeRow
			},
			'esRoleProfilesAdd > form > button#save': {
				click: me.onEsRoleProfilesAddSaveClick
			},
			'esRoleProfilesAdd > form > button#cancel': {
				click: me.onEsRoleProfilesAddCancelClick
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
	onEsRoleProfilesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsRoleProfilesAdd().destroy();
		//</es-section>
	},
	onEsRoleProfilesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsRoleProfilesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsRoleProfilesList().getStore().add(rec);

			me.getEsRoleProfilesAdd().destroy();
		}
		//</es-section>
	},
	onEsRoleProfilesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esRoleProfilesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esRoleProfiles());
		//</es-section>
	}
});
