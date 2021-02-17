/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:17 GMT-0400 (Bolivia Time)
 * Time: 2:44:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.surveys', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'surveys.List',
		'surveys.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'surveys'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'surveysList',
			selector: 'surveysList'
		},
		{
			ref: 'surveysAdd',
			selector: 'surveysAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'surveysList > toolbar > button#add': {
				click: me.onSurveysAddClick
			},
			'surveysList':{
				removeRow: me.removeRow
			},
			'surveysAdd > form > button#save': {
				click: me.onSurveysAddSaveClick
			},
			'surveysAdd > form > button#cancel': {
				click: me.onSurveysAddCancelClick
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
	onSurveysAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSurveysAdd().destroy();
		//</es-section>
	},
	onSurveysAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSurveysAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSurveysList().getStore().add(rec);

			me.getSurveysAdd().destroy();
		}
		//</es-section>
	},
	onSurveysAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('surveysAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.surveys());
		//</es-section>
	}
});
