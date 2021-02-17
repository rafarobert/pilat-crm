/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:58 GMT-0400 (Bolivia Time)
 * Time: 2:40:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:58
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.amProjecttemplates', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-projecttemplates.List',
		'am-projecttemplates.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_projecttemplates'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amProjecttemplatesList',
			selector: 'amProjecttemplatesList'
		},
		{
			ref: 'amProjecttemplatesAdd',
			selector: 'amProjecttemplatesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amProjecttemplatesList > toolbar > button#add': {
				click: me.onAmProjecttemplatesAddClick
			},
			'amProjecttemplatesList':{
				removeRow: me.removeRow
			},
			'amProjecttemplatesAdd > form > button#save': {
				click: me.onAmProjecttemplatesAddSaveClick
			},
			'amProjecttemplatesAdd > form > button#cancel': {
				click: me.onAmProjecttemplatesAddCancelClick
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
	onAmProjecttemplatesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmProjecttemplatesAdd().destroy();
		//</es-section>
	},
	onAmProjecttemplatesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmProjecttemplatesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmProjecttemplatesList().getStore().add(rec);

			me.getAmProjecttemplatesAdd().destroy();
		}
		//</es-section>
	},
	onAmProjecttemplatesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amProjecttemplatesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amProjecttemplates());
		//</es-section>
	}
});
