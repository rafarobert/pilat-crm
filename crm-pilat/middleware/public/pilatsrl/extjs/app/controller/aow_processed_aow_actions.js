/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:55 GMT-0400 (Bolivia Time)
 * Time: 2:41:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:55
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aowProcessedAowActions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aow-processed-aow-actions.List',
		'aow-processed-aow-actions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aow_processed_aow_actions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aowProcessedAowActionsList',
			selector: 'aowProcessedAowActionsList'
		},
		{
			ref: 'aowProcessedAowActionsAdd',
			selector: 'aowProcessedAowActionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aowProcessedAowActionsList > toolbar > button#add': {
				click: me.onAowProcessedAowActionsAddClick
			},
			'aowProcessedAowActionsList':{
				removeRow: me.removeRow
			},
			'aowProcessedAowActionsAdd > form > button#save': {
				click: me.onAowProcessedAowActionsAddSaveClick
			},
			'aowProcessedAowActionsAdd > form > button#cancel': {
				click: me.onAowProcessedAowActionsAddCancelClick
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
	onAowProcessedAowActionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAowProcessedAowActionsAdd().destroy();
		//</es-section>
	},
	onAowProcessedAowActionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAowProcessedAowActionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAowProcessedAowActionsList().getStore().add(rec);

			me.getAowProcessedAowActionsAdd().destroy();
		}
		//</es-section>
	},
	onAowProcessedAowActionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aowProcessedAowActionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aowProcessedAowActions());
		//</es-section>
	}
});
