/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:29 GMT-0400 (Bolivia Time)
 * Time: 2:42:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:29 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:29
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailman', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'emailman.List',
		'emailman.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'emailman'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailmanList',
			selector: 'emailmanList'
		},
		{
			ref: 'emailmanAdd',
			selector: 'emailmanAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailmanList > toolbar > button#add': {
				click: me.onEmailmanAddClick
			},
			'emailmanList':{
				removeRow: me.removeRow
			},
			'emailmanAdd > form > button#save': {
				click: me.onEmailmanAddSaveClick
			},
			'emailmanAdd > form > button#cancel': {
				click: me.onEmailmanAddCancelClick
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
	onEmailmanAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailmanAdd().destroy();
		//</es-section>
	},
	onEmailmanAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailmanAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailmanList().getStore().add(rec);

			me.getEmailmanAdd().destroy();
		}
		//</es-section>
	},
	onEmailmanAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailmanAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailman());
		//</es-section>
	}
});
