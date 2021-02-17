/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Time: 20:7:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Last time updated: 20:7:17
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.g3lGelWhatsapp', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'g3l-gel-whatsapp.List',
		'g3l-gel-whatsapp.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'g3l_gel_whatsapp'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'g3lGelWhatsappList',
			selector: 'g3lGelWhatsappList'
		},
		{
			ref: 'g3lGelWhatsappAdd',
			selector: 'g3lGelWhatsappAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'g3lGelWhatsappList > toolbar > button#add': {
				click: me.onG3lGelWhatsappAddClick
			},
			'g3lGelWhatsappList':{
				removeRow: me.removeRow
			},
			'g3lGelWhatsappAdd > form > button#save': {
				click: me.onG3lGelWhatsappAddSaveClick
			},
			'g3lGelWhatsappAdd > form > button#cancel': {
				click: me.onG3lGelWhatsappAddCancelClick
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
	onG3lGelWhatsappAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getG3lGelWhatsappAdd().destroy();
		//</es-section>
	},
	onG3lGelWhatsappAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getG3lGelWhatsappAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getG3lGelWhatsappList().getStore().add(rec);

			me.getG3lGelWhatsappAdd().destroy();
		}
		//</es-section>
	},
	onG3lGelWhatsappAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('g3lGelWhatsappAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.g3lGelWhatsapp());
		//</es-section>
	}
});
