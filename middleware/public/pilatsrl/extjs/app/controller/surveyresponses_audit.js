/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:16 GMT-0400 (Bolivia Time)
 * Time: 2:44:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:16
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyresponsesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyresponses-audit.List',
		'surveyresponses-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyresponses_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyresponsesAuditList',
			selector: 'surveyresponsesAuditList'
		},
		{
			ref: 'surveyresponsesAuditAdd',
			selector: 'surveyresponsesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyresponsesAuditList > toolbar > button#add': {
				click: me.onSurveyresponsesAuditAddClick
			},
			'surveyresponsesAuditList':{
				removeRow: me.removeRow
			},
			'surveyresponsesAuditAdd > form > button#save': {
				click: me.onSurveyresponsesAuditAddSaveClick
			},
			'surveyresponsesAuditAdd > form > button#cancel': {
				click: me.onSurveyresponsesAuditAddCancelClick
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
	onSurveyresponsesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyresponsesAuditAdd().destroy();
		//</es-section>
	},
	onSurveyresponsesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyresponsesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyresponsesAuditList().getStore().add(rec);

			me.getSurveyresponsesAuditAdd().destroy();
		}
		//</es-section>
	},
	onSurveyresponsesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyresponsesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyresponsesAudit());
		//</es-section>
	}
});
