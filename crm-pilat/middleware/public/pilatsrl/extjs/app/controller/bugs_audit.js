/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:59 GMT-0400 (Bolivia Time)
 * Time: 2:41:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:59
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.bugsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'bugs-audit.List',
		'bugs-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'bugs_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'bugsAuditList',
			selector: 'bugsAuditList'
		},
		{
			ref: 'bugsAuditAdd',
			selector: 'bugsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'bugsAuditList > toolbar > button#add': {
				click: me.onBugsAuditAddClick
			},
			'bugsAuditList':{
				removeRow: me.removeRow
			},
			'bugsAuditAdd > form > button#save': {
				click: me.onBugsAuditAddSaveClick
			},
			'bugsAuditAdd > form > button#cancel': {
				click: me.onBugsAuditAddCancelClick
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
	onBugsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getBugsAuditAdd().destroy();
		//</es-section>
	},
	onBugsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getBugsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getBugsAuditList().getStore().add(rec);

			me.getBugsAuditAdd().destroy();
		}
		//</es-section>
	},
	onBugsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('bugsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.bugsAudit());
		//</es-section>
	}
});
