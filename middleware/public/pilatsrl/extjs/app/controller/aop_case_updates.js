/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:21 GMT-0400 (Bolivia Time)
 * Time: 2:41:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:21
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aopCaseUpdates', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aop-case-updates.List',
		'aop-case-updates.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aop_case_updates'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aopCaseUpdatesList',
			selector: 'aopCaseUpdatesList'
		},
		{
			ref: 'aopCaseUpdatesAdd',
			selector: 'aopCaseUpdatesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aopCaseUpdatesList > toolbar > button#add': {
				click: me.onAopCaseUpdatesAddClick
			},
			'aopCaseUpdatesList':{
				removeRow: me.removeRow
			},
			'aopCaseUpdatesAdd > form > button#save': {
				click: me.onAopCaseUpdatesAddSaveClick
			},
			'aopCaseUpdatesAdd > form > button#cancel': {
				click: me.onAopCaseUpdatesAddCancelClick
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
	onAopCaseUpdatesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAopCaseUpdatesAdd().destroy();
		//</es-section>
	},
	onAopCaseUpdatesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAopCaseUpdatesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAopCaseUpdatesList().getStore().add(rec);

			me.getAopCaseUpdatesAdd().destroy();
		}
		//</es-section>
	},
	onAopCaseUpdatesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aopCaseUpdatesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aopCaseUpdates());
		//</es-section>
	}
});
