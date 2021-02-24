/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:28 GMT-0400 (Bolivia Time)
 * Time: 2:42:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:28
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.eapm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'eapm.List',
		'eapm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'eapm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'eapmList',
			selector: 'eapmList'
		},
		{
			ref: 'eapmAdd',
			selector: 'eapmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'eapmList > toolbar > button#add': {
				click: me.onEapmAddClick
			},
			'eapmList':{
				removeRow: me.removeRow
			},
			'eapmAdd > form > button#save': {
				click: me.onEapmAddSaveClick
			},
			'eapmAdd > form > button#cancel': {
				click: me.onEapmAddCancelClick
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
	onEapmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEapmAdd().destroy();
		//</es-section>
	},
	onEapmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEapmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEapmList().getStore().add(rec);

			me.getEapmAdd().destroy();
		}
		//</es-section>
	},
	onEapmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('eapmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.eapm());
		//</es-section>
	}
});
