/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:39 GMT-0400 (Bolivia Time)
 * Time: 2:25:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esMails', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-mails.List',
		'es-mails.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esMails'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esMailsList',
			selector: 'esMailsList'
		},
		{
			ref: 'esMailsAdd',
			selector: 'esMailsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esMailsList > toolbar > button#add': {
				click: me.onEsMailsAddClick
			},
			'esMailsList':{
				removeRow: me.removeRow
			},
			'esMailsAdd > form > button#save': {
				click: me.onEsMailsAddSaveClick
			},
			'esMailsAdd > form > button#cancel': {
				click: me.onEsMailsAddCancelClick
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
	onEsMailsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsMailsAdd().destroy();
		//</es-section>
	},
	onEsMailsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsMailsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsMailsList().getStore().add(rec);

			me.getEsMailsAdd().destroy();
		}
		//</es-section>
	},
	onEsMailsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esMailsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esMails());
		//</es-section>
	}
});
