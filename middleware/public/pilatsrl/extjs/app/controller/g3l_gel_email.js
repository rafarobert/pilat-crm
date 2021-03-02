/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Time: 14:0:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:55
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.g3lGelEmail', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'g3l-gel-email.List',
		'g3l-gel-email.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'g3l_gel_email'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'g3lGelEmailList',
			selector: 'g3lGelEmailList'
		},
		{
			ref: 'g3lGelEmailAdd',
			selector: 'g3lGelEmailAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'g3lGelEmailList > toolbar > button#add': {
				click: me.onG3lGelEmailAddClick
			},
			'g3lGelEmailList':{
				removeRow: me.removeRow
			},
			'g3lGelEmailAdd > form > button#save': {
				click: me.onG3lGelEmailAddSaveClick
			},
			'g3lGelEmailAdd > form > button#cancel': {
				click: me.onG3lGelEmailAddCancelClick
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
	onG3lGelEmailAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getG3lGelEmailAdd().destroy();
		//</es-section>
	},
	onG3lGelEmailAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getG3lGelEmailAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getG3lGelEmailList().getStore().add(rec);

			me.getG3lGelEmailAdd().destroy();
		}
		//</es-section>
	},
	onG3lGelEmailAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('g3lGelEmailAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.g3lGelEmail());
		//</es-section>
	}
});
