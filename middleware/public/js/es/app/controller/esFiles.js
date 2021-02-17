/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Time: 2:25:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:33
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esFiles', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-files.List',
		'es-files.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esFiles'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esFilesList',
			selector: 'esFilesList'
		},
		{
			ref: 'esFilesAdd',
			selector: 'esFilesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esFilesList > toolbar > button#add': {
				click: me.onEsFilesAddClick
			},
			'esFilesList':{
				removeRow: me.removeRow
			},
			'esFilesAdd > form > button#save': {
				click: me.onEsFilesAddSaveClick
			},
			'esFilesAdd > form > button#cancel': {
				click: me.onEsFilesAddCancelClick
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
	onEsFilesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsFilesAdd().destroy();
		//</es-section>
	},
	onEsFilesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsFilesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsFilesList().getStore().add(rec);

			me.getEsFilesAdd().destroy();
		}
		//</es-section>
	},
	onEsFilesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esFilesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esFiles());
		//</es-section>
	}
});
