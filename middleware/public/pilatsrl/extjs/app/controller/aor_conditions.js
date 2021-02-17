/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:24 GMT-0400 (Bolivia Time)
 * Time: 2:41:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:24
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aorConditions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aor-conditions.List',
		'aor-conditions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aor_conditions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aorConditionsList',
			selector: 'aorConditionsList'
		},
		{
			ref: 'aorConditionsAdd',
			selector: 'aorConditionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aorConditionsList > toolbar > button#add': {
				click: me.onAorConditionsAddClick
			},
			'aorConditionsList':{
				removeRow: me.removeRow
			},
			'aorConditionsAdd > form > button#save': {
				click: me.onAorConditionsAddSaveClick
			},
			'aorConditionsAdd > form > button#cancel': {
				click: me.onAorConditionsAddCancelClick
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
	onAorConditionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAorConditionsAdd().destroy();
		//</es-section>
	},
	onAorConditionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAorConditionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAorConditionsList().getStore().add(rec);

			me.getAorConditionsAdd().destroy();
		}
		//</es-section>
	},
	onAorConditionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aorConditionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aorConditions());
		//</es-section>
	}
});
