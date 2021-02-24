/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Time: 2:41:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:38
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosPdfTemplates', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-pdf-templates.List',
		'aos-pdf-templates.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_pdf_templates'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosPdfTemplatesList',
			selector: 'aosPdfTemplatesList'
		},
		{
			ref: 'aosPdfTemplatesAdd',
			selector: 'aosPdfTemplatesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosPdfTemplatesList > toolbar > button#add': {
				click: me.onAosPdfTemplatesAddClick
			},
			'aosPdfTemplatesList':{
				removeRow: me.removeRow
			},
			'aosPdfTemplatesAdd > form > button#save': {
				click: me.onAosPdfTemplatesAddSaveClick
			},
			'aosPdfTemplatesAdd > form > button#cancel': {
				click: me.onAosPdfTemplatesAddCancelClick
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
	onAosPdfTemplatesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosPdfTemplatesAdd().destroy();
		//</es-section>
	},
	onAosPdfTemplatesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosPdfTemplatesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosPdfTemplatesList().getStore().add(rec);

			me.getAosPdfTemplatesAdd().destroy();
		}
		//</es-section>
	},
	onAosPdfTemplatesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosPdfTemplatesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosPdfTemplates());
		//</es-section>
	}
});
