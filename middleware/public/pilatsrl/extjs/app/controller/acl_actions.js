/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Time: 2:40:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:51
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aclActions', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'acl-actions.List',
		'acl-actions.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'acl_actions'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aclActionsList',
			selector: 'aclActionsList'
		},
		{
			ref: 'aclActionsAdd',
			selector: 'aclActionsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aclActionsList > toolbar > button#add': {
				click: me.onAclActionsAddClick
			},
			'aclActionsList':{
				removeRow: me.removeRow
			},
			'aclActionsAdd > form > button#save': {
				click: me.onAclActionsAddSaveClick
			},
			'aclActionsAdd > form > button#cancel': {
				click: me.onAclActionsAddCancelClick
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
	onAclActionsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAclActionsAdd().destroy();
		//</es-section>
	},
	onAclActionsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAclActionsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAclActionsList().getStore().add(rec);

			me.getAclActionsAdd().destroy();
		}
		//</es-section>
	},
	onAclActionsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aclActionsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aclActions());
		//</es-section>
	}
});
