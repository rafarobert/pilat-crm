/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:05 GMT-0400 (Bolivia Time)
 * Time: 2:43:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.leads', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'leads.List',
		'leads.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'leads'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'leadsList',
			selector: 'leadsList'
		},
		{
			ref: 'leadsAdd',
			selector: 'leadsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'leadsList > toolbar > button#add': {
				click: me.onLeadsAddClick
			},
			'leadsList':{
				removeRow: me.removeRow
			},
			'leadsAdd > form > button#save': {
				click: me.onLeadsAddSaveClick
			},
			'leadsAdd > form > button#cancel': {
				click: me.onLeadsAddCancelClick
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
	onLeadsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getLeadsAdd().destroy();
		//</es-section>
	},
	onLeadsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getLeadsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getLeadsList().getStore().add(rec);

			me.getLeadsAdd().destroy();
		}
		//</es-section>
	},
	onLeadsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('leadsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.leads());
		//</es-section>
	}
});
