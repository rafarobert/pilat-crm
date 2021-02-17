/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Time: 2:25:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esProfilePages', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-profile-pages.List',
		'es-profile-pages.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esProfilePages'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esProfilePagesList',
			selector: 'esProfilePagesList'
		},
		{
			ref: 'esProfilePagesAdd',
			selector: 'esProfilePagesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esProfilePagesList > toolbar > button#add': {
				click: me.onEsProfilePagesAddClick
			},
			'esProfilePagesList':{
				removeRow: me.removeRow
			},
			'esProfilePagesAdd > form > button#save': {
				click: me.onEsProfilePagesAddSaveClick
			},
			'esProfilePagesAdd > form > button#cancel': {
				click: me.onEsProfilePagesAddCancelClick
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
	onEsProfilePagesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsProfilePagesAdd().destroy();
		//</es-section>
	},
	onEsProfilePagesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsProfilePagesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsProfilePagesList().getStore().add(rec);

			me.getEsProfilePagesAdd().destroy();
		}
		//</es-section>
	},
	onEsProfilePagesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esProfilePagesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esProfilePages());
		//</es-section>
	}
});
