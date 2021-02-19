/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Time: 2:41:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:51
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aosQuotesProjectC', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aos-quotes-project-c.List',
		'aos-quotes-project-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aos_quotes_project_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aosQuotesProjectCList',
			selector: 'aosQuotesProjectCList'
		},
		{
			ref: 'aosQuotesProjectCAdd',
			selector: 'aosQuotesProjectCAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aosQuotesProjectCList > toolbar > button#add': {
				click: me.onAosQuotesProjectCAddClick
			},
			'aosQuotesProjectCList':{
				removeRow: me.removeRow
			},
			'aosQuotesProjectCAdd > form > button#save': {
				click: me.onAosQuotesProjectCAddSaveClick
			},
			'aosQuotesProjectCAdd > form > button#cancel': {
				click: me.onAosQuotesProjectCAddCancelClick
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
	onAosQuotesProjectCAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAosQuotesProjectCAdd().destroy();
		//</es-section>
	},
	onAosQuotesProjectCAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAosQuotesProjectCAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAosQuotesProjectCList().getStore().add(rec);

			me.getAosQuotesProjectCAdd().destroy();
		}
		//</es-section>
	},
	onAosQuotesProjectCAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aosQuotesProjectCAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aosQuotesProjectC());
		//</es-section>
	}
});
