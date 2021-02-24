/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:12 GMT-0400 (Bolivia Time)
 * Time: 2:44:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:12
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyquestionresponses', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyquestionresponses.List',
		'surveyquestionresponses.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyquestionresponses'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyquestionresponsesList',
			selector: 'surveyquestionresponsesList'
		},
		{
			ref: 'surveyquestionresponsesAdd',
			selector: 'surveyquestionresponsesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyquestionresponsesList > toolbar > button#add': {
				click: me.onSurveyquestionresponsesAddClick
			},
			'surveyquestionresponsesList':{
				removeRow: me.removeRow
			},
			'surveyquestionresponsesAdd > form > button#save': {
				click: me.onSurveyquestionresponsesAddSaveClick
			},
			'surveyquestionresponsesAdd > form > button#cancel': {
				click: me.onSurveyquestionresponsesAddCancelClick
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
	onSurveyquestionresponsesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyquestionresponsesAdd().destroy();
		//</es-section>
	},
	onSurveyquestionresponsesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyquestionresponsesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyquestionresponsesList().getStore().add(rec);

			me.getSurveyquestionresponsesAdd().destroy();
		}
		//</es-section>
	},
	onSurveyquestionresponsesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyquestionresponsesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyquestionresponses());
		//</es-section>
	}
});
