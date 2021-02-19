/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:03 GMT-0400 (Bolivia Time)
 * Time: 2:41:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:3
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.amTasktemplates', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-tasktemplates.List',
		'am-tasktemplates.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_tasktemplates'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amTasktemplatesList',
			selector: 'amTasktemplatesList'
		},
		{
			ref: 'amTasktemplatesAdd',
			selector: 'amTasktemplatesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amTasktemplatesList > toolbar > button#add': {
				click: me.onAmTasktemplatesAddClick
			},
			'amTasktemplatesList':{
				removeRow: me.removeRow
			},
			'amTasktemplatesAdd > form > button#save': {
				click: me.onAmTasktemplatesAddSaveClick
			},
			'amTasktemplatesAdd > form > button#cancel': {
				click: me.onAmTasktemplatesAddCancelClick
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
	onAmTasktemplatesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmTasktemplatesAdd().destroy();
		//</es-section>
	},
	onAmTasktemplatesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmTasktemplatesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmTasktemplatesList().getStore().add(rec);

			me.getAmTasktemplatesAdd().destroy();
		}
		//</es-section>
	},
	onAmTasktemplatesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amTasktemplatesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amTasktemplates());
		//</es-section>
	}
});
