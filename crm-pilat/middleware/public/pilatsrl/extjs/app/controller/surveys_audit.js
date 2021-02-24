/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:18 GMT-0400 (Bolivia Time)
 * Time: 2:44:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:18
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveysAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveys-audit.List',
		'surveys-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveys_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveysAuditList',
			selector: 'surveysAuditList'
		},
		{
			ref: 'surveysAuditAdd',
			selector: 'surveysAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveysAuditList > toolbar > button#add': {
				click: me.onSurveysAuditAddClick
			},
			'surveysAuditList':{
				removeRow: me.removeRow
			},
			'surveysAuditAdd > form > button#save': {
				click: me.onSurveysAuditAddSaveClick
			},
			'surveysAuditAdd > form > button#cancel': {
				click: me.onSurveysAuditAddCancelClick
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
	onSurveysAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveysAuditAdd().destroy();
		//</es-section>
	},
	onSurveysAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveysAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveysAuditList().getStore().add(rec);

			me.getSurveysAuditAdd().destroy();
		}
		//</es-section>
	},
	onSurveysAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveysAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveysAudit());
		//</es-section>
	}
});
