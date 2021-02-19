/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:02 GMT-0400 (Bolivia Time)
 * Time: 2:43:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgMarkersAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-markers-audit.List',
		'jjwg-markers-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_markers_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgMarkersAuditList',
			selector: 'jjwgMarkersAuditList'
		},
		{
			ref: 'jjwgMarkersAuditAdd',
			selector: 'jjwgMarkersAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgMarkersAuditList > toolbar > button#add': {
				click: me.onJjwgMarkersAuditAddClick
			},
			'jjwgMarkersAuditList':{
				removeRow: me.removeRow
			},
			'jjwgMarkersAuditAdd > form > button#save': {
				click: me.onJjwgMarkersAuditAddSaveClick
			},
			'jjwgMarkersAuditAdd > form > button#cancel': {
				click: me.onJjwgMarkersAuditAddCancelClick
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
	onJjwgMarkersAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgMarkersAuditAdd().destroy();
		//</es-section>
	},
	onJjwgMarkersAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgMarkersAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgMarkersAuditList().getStore().add(rec);

			me.getJjwgMarkersAuditAdd().destroy();
		}
		//</es-section>
	},
	onJjwgMarkersAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgMarkersAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgMarkersAudit());
		//</es-section>
	}
});
