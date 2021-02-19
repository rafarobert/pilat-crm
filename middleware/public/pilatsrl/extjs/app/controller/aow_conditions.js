/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:53 GMT-0400 (Bolivia Time)
 * Time: 2:41:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:53
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aowConditions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aow-conditions.List',
		'aow-conditions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aow_conditions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aowConditionsList',
			selector: 'aowConditionsList'
		},
		{
			ref: 'aowConditionsAdd',
			selector: 'aowConditionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aowConditionsList > toolbar > button#add': {
				click: me.onAowConditionsAddClick
			},
			'aowConditionsList':{
				removeRow: me.removeRow
			},
			'aowConditionsAdd > form > button#save': {
				click: me.onAowConditionsAddSaveClick
			},
			'aowConditionsAdd > form > button#cancel': {
				click: me.onAowConditionsAddCancelClick
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
	onAowConditionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAowConditionsAdd().destroy();
		//</es-section>
	},
	onAowConditionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAowConditionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAowConditionsList().getStore().add(rec);

			me.getAowConditionsAdd().destroy();
		}
		//</es-section>
	},
	onAowConditionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aowConditionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aowConditions());
		//</es-section>
	}
});
