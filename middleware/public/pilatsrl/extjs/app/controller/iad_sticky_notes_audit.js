/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:51 GMT-0400 (Bolivia Time)
 * Time: 2:42:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:51
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.iadStickyNotesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'iad-sticky-notes-audit.List',
		'iad-sticky-notes-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'iad_sticky_notes_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'iadStickyNotesAuditList',
			selector: 'iadStickyNotesAuditList'
		},
		{
			ref: 'iadStickyNotesAuditAdd',
			selector: 'iadStickyNotesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'iadStickyNotesAuditList > toolbar > button#add': {
				click: me.onIadStickyNotesAuditAddClick
			},
			'iadStickyNotesAuditList':{
				removeRow: me.removeRow
			},
			'iadStickyNotesAuditAdd > form > button#save': {
				click: me.onIadStickyNotesAuditAddSaveClick
			},
			'iadStickyNotesAuditAdd > form > button#cancel': {
				click: me.onIadStickyNotesAuditAddCancelClick
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
	onIadStickyNotesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getIadStickyNotesAuditAdd().destroy();
		//</es-section>
	},
	onIadStickyNotesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getIadStickyNotesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getIadStickyNotesAuditList().getStore().add(rec);

			me.getIadStickyNotesAuditAdd().destroy();
		}
		//</es-section>
	},
	onIadStickyNotesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('iadStickyNotesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.iadStickyNotesAudit());
		//</es-section>
	}
});
