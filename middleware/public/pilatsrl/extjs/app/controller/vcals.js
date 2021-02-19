/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:28 GMT-0400 (Bolivia Time)
 * Time: 2:44:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:28
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.vcals', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'vcals.List',
		'vcals.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'vcals'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'vcalsList',
			selector: 'vcalsList'
		},
		{
			ref: 'vcalsAdd',
			selector: 'vcalsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'vcalsList > toolbar > button#add': {
				click: me.onVcalsAddClick
			},
			'vcalsList':{
				removeRow: me.removeRow
			},
			'vcalsAdd > form > button#save': {
				click: me.onVcalsAddSaveClick
			},
			'vcalsAdd > form > button#cancel': {
				click: me.onVcalsAddCancelClick
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
	onVcalsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getVcalsAdd().destroy();
		//</es-section>
	},
	onVcalsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getVcalsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getVcalsList().getStore().add(rec);

			me.getVcalsAdd().destroy();
		}
		//</es-section>
	},
	onVcalsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('vcalsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.vcals());
		//</es-section>
	}
});
