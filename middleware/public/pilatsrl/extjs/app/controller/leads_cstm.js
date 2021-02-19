/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Time: 2:43:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:8
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.leadsCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'leads-cstm.List',
		'leads-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'leads_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'leadsCstmList',
			selector: 'leadsCstmList'
		},
		{
			ref: 'leadsCstmAdd',
			selector: 'leadsCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'leadsCstmList > toolbar > button#add': {
				click: me.onLeadsCstmAddClick
			},
			'leadsCstmList':{
				removeRow: me.removeRow
			},
			'leadsCstmAdd > form > button#save': {
				click: me.onLeadsCstmAddSaveClick
			},
			'leadsCstmAdd > form > button#cancel': {
				click: me.onLeadsCstmAddCancelClick
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
	onLeadsCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getLeadsCstmAdd().destroy();
		//</es-section>
	},
	onLeadsCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getLeadsCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getLeadsCstmList().getStore().add(rec);

			me.getLeadsCstmAdd().destroy();
		}
		//</es-section>
	},
	onLeadsCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('leadsCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.leadsCstm());
		//</es-section>
	}
});
