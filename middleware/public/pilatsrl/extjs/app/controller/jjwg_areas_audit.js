/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:57 GMT-0400 (Bolivia Time)
 * Time: 2:42:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:57
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgAreasAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-areas-audit.List',
		'jjwg-areas-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_areas_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgAreasAuditList',
			selector: 'jjwgAreasAuditList'
		},
		{
			ref: 'jjwgAreasAuditAdd',
			selector: 'jjwgAreasAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgAreasAuditList > toolbar > button#add': {
				click: me.onJjwgAreasAuditAddClick
			},
			'jjwgAreasAuditList':{
				removeRow: me.removeRow
			},
			'jjwgAreasAuditAdd > form > button#save': {
				click: me.onJjwgAreasAuditAddSaveClick
			},
			'jjwgAreasAuditAdd > form > button#cancel': {
				click: me.onJjwgAreasAuditAddCancelClick
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
	onJjwgAreasAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgAreasAuditAdd().destroy();
		//</es-section>
	},
	onJjwgAreasAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgAreasAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgAreasAuditList().getStore().add(rec);

			me.getJjwgAreasAuditAdd().destroy();
		}
		//</es-section>
	},
	onJjwgAreasAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgAreasAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgAreasAudit());
		//</es-section>
	}
});
