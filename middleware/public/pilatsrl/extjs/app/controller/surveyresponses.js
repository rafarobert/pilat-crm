/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:15 GMT-0400 (Bolivia Time)
 * Time: 2:44:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:15
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyresponses', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyresponses.List',
		'surveyresponses.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyresponses'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyresponsesList',
			selector: 'surveyresponsesList'
		},
		{
			ref: 'surveyresponsesAdd',
			selector: 'surveyresponsesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyresponsesList > toolbar > button#add': {
				click: me.onSurveyresponsesAddClick
			},
			'surveyresponsesList':{
				removeRow: me.removeRow
			},
			'surveyresponsesAdd > form > button#save': {
				click: me.onSurveyresponsesAddSaveClick
			},
			'surveyresponsesAdd > form > button#cancel': {
				click: me.onSurveyresponsesAddCancelClick
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
	onSurveyresponsesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyresponsesAdd().destroy();
		//</es-section>
	},
	onSurveyresponsesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyresponsesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyresponsesList().getStore().add(rec);

			me.getSurveyresponsesAdd().destroy();
		}
		//</es-section>
	},
	onSurveyresponsesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyresponsesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyresponses());
		//</es-section>
	}
});
