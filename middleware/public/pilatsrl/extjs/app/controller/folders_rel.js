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

Ext.define('es.controller.foldersRel', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'folders-rel.List',
		'folders-rel.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'folders_rel'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'foldersRelList',
			selector: 'foldersRelList'
		},
		{
			ref: 'foldersRelAdd',
			selector: 'foldersRelAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'foldersRelList > toolbar > button#add': {
				click: me.onFoldersRelAddClick
			},
			'foldersRelList':{
				removeRow: me.removeRow
			},
			'foldersRelAdd > form > button#save': {
				click: me.onFoldersRelAddSaveClick
			},
			'foldersRelAdd > form > button#cancel': {
				click: me.onFoldersRelAddCancelClick
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
	onFoldersRelAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFoldersRelAdd().destroy();
		//</es-section>
	},
	onFoldersRelAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFoldersRelAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFoldersRelList().getStore().add(rec);

			me.getFoldersRelAdd().destroy();
		}
		//</es-section>
	},
	onFoldersRelAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('foldersRelAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.foldersRel());
		//</es-section>
	}
});
