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

Ext.define('es.controller.esProfileComponents', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-profile-components.List',
		'es-profile-components.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esProfileComponents'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esProfileComponentsList',
			selector: 'esProfileComponentsList'
		},
		{
			ref: 'esProfileComponentsAdd',
			selector: 'esProfileComponentsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esProfileComponentsList > toolbar > button#add': {
				click: me.onEsProfileComponentsAddClick
			},
			'esProfileComponentsList':{
				removeRow: me.removeRow
			},
			'esProfileComponentsAdd > form > button#save': {
				click: me.onEsProfileComponentsAddSaveClick
			},
			'esProfileComponentsAdd > form > button#cancel': {
				click: me.onEsProfileComponentsAddCancelClick
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
	onEsProfileComponentsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsProfileComponentsAdd().destroy();
		//</es-section>
	},
	onEsProfileComponentsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsProfileComponentsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsProfileComponentsList().getStore().add(rec);

			me.getEsProfileComponentsAdd().destroy();
		}
		//</es-section>
	},
	onEsProfileComponentsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esProfileComponentsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esProfileComponents());
		//</es-section>
	}
});
