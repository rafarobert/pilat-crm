/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:54 GMT-0400 (Bolivia Time)
 * Time: 2:41:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:54
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aowProcessed', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aow-processed.List',
		'aow-processed.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aow_processed'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aowProcessedList',
			selector: 'aowProcessedList'
		},
		{
			ref: 'aowProcessedAdd',
			selector: 'aowProcessedAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aowProcessedList > toolbar > button#add': {
				click: me.onAowProcessedAddClick
			},
			'aowProcessedList':{
				removeRow: me.removeRow
			},
			'aowProcessedAdd > form > button#save': {
				click: me.onAowProcessedAddSaveClick
			},
			'aowProcessedAdd > form > button#cancel': {
				click: me.onAowProcessedAddCancelClick
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
	onAowProcessedAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAowProcessedAdd().destroy();
		//</es-section>
	},
	onAowProcessedAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAowProcessedAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAowProcessedList().getStore().add(rec);

			me.getAowProcessedAdd().destroy();
		}
		//</es-section>
	},
	onAowProcessedAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aowProcessedAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aowProcessed());
		//</es-section>
	}
});
