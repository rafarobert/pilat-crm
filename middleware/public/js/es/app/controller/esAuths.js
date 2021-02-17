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

Ext.define('es.controller.esAuths', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-auths.List',
		'es-auths.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esAuths'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esAuthsList',
			selector: 'esAuthsList'
		},
		{
			ref: 'esAuthsAdd',
			selector: 'esAuthsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esAuthsList > toolbar > button#add': {
				click: me.onEsAuthsAddClick
			},
			'esAuthsList':{
				removeRow: me.removeRow
			},
			'esAuthsAdd > form > button#save': {
				click: me.onEsAuthsAddSaveClick
			},
			'esAuthsAdd > form > button#cancel': {
				click: me.onEsAuthsAddCancelClick
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
	onEsAuthsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsAuthsAdd().destroy();
		//</es-section>
	},
	onEsAuthsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsAuthsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsAuthsList().getStore().add(rec);

			me.getEsAuthsAdd().destroy();
		}
		//</es-section>
	},
	onEsAuthsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esAuthsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esAuths());
		//</es-section>
	}
});
