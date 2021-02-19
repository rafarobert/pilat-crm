/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:13 GMT-0400 (Bolivia Time)
 * Time: 2:44:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:13 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:13
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyquestionresponsesAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyquestionresponses-audit.List',
		'surveyquestionresponses-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyquestionresponses_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyquestionresponsesAuditList',
			selector: 'surveyquestionresponsesAuditList'
		},
		{
			ref: 'surveyquestionresponsesAuditAdd',
			selector: 'surveyquestionresponsesAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyquestionresponsesAuditList > toolbar > button#add': {
				click: me.onSurveyquestionresponsesAuditAddClick
			},
			'surveyquestionresponsesAuditList':{
				removeRow: me.removeRow
			},
			'surveyquestionresponsesAuditAdd > form > button#save': {
				click: me.onSurveyquestionresponsesAuditAddSaveClick
			},
			'surveyquestionresponsesAuditAdd > form > button#cancel': {
				click: me.onSurveyquestionresponsesAuditAddCancelClick
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
	onSurveyquestionresponsesAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyquestionresponsesAuditAdd().destroy();
		//</es-section>
	},
	onSurveyquestionresponsesAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyquestionresponsesAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyquestionresponsesAuditList().getStore().add(rec);

			me.getSurveyquestionresponsesAuditAdd().destroy();
		}
		//</es-section>
	},
	onSurveyquestionresponsesAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyquestionresponsesAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyquestionresponsesAudit());
		//</es-section>
	}
});
