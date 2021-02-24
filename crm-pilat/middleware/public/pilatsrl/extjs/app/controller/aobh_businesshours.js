/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:08 GMT-0400 (Bolivia Time)
 * Time: 2:41:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:8
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aobhBusinesshours', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aobh-businesshours.List',
		'aobh-businesshours.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aobh_businesshours'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aobhBusinesshoursList',
			selector: 'aobhBusinesshoursList'
		},
		{
			ref: 'aobhBusinesshoursAdd',
			selector: 'aobhBusinesshoursAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aobhBusinesshoursList > toolbar > button#add': {
				click: me.onAobhBusinesshoursAddClick
			},
			'aobhBusinesshoursList':{
				removeRow: me.removeRow
			},
			'aobhBusinesshoursAdd > form > button#save': {
				click: me.onAobhBusinesshoursAddSaveClick
			},
			'aobhBusinesshoursAdd > form > button#cancel': {
				click: me.onAobhBusinesshoursAddCancelClick
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
	onAobhBusinesshoursAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAobhBusinesshoursAdd().destroy();
		//</es-section>
	},
	onAobhBusinesshoursAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAobhBusinesshoursAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAobhBusinesshoursList().getStore().add(rec);

			me.getAobhBusinesshoursAdd().destroy();
		}
		//</es-section>
	},
	onAobhBusinesshoursAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aobhBusinesshoursAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aobhBusinesshours());
		//</es-section>
	}
});
