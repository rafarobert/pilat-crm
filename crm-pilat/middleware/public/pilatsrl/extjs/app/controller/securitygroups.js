/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:03 GMT-0400 (Bolivia Time)
 * Time: 2:44:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:3
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.securitygroups', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'securitygroups.List',
		'securitygroups.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'securitygroups'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'securitygroupsList',
			selector: 'securitygroupsList'
		},
		{
			ref: 'securitygroupsAdd',
			selector: 'securitygroupsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'securitygroupsList > toolbar > button#add': {
				click: me.onSecuritygroupsAddClick
			},
			'securitygroupsList':{
				removeRow: me.removeRow
			},
			'securitygroupsAdd > form > button#save': {
				click: me.onSecuritygroupsAddSaveClick
			},
			'securitygroupsAdd > form > button#cancel': {
				click: me.onSecuritygroupsAddCancelClick
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
	onSecuritygroupsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSecuritygroupsAdd().destroy();
		//</es-section>
	},
	onSecuritygroupsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSecuritygroupsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSecuritygroupsList().getStore().add(rec);

			me.getSecuritygroupsAdd().destroy();
		}
		//</es-section>
	},
	onSecuritygroupsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('securitygroupsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.securitygroups());
		//</es-section>
	}
});
