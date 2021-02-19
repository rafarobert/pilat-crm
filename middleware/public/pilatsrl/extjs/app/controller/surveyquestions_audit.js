/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:14 GMT-0400 (Bolivia Time)
 * Time: 2:44:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:14
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyquestionsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyquestions-audit.List',
		'surveyquestions-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyquestions_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyquestionsAuditList',
			selector: 'surveyquestionsAuditList'
		},
		{
			ref: 'surveyquestionsAuditAdd',
			selector: 'surveyquestionsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyquestionsAuditList > toolbar > button#add': {
				click: me.onSurveyquestionsAuditAddClick
			},
			'surveyquestionsAuditList':{
				removeRow: me.removeRow
			},
			'surveyquestionsAuditAdd > form > button#save': {
				click: me.onSurveyquestionsAuditAddSaveClick
			},
			'surveyquestionsAuditAdd > form > button#cancel': {
				click: me.onSurveyquestionsAuditAddCancelClick
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
	onSurveyquestionsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyquestionsAuditAdd().destroy();
		//</es-section>
	},
	onSurveyquestionsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyquestionsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyquestionsAuditList().getStore().add(rec);

			me.getSurveyquestionsAuditAdd().destroy();
		}
		//</es-section>
	},
	onSurveyquestionsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyquestionsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyquestionsAudit());
		//</es-section>
	}
});
