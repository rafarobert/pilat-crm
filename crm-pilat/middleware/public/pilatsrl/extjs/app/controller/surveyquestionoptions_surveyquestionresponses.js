/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:11 GMT-0400 (Bolivia Time)
 * Time: 2:44:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:11 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:11
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyquestionoptionsSurveyquestionresponses', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyquestionoptions-surveyquestionresponses.List',
		'surveyquestionoptions-surveyquestionresponses.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyquestionoptions_surveyquestionresponses'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyquestionoptionsSurveyquestionresponsesList',
			selector: 'surveyquestionoptionsSurveyquestionresponsesList'
		},
		{
			ref: 'surveyquestionoptionsSurveyquestionresponsesAdd',
			selector: 'surveyquestionoptionsSurveyquestionresponsesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyquestionoptionsSurveyquestionresponsesList > toolbar > button#add': {
				click: me.onSurveyquestionoptionsSurveyquestionresponsesAddClick
			},
			'surveyquestionoptionsSurveyquestionresponsesList':{
				removeRow: me.removeRow
			},
			'surveyquestionoptionsSurveyquestionresponsesAdd > form > button#save': {
				click: me.onSurveyquestionoptionsSurveyquestionresponsesAddSaveClick
			},
			'surveyquestionoptionsSurveyquestionresponsesAdd > form > button#cancel': {
				click: me.onSurveyquestionoptionsSurveyquestionresponsesAddCancelClick
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
	onSurveyquestionoptionsSurveyquestionresponsesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyquestionoptionsSurveyquestionresponsesAdd().destroy();
		//</es-section>
	},
	onSurveyquestionoptionsSurveyquestionresponsesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyquestionoptionsSurveyquestionresponsesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyquestionoptionsSurveyquestionresponsesList().getStore().add(rec);

			me.getSurveyquestionoptionsSurveyquestionresponsesAdd().destroy();
		}
		//</es-section>
	},
	onSurveyquestionoptionsSurveyquestionresponsesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyquestionoptionsSurveyquestionresponsesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyquestionoptionsSurveyquestionresponses());
		//</es-section>
	}
});
