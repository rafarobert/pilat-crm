/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:29 GMT-0400 (Bolivia Time)
 * Time: 2:43:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:29 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:29
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.opportunitiesCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'opportunities-cstm.List',
		'opportunities-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'opportunities_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'opportunitiesCstmList',
			selector: 'opportunitiesCstmList'
		},
		{
			ref: 'opportunitiesCstmAdd',
			selector: 'opportunitiesCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'opportunitiesCstmList > toolbar > button#add': {
				click: me.onOpportunitiesCstmAddClick
			},
			'opportunitiesCstmList':{
				removeRow: me.removeRow
			},
			'opportunitiesCstmAdd > form > button#save': {
				click: me.onOpportunitiesCstmAddSaveClick
			},
			'opportunitiesCstmAdd > form > button#cancel': {
				click: me.onOpportunitiesCstmAddCancelClick
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
	onOpportunitiesCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getOpportunitiesCstmAdd().destroy();
		//</es-section>
	},
	onOpportunitiesCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getOpportunitiesCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getOpportunitiesCstmList().getStore().add(rec);

			me.getOpportunitiesCstmAdd().destroy();
		}
		//</es-section>
	},
	onOpportunitiesCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('opportunitiesCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.opportunitiesCstm());
		//</es-section>
	}
});
