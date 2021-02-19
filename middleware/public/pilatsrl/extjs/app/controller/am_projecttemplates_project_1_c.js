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

Ext.define('es.controller.amProjecttemplatesProject1C', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'am-projecttemplates-project-1-c.List',
		'am-projecttemplates-project-1-c.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'am_projecttemplates_project_1_c'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'amProjecttemplatesProject1CList',
			selector: 'amProjecttemplatesProject1CList'
		},
		{
			ref: 'amProjecttemplatesProject1CAdd',
			selector: 'amProjecttemplatesProject1CAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'amProjecttemplatesProject1CList > toolbar > button#add': {
				click: me.onAmProjecttemplatesProject1CAddClick
			},
			'amProjecttemplatesProject1CList':{
				removeRow: me.removeRow
			},
			'amProjecttemplatesProject1CAdd > form > button#save': {
				click: me.onAmProjecttemplatesProject1CAddSaveClick
			},
			'amProjecttemplatesProject1CAdd > form > button#cancel': {
				click: me.onAmProjecttemplatesProject1CAddCancelClick
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
	onAmProjecttemplatesProject1CAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAmProjecttemplatesProject1CAdd().destroy();
		//</es-section>
	},
	onAmProjecttemplatesProject1CAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAmProjecttemplatesProject1CAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAmProjecttemplatesProject1CList().getStore().add(rec);

			me.getAmProjecttemplatesProject1CAdd().destroy();
		}
		//</es-section>
	},
	onAmProjecttemplatesProject1CAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('amProjecttemplatesProject1CAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.amProjecttemplatesProject1C());
		//</es-section>
	}
});
