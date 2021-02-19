/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Time: 2:42:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.callsCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'calls-cstm.List',
		'calls-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'calls_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'callsCstmList',
			selector: 'callsCstmList'
		},
		{
			ref: 'callsCstmAdd',
			selector: 'callsCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'callsCstmList > toolbar > button#add': {
				click: me.onCallsCstmAddClick
			},
			'callsCstmList':{
				removeRow: me.removeRow
			},
			'callsCstmAdd > form > button#save': {
				click: me.onCallsCstmAddSaveClick
			},
			'callsCstmAdd > form > button#cancel': {
				click: me.onCallsCstmAddCancelClick
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
	onCallsCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getCallsCstmAdd().destroy();
		//</es-section>
	},
	onCallsCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getCallsCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getCallsCstmList().getStore().add(rec);

			me.getCallsCstmAdd().destroy();
		}
		//</es-section>
	},
	onCallsCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('callsCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.callsCstm());
		//</es-section>
	}
});
