/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:02 GMT-0400 (Bolivia Time)
 * Time: 2:41:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:2
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.amProjecttemplatesUsers1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-projecttemplates-users-1-c.List',
		'am-projecttemplates-users-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_projecttemplates_users_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amProjecttemplatesUsers1CList',
			selector: 'amProjecttemplatesUsers1CList'
		},
		{
			ref: 'amProjecttemplatesUsers1CAdd',
			selector: 'amProjecttemplatesUsers1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amProjecttemplatesUsers1CList > toolbar > button#add': {
				click: me.onAmProjecttemplatesUsers1CAddClick
			},
			'amProjecttemplatesUsers1CList':{
				removeRow: me.removeRow
			},
			'amProjecttemplatesUsers1CAdd > form > button#save': {
				click: me.onAmProjecttemplatesUsers1CAddSaveClick
			},
			'amProjecttemplatesUsers1CAdd > form > button#cancel': {
				click: me.onAmProjecttemplatesUsers1CAddCancelClick
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
	onAmProjecttemplatesUsers1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmProjecttemplatesUsers1CAdd().destroy();
		//</es-section>
	},
	onAmProjecttemplatesUsers1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmProjecttemplatesUsers1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmProjecttemplatesUsers1CList().getStore().add(rec);

			me.getAmProjecttemplatesUsers1CAdd().destroy();
		}
		//</es-section>
	},
	onAmProjecttemplatesUsers1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amProjecttemplatesUsers1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amProjecttemplatesUsers1C());
		//</es-section>
	}
});
