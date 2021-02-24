/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:10 GMT-0400 (Bolivia Time)
 * Time: 2:44:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:10
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyquestionoptionsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyquestionoptions-audit.List',
		'surveyquestionoptions-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyquestionoptions_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyquestionoptionsAuditList',
			selector: 'surveyquestionoptionsAuditList'
		},
		{
			ref: 'surveyquestionoptionsAuditAdd',
			selector: 'surveyquestionoptionsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyquestionoptionsAuditList > toolbar > button#add': {
				click: me.onSurveyquestionoptionsAuditAddClick
			},
			'surveyquestionoptionsAuditList':{
				removeRow: me.removeRow
			},
			'surveyquestionoptionsAuditAdd > form > button#save': {
				click: me.onSurveyquestionoptionsAuditAddSaveClick
			},
			'surveyquestionoptionsAuditAdd > form > button#cancel': {
				click: me.onSurveyquestionoptionsAuditAddCancelClick
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
	onSurveyquestionoptionsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyquestionoptionsAuditAdd().destroy();
		//</es-section>
	},
	onSurveyquestionoptionsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyquestionoptionsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyquestionoptionsAuditList().getStore().add(rec);

			me.getSurveyquestionoptionsAuditAdd().destroy();
		}
		//</es-section>
	},
	onSurveyquestionoptionsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyquestionoptionsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyquestionoptionsAudit());
		//</es-section>
	}
});
