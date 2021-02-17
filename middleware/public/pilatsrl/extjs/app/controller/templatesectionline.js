/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:20 GMT-0400 (Bolivia Time)
 * Time: 2:44:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:20
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.templatesectionline', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'templatesectionline.List',
		'templatesectionline.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'templatesectionline'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'templatesectionlineList',
			selector: 'templatesectionlineList'
		},
		{
			ref: 'templatesectionlineAdd',
			selector: 'templatesectionlineAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'templatesectionlineList > toolbar > button#add': {
				click: me.onTemplatesectionlineAddClick
			},
			'templatesectionlineList':{
				removeRow: me.removeRow
			},
			'templatesectionlineAdd > form > button#save': {
				click: me.onTemplatesectionlineAddSaveClick
			},
			'templatesectionlineAdd > form > button#cancel': {
				click: me.onTemplatesectionlineAddCancelClick
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
	onTemplatesectionlineAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getTemplatesectionlineAdd().destroy();
		//</es-section>
	},
	onTemplatesectionlineAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getTemplatesectionlineAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getTemplatesectionlineList().getStore().add(rec);

			me.getTemplatesectionlineAdd().destroy();
		}
		//</es-section>
	},
	onTemplatesectionlineAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('templatesectionlineAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.templatesectionline());
		//</es-section>
	}
});
