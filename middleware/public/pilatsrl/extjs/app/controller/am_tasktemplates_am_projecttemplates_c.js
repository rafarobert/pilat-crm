/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Time: 2:41:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.amTasktemplatesAmProjecttemplatesC', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-tasktemplates-am-projecttemplates-c.List',
		'am-tasktemplates-am-projecttemplates-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_tasktemplates_am_projecttemplates_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amTasktemplatesAmProjecttemplatesCList',
			selector: 'amTasktemplatesAmProjecttemplatesCList'
		},
		{
			ref: 'amTasktemplatesAmProjecttemplatesCAdd',
			selector: 'amTasktemplatesAmProjecttemplatesCAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amTasktemplatesAmProjecttemplatesCList > toolbar > button#add': {
				click: me.onAmTasktemplatesAmProjecttemplatesCAddClick
			},
			'amTasktemplatesAmProjecttemplatesCList':{
				removeRow: me.removeRow
			},
			'amTasktemplatesAmProjecttemplatesCAdd > form > button#save': {
				click: me.onAmTasktemplatesAmProjecttemplatesCAddSaveClick
			},
			'amTasktemplatesAmProjecttemplatesCAdd > form > button#cancel': {
				click: me.onAmTasktemplatesAmProjecttemplatesCAddCancelClick
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
	onAmTasktemplatesAmProjecttemplatesCAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmTasktemplatesAmProjecttemplatesCAdd().destroy();
		//</es-section>
	},
	onAmTasktemplatesAmProjecttemplatesCAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmTasktemplatesAmProjecttemplatesCAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmTasktemplatesAmProjecttemplatesCList().getStore().add(rec);

			me.getAmTasktemplatesAmProjecttemplatesCAdd().destroy();
		}
		//</es-section>
	},
	onAmTasktemplatesAmProjecttemplatesCAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amTasktemplatesAmProjecttemplatesCAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amTasktemplatesAmProjecttemplatesC());
		//</es-section>
	}
});
