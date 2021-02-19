/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:51 GMT-0400 (Bolivia Time)
 * Time: 2:43:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:51
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.prospectsCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'prospects-cstm.List',
		'prospects-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'prospects_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'prospectsCstmList',
			selector: 'prospectsCstmList'
		},
		{
			ref: 'prospectsCstmAdd',
			selector: 'prospectsCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'prospectsCstmList > toolbar > button#add': {
				click: me.onProspectsCstmAddClick
			},
			'prospectsCstmList':{
				removeRow: me.removeRow
			},
			'prospectsCstmAdd > form > button#save': {
				click: me.onProspectsCstmAddSaveClick
			},
			'prospectsCstmAdd > form > button#cancel': {
				click: me.onProspectsCstmAddCancelClick
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
	onProspectsCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProspectsCstmAdd().destroy();
		//</es-section>
	},
	onProspectsCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProspectsCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProspectsCstmList().getStore().add(rec);

			me.getProspectsCstmAdd().destroy();
		}
		//</es-section>
	},
	onProspectsCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('prospectsCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.prospectsCstm());
		//</es-section>
	}
});
