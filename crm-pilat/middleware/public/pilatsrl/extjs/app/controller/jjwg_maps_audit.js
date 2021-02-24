/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Time: 2:42:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:59
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgMapsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-maps-audit.List',
		'jjwg-maps-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_maps_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgMapsAuditList',
			selector: 'jjwgMapsAuditList'
		},
		{
			ref: 'jjwgMapsAuditAdd',
			selector: 'jjwgMapsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgMapsAuditList > toolbar > button#add': {
				click: me.onJjwgMapsAuditAddClick
			},
			'jjwgMapsAuditList':{
				removeRow: me.removeRow
			},
			'jjwgMapsAuditAdd > form > button#save': {
				click: me.onJjwgMapsAuditAddSaveClick
			},
			'jjwgMapsAuditAdd > form > button#cancel': {
				click: me.onJjwgMapsAuditAddCancelClick
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
	onJjwgMapsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgMapsAuditAdd().destroy();
		//</es-section>
	},
	onJjwgMapsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgMapsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgMapsAuditList().getStore().add(rec);

			me.getJjwgMapsAuditAdd().destroy();
		}
		//</es-section>
	},
	onJjwgMapsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgMapsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgMapsAudit());
		//</es-section>
	}
});
