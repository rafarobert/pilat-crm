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

Ext.define('es.controller.surveyquestions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyquestions.List',
		'surveyquestions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyquestions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyquestionsList',
			selector: 'surveyquestionsList'
		},
		{
			ref: 'surveyquestionsAdd',
			selector: 'surveyquestionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyquestionsList > toolbar > button#add': {
				click: me.onSurveyquestionsAddClick
			},
			'surveyquestionsList':{
				removeRow: me.removeRow
			},
			'surveyquestionsAdd > form > button#save': {
				click: me.onSurveyquestionsAddSaveClick
			},
			'surveyquestionsAdd > form > button#cancel': {
				click: me.onSurveyquestionsAddCancelClick
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
	onSurveyquestionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyquestionsAdd().destroy();
		//</es-section>
	},
	onSurveyquestionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyquestionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyquestionsList().getStore().add(rec);

			me.getSurveyquestionsAdd().destroy();
		}
		//</es-section>
	},
	onSurveyquestionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyquestionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyquestions());
		//</es-section>
	}
});
