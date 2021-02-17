/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Time: 2:44:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:5
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.securitygroupsDefault', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'securitygroups-default.List',
		'securitygroups-default.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'securitygroups_default'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'securitygroupsDefaultList',
			selector: 'securitygroupsDefaultList'
		},
		{
			ref: 'securitygroupsDefaultAdd',
			selector: 'securitygroupsDefaultAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'securitygroupsDefaultList > toolbar > button#add': {
				click: me.onSecuritygroupsDefaultAddClick
			},
			'securitygroupsDefaultList':{
				removeRow: me.removeRow
			},
			'securitygroupsDefaultAdd > form > button#save': {
				click: me.onSecuritygroupsDefaultAddSaveClick
			},
			'securitygroupsDefaultAdd > form > button#cancel': {
				click: me.onSecuritygroupsDefaultAddCancelClick
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
	onSecuritygroupsDefaultAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getSecuritygroupsDefaultAdd().destroy();
		//</es-section>
	},
	onSecuritygroupsDefaultAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getSecuritygroupsDefaultAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getSecuritygroupsDefaultList().getStore().add(rec);

			me.getSecuritygroupsDefaultAdd().destroy();
		}
		//</es-section>
	},
	onSecuritygroupsDefaultAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('securitygroupsDefaultAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.securitygroupsDefault());
		//</es-section>
	}
});
