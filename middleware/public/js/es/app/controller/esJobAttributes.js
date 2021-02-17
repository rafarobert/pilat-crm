/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Time: 2:25:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esJobAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-job-attributes.List',
		'es-job-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esJobAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esJobAttributesList',
			selector: 'esJobAttributesList'
		},
		{
			ref: 'esJobAttributesAdd',
			selector: 'esJobAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esJobAttributesList > toolbar > button#add': {
				click: me.onEsJobAttributesAddClick
			},
			'esJobAttributesList':{
				removeRow: me.removeRow
			},
			'esJobAttributesAdd > form > button#save': {
				click: me.onEsJobAttributesAddSaveClick
			},
			'esJobAttributesAdd > form > button#cancel': {
				click: me.onEsJobAttributesAddCancelClick
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
	onEsJobAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsJobAttributesAdd().destroy();
		//</es-section>
	},
	onEsJobAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsJobAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsJobAttributesList().getStore().add(rec);

			me.getEsJobAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsJobAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esJobAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esJobAttributes());
		//</es-section>
	}
});
