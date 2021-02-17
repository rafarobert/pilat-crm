/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:09 GMT-0400 (Bolivia Time)
 * Time: 2:44:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:9
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveyquestionoptions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveyquestionoptions.List',
		'surveyquestionoptions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveyquestionoptions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveyquestionoptionsList',
			selector: 'surveyquestionoptionsList'
		},
		{
			ref: 'surveyquestionoptionsAdd',
			selector: 'surveyquestionoptionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveyquestionoptionsList > toolbar > button#add': {
				click: me.onSurveyquestionoptionsAddClick
			},
			'surveyquestionoptionsList':{
				removeRow: me.removeRow
			},
			'surveyquestionoptionsAdd > form > button#save': {
				click: me.onSurveyquestionoptionsAddSaveClick
			},
			'surveyquestionoptionsAdd > form > button#cancel': {
				click: me.onSurveyquestionoptionsAddCancelClick
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
	onSurveyquestionoptionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveyquestionoptionsAdd().destroy();
		//</es-section>
	},
	onSurveyquestionoptionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveyquestionoptionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveyquestionoptionsList().getStore().add(rec);

			me.getSurveyquestionoptionsAdd().destroy();
		}
		//</es-section>
	},
	onSurveyquestionoptionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveyquestionoptionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveyquestionoptions());
		//</es-section>
	}
});
