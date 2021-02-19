/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:15 GMT-0400 (Bolivia Time)
 * Time: 2:43:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:15
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.notes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'notes.List',
		'notes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'notes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'notesList',
			selector: 'notesList'
		},
		{
			ref: 'notesAdd',
			selector: 'notesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'notesList > toolbar > button#add': {
				click: me.onNotesAddClick
			},
			'notesList':{
				removeRow: me.removeRow
			},
			'notesAdd > form > button#save': {
				click: me.onNotesAddSaveClick
			},
			'notesAdd > form > button#cancel': {
				click: me.onNotesAddCancelClick
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
	onNotesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getNotesAdd().destroy();
		//</es-section>
	},
	onNotesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getNotesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getNotesList().getStore().add(rec);

			me.getNotesAdd().destroy();
		}
		//</es-section>
	},
	onNotesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('notesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.notes());
		//</es-section>
	}
});
