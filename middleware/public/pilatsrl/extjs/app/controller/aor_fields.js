/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:25 GMT-0400 (Bolivia Time)
 * Time: 2:41:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:25
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aorFields', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aor-fields.List',
		'aor-fields.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aor_fields'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aorFieldsList',
			selector: 'aorFieldsList'
		},
		{
			ref: 'aorFieldsAdd',
			selector: 'aorFieldsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aorFieldsList > toolbar > button#add': {
				click: me.onAorFieldsAddClick
			},
			'aorFieldsList':{
				removeRow: me.removeRow
			},
			'aorFieldsAdd > form > button#save': {
				click: me.onAorFieldsAddSaveClick
			},
			'aorFieldsAdd > form > button#cancel': {
				click: me.onAorFieldsAddCancelClick
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
	onAorFieldsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAorFieldsAdd().destroy();
		//</es-section>
	},
	onAorFieldsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAorFieldsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAorFieldsList().getStore().add(rec);

			me.getAorFieldsAdd().destroy();
		}
		//</es-section>
	},
	onAorFieldsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aorFieldsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aorFields());
		//</es-section>
	}
});
