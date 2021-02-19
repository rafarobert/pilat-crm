/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Time: 2:41:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:50
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosQuotesCstm', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-quotes-cstm.List',
		'aos-quotes-cstm.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_quotes_cstm'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosQuotesCstmList',
			selector: 'aosQuotesCstmList'
		},
		{
			ref: 'aosQuotesCstmAdd',
			selector: 'aosQuotesCstmAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosQuotesCstmList > toolbar > button#add': {
				click: me.onAosQuotesCstmAddClick
			},
			'aosQuotesCstmList':{
				removeRow: me.removeRow
			},
			'aosQuotesCstmAdd > form > button#save': {
				click: me.onAosQuotesCstmAddSaveClick
			},
			'aosQuotesCstmAdd > form > button#cancel': {
				click: me.onAosQuotesCstmAddCancelClick
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
	onAosQuotesCstmAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosQuotesCstmAdd().destroy();
		//</es-section>
	},
	onAosQuotesCstmAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosQuotesCstmAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosQuotesCstmList().getStore().add(rec);

			me.getAosQuotesCstmAdd().destroy();
		}
		//</es-section>
	},
	onAosQuotesCstmAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosQuotesCstmAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosQuotesCstm());
		//</es-section>
	}
});
