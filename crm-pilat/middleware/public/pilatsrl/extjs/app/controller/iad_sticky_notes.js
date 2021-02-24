/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Time: 2:42:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:50
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.iadStickyNotes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'iad-sticky-notes.List',
		'iad-sticky-notes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'iad_sticky_notes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'iadStickyNotesList',
			selector: 'iadStickyNotesList'
		},
		{
			ref: 'iadStickyNotesAdd',
			selector: 'iadStickyNotesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'iadStickyNotesList > toolbar > button#add': {
				click: me.onIadStickyNotesAddClick
			},
			'iadStickyNotesList':{
				removeRow: me.removeRow
			},
			'iadStickyNotesAdd > form > button#save': {
				click: me.onIadStickyNotesAddSaveClick
			},
			'iadStickyNotesAdd > form > button#cancel': {
				click: me.onIadStickyNotesAddCancelClick
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
	onIadStickyNotesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getIadStickyNotesAdd().destroy();
		//</es-section>
	},
	onIadStickyNotesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getIadStickyNotesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getIadStickyNotesList().getStore().add(rec);

			me.getIadStickyNotesAdd().destroy();
		}
		//</es-section>
	},
	onIadStickyNotesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('iadStickyNotesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.iadStickyNotes());
		//</es-section>
	}
});
