/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:52 GMT-0400 (Bolivia Time)
 * Time: 2:41:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:52
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aowActions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aow-actions.List',
		'aow-actions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aow_actions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aowActionsList',
			selector: 'aowActionsList'
		},
		{
			ref: 'aowActionsAdd',
			selector: 'aowActionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aowActionsList > toolbar > button#add': {
				click: me.onAowActionsAddClick
			},
			'aowActionsList':{
				removeRow: me.removeRow
			},
			'aowActionsAdd > form > button#save': {
				click: me.onAowActionsAddSaveClick
			},
			'aowActionsAdd > form > button#cancel': {
				click: me.onAowActionsAddCancelClick
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
	onAowActionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAowActionsAdd().destroy();
		//</es-section>
	},
	onAowActionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAowActionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAowActionsList().getStore().add(rec);

			me.getAowActionsAdd().destroy();
		}
		//</es-section>
	},
	onAowActionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aowActionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aowActions());
		//</es-section>
	}
});
