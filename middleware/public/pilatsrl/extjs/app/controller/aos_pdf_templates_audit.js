/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:39 GMT-0400 (Bolivia Time)
 * Time: 2:41:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:39
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosPdfTemplatesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-pdf-templates-audit.List',
		'aos-pdf-templates-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_pdf_templates_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosPdfTemplatesAuditList',
			selector: 'aosPdfTemplatesAuditList'
		},
		{
			ref: 'aosPdfTemplatesAuditAdd',
			selector: 'aosPdfTemplatesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosPdfTemplatesAuditList > toolbar > button#add': {
				click: me.onAosPdfTemplatesAuditAddClick
			},
			'aosPdfTemplatesAuditList':{
				removeRow: me.removeRow
			},
			'aosPdfTemplatesAuditAdd > form > button#save': {
				click: me.onAosPdfTemplatesAuditAddSaveClick
			},
			'aosPdfTemplatesAuditAdd > form > button#cancel': {
				click: me.onAosPdfTemplatesAuditAddCancelClick
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
	onAosPdfTemplatesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosPdfTemplatesAuditAdd().destroy();
		//</es-section>
	},
	onAosPdfTemplatesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosPdfTemplatesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosPdfTemplatesAuditList().getStore().add(rec);

			me.getAosPdfTemplatesAuditAdd().destroy();
		}
		//</es-section>
	},
	onAosPdfTemplatesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosPdfTemplatesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosPdfTemplatesAudit());
		//</es-section>
	}
});
