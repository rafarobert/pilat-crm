/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Time: 2:43:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:42
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectsOpportunities', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'projects-opportunities.List',
		'projects-opportunities.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'projects_opportunities'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectsOpportunitiesList',
			selector: 'projectsOpportunitiesList'
		},
		{
			ref: 'projectsOpportunitiesAdd',
			selector: 'projectsOpportunitiesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectsOpportunitiesList > toolbar > button#add': {
				click: me.onProjectsOpportunitiesAddClick
			},
			'projectsOpportunitiesList':{
				removeRow: me.removeRow
			},
			'projectsOpportunitiesAdd > form > button#save': {
				click: me.onProjectsOpportunitiesAddSaveClick
			},
			'projectsOpportunitiesAdd > form > button#cancel': {
				click: me.onProjectsOpportunitiesAddCancelClick
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
	onProjectsOpportunitiesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectsOpportunitiesAdd().destroy();
		//</es-section>
	},
	onProjectsOpportunitiesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectsOpportunitiesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectsOpportunitiesList().getStore().add(rec);

			me.getProjectsOpportunitiesAdd().destroy();
		}
		//</es-section>
	},
	onProjectsOpportunitiesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectsOpportunitiesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectsOpportunities());
		//</es-section>
	}
});
