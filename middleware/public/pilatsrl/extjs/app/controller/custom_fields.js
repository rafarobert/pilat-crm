/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Time: 2:42:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:21
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.customFields', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'custom-fields.List',
		'custom-fields.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'custom_fields'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'customFieldsList',
			selector: 'customFieldsList'
		},
		{
			ref: 'customFieldsAdd',
			selector: 'customFieldsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'customFieldsList > toolbar > button#add': {
				click: me.onCustomFieldsAddClick
			},
			'customFieldsList':{
				removeRow: me.removeRow
			},
			'customFieldsAdd > form > button#save': {
				click: me.onCustomFieldsAddSaveClick
			},
			'customFieldsAdd > form > button#cancel': {
				click: me.onCustomFieldsAddCancelClick
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
	onCustomFieldsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCustomFieldsAdd().destroy();
		//</es-section>
	},
	onCustomFieldsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCustomFieldsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCustomFieldsList().getStore().add(rec);

			me.getCustomFieldsAdd().destroy();
		}
		//</es-section>
	},
	onCustomFieldsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('customFieldsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.customFields());
		//</es-section>
	}
});
