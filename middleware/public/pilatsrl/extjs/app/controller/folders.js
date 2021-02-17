/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:42 GMT-0400 (Bolivia Time)
 * Time: 2:42:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:42
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.folders', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'folders.List',
		'folders.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'folders'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'foldersList',
			selector: 'foldersList'
		},
		{
			ref: 'foldersAdd',
			selector: 'foldersAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'foldersList > toolbar > button#add': {
				click: me.onFoldersAddClick
			},
			'foldersList':{
				removeRow: me.removeRow
			},
			'foldersAdd > form > button#save': {
				click: me.onFoldersAddSaveClick
			},
			'foldersAdd > form > button#cancel': {
				click: me.onFoldersAddCancelClick
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
	onFoldersAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFoldersAdd().destroy();
		//</es-section>
	},
	onFoldersAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFoldersAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFoldersList().getStore().add(rec);

			me.getFoldersAdd().destroy();
		}
		//</es-section>
	},
	onFoldersAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('foldersAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.folders());
		//</es-section>
	}
});
