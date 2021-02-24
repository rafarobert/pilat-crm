/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Time: 12:54:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Last time updated: 12:54:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.pilatMails', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'pilat-mails.List',
		'pilat-mails.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'pilat_mails'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'pilatMailsList',
			selector: 'pilatMailsList'
		},
		{
			ref: 'pilatMailsAdd',
			selector: 'pilatMailsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'pilatMailsList > toolbar > button#add': {
				click: me.onPilatMailsAddClick
			},
			'pilatMailsList':{
				removeRow: me.removeRow
			},
			'pilatMailsAdd > form > button#save': {
				click: me.onPilatMailsAddSaveClick
			},
			'pilatMailsAdd > form > button#cancel': {
				click: me.onPilatMailsAddCancelClick
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
	onPilatMailsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getPilatMailsAdd().destroy();
		//</es-section>
	},
	onPilatMailsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getPilatMailsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getPilatMailsList().getStore().add(rec);

			me.getPilatMailsAdd().destroy();
		}
		//</es-section>
	},
	onPilatMailsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('pilatMailsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.pilatMails());
		//</es-section>
	}
});
